require 'sinatra'
require 'sinatra/reloader'
require 'tilt/erubis'

get '/' do
  @content = Dir.glob("public/*").map {|file| File.basename(file)}.sort
  @content.reverse! if params[:sort]=="desc"

  erb :index
end