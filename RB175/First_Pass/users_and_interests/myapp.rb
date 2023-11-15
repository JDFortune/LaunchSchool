# users and intersts
require 'yaml'

require 'sinatra'
require 'sinatra/reloader'
require 'tilt/erubis'


before do
  @users_info = YAML.load_file("users.yml")
end

helpers do
  def total_interests
    count = 0
    @users_info.each do |_, info|
      count += info[:interests].size
    end
    count
  end
end

def other_users(current, all_users)
  all_users.select {|name, info| name != current}.keys
end

get '/' do
  redirect "/users"
end

get '/users' do
  erb :home
end

get '/users/:name' do
  @name = params[:name].to_sym
  @user = @users_info[@name]
  @others = @users_info.select {|name, info| name != @name}.keys

  erb :user
end