require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"

get "/" do
  @title = "The Adventures of Sherlock Holmes"
  @contents = File.readlines("data/toc.txt")
  erb :home, layout: :layout
end

get "/chapters/1" do

  @contents = File.readlines("data/toc.txt")
  @title = "Chapter 1: #{@contents[0]}"
  @chapter = File.read("data/chp1.txt").split("\n\n")

  erb :chapter
end

get "/chapters/2" do
  @contents = File.readlines("data/toc.txt")
  @title = "Chapter 2: #{@contents[1]}"
  @chapter = File.read("data/chp2.txt").split("\n\n")

  erb :chapter
end

get "/chapters/3" do
  @contents = File.readlines("data/toc.txt")
  @title = "Chapter 3: #{@contents[2]}"
  @chapter = File.read("data/chp3.txt").split("\n\n")

  erb :chapter
end

get "/chapters/4" do
  @contents = File.readlines("data/toc.txt")
  @title = "Chapter 4: #{@contents[3]}"
  @chapter = File.read("data/chp4.txt").split("\n\n")

  erb :chapter
end

get "/chapters/5" do
  @contents = File.readlines("data/toc.txt")
  @title = "Chapter 5: #{@contents[4]}"
  @chapter = File.read("data/chp5.txt").split("\n\n")

  erb :chapter
end

get "/chapters/6" do
  @contents = File.readlines("data/toc.txt")
  @title = "Chapter 6: #{@contents[5]}"
  @chapter = File.read("data/chp6.txt").split("\n\n")

  erb :chapter
end

get "/chapters/7" do
  @contents = File.readlines("data/toc.txt")
  @title = "Chapter 7: #{@contents[6]}"
  @chapter = File.read("data/chp7.txt").split("\n\n")

  erb :chapter
end

get "/chapters/8" do
  @contents = File.readlines("data/toc.txt")
  @title = "Chapter 8: #{@contents[7]}"
  @chapter = File.read("data/chp8.txt").split("\n\n")

  erb :chapter
end

get "/chapters/9" do
  @contents = File.readlines("data/toc.txt")
  @title = "Chapter 9: #{@contents[8]}"
  @chapter = File.read("data/chp9.txt").split("\n\n")

  erb :chapter
end

get "/chapters/10" do
  @contents = File.readlines("data/toc.txt")
  @title = "Chapter 10: #{@contents[9]}"
  @chapter = File.read("data/chp10.txt").split("\n\n")

  erb :chapter
end

get "/chapters/11" do
  @contents = File.readlines("data/toc.txt")
  @title = "Chapter 11: #{@contents[10]}"
  @chapter = File.read("data/chp11.txt").split("\n\n")

  erb :chapter
end

get "/chapters/12" do
  @contents = File.readlines("data/toc.txt")
  @title = "Chapter 12: #{@contents[11]}"
  @chapter = File.read("data/chp12.txt").split("\n\n")

  erb :chapter
end
