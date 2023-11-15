require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"
require "redcarpet"
require "yaml"
require "bcrypt"

USERS = YAML.load(File.read("users.yml")).to_h

configure do
  enable :sessions
  set :session_secret, SecureRandom.hex(32)
end

#### Application Helper Methods ####
def data_path
  if ENV["RACK_ENV"] == "test"
    File.expand_path("../test/data", __FILE__)
  else
    File.expand_path("../data", __FILE__)
  end
end

def render_markdown(text)
  markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  markdown.render(text)
end

def load_file_content(path)
  content = File.read(path)
  case File.extname(path)
  when '.txt'
    headers["Content-Type"] = 'text/plain'
    content
  when '.md'
    erb render_markdown(content)
  end
end

def signed_in?
  users = load_user_credentials
  users.keys.include?(session[:username])
end

def halt_if_signed_out
  if !signed_in?
    session[:message] = "You must be signed in to do that."
    redirect "/"
  end
end

def load_user_credentials
  credentials_path = if ENV["RACK_ENV"] == "test"
    File.expand_path("../test/users.yml", __FILE__)
  else
    File.expand_path("../users.yml", __FILE__)
  end
  YAML.load(File.read(credentials_path))
end

def valid_credentials?(username, password)
  credentials = load_user_credentials

  if credentials.key?(username)
    bcrypt_password = BCrypt::Password.new(credentials[username])
    bcrypt_password == password
  else
    false
  end
end

####################################

####### View Helpers ###############

####################################

########### Routes #################
get "/" do
  pattern = File.join(data_path, '*')
  @files = Dir.glob(pattern).map do |file_path|
    File.basename(file_path)
  end
  erb :index
end

get "/new" do
  halt_if_signed_out

  erb :new
end

get "/users/signin" do
  erb :signin
end

get "/:file_name" do
  file_path = File.join(data_path, params[:file_name])
  
  if File.file?(file_path)
    load_file_content(file_path)
  else
    session[:message] = "#{params[:file_name]} does not exist."
    redirect "/"
  end
end

get "/:file_name/edit" do
  halt_if_signed_out

  @file_name = params[:file_name]
  file_path = File.join(data_path, @file_name)

  @content = File.read(file_path)

  erb :edit
end

## POSTS ##
post "/new" do
  halt_if_signed_out

  doc_name = params[:document_name].strip
  content = params[:content]

  if !(1..100).cover?(doc_name.size) || File.extname(doc_name).empty?
    session[:message] = "Document must have a name and extension (ex. .txt or .md)."
    status 422
    erb :new
  else
    file_path = File.join(data_path, doc_name)
    
    File.write(file_path, content)
    session[:message] = "#{doc_name} has been created."

    redirect "/"
  end
end

post "/users/signin" do
  users = load_user_credentials
  password = params[:passowrd]
  if valid_credentials?(params[:username], params[:password])
    session[:username] = params[:username]

    session[:message] = "Welcome!"
    redirect "/"
  else
    session[:message] = "Invalid credentials."
    status 422
    erb :signin
  end
end


post "/users/signout" do
  session.delete(:username)
  session.delete(:password)
  session[:message] = "You have been signed out."

  redirect "/"
end


post "/:file_name" do
  halt_if_signed_out

  file_path = File.join(data_path, params[:file_name])

  File.write(file_path, params[:content])

  session[:message] = "#{params[:file_name]} has been updated."
  redirect "/"
end

post "/:file_name/delete" do
  halt_if_signed_out

  file_path = File.join(data_path, params[:file_name])

  File.delete(file_path)

  session[:message] = "#{params[:file_name]} has been deleted."
  redirect "/"
end
####################################