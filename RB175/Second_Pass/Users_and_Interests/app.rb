require 'yaml'

require 'sinatra'
require 'sinatra/reloader'
require 'tilt/erubis'



before do
  @users = YAML.load_file("public/users.yaml")
end

helpers do
  def count_interests(users)
    users.reduce(0) do |sum, (name, info)|
      sum + info[:interests].size
    end
  end
    
end

get "/" do
  redirect "/users"
end

get "/users" do
  erb :users
end

get "/:name" do
  @info = @users[params[:name].to_sym]

  erb :user
end