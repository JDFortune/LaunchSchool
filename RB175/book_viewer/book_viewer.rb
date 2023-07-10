require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"

get "/" do
  @title = "The Adventures of Sherlock Holmes"
  @contents = File.readlines("data/toc.txt")
  erb :home, layout: :layout
end

get "/chapters/1" do
  @title = "Chapter 1"
  @contents = File.readlines("data/toc.txt")
  @chapter = File.read("data/chp1.txt").split("\n\n")

  erb :chapter
end

# get "/chapters/2" do
#   @title = "Chapter 2"
#   @contents = File.readlines("data/toc.txt")
#   @chapter = File.read("data/chp2.txt").split("\n\n")

#   erb :chapter
# end

# get "/chapters/3" do
#   @title = "Chapter 3"
#   @contents = File.readlines("data/toc.txt")
#   @chapter = File.read("data/chp3.txt").split("\n\n")

#   erb :chapter
# end

# get "/chapters/4" do
#   @title = "Chapter 4"
#   @contents = File.readlines("data/toc.txt")
#   @chapter = File.read("data/chp4.txt").split("\n\n")

#   erb :chapter
# end

# get "/chapters/5" do
#   @title = "Chapter 5"
#   @contents = File.readlines("data/toc.txt")
#   @chapter = File.read("data/chp5.txt").split("\n\n")

#   erb :chapter
# end

# get "/chapters/6" do
#   @title = "Chapter 6"
#   @contents = File.readlines("data/toc.txt")
#   @chapter = File.read("data/chp6.txt").split("\n\n")

#   erb :chapter
# end

# get "/chapters/7" do
#   @title = "Chapter 7"
#   @contents = File.readlines("data/toc.txt")
#   @chapter = File.read("data/chp7.txt").split("\n\n")

#   erb :chapter
# end

# get "/chapters/8" do
#   @title = "Chapter 8"
#   @contents = File.readlines("data/toc.txt")
#   @chapter = File.read("data/chp8.txt").split("\n\n")

#   erb :chapter
# end

# get "/chapters/9" do
#   @title = "Chapter 9"
#   @contents = File.readlines("data/toc.txt")
#   @chapter = File.read("data/chp9.txt").split("\n\n")

#   erb :chapter
# end

# get "/chapters/10" do
#   @title = "Chapter 10"
#   @contents = File.readlines("data/toc.txt")
#   @chapter = File.read("data/chp10.txt").split("\n\n")

#   erb :chapter
# end

# get "/chapters/11" do
#   @title = "Chapter 11"
#   @contents = File.readlines("data/toc.txt")
#   @chapter = File.read("data/chp11.txt").split("\n\n")

#   erb :chapter
# end

# get "/chapters/12" do
#   @title = "Chapter 12"
#   @contents = File.readlines("data/toc.txt")
#   @chapter = File.read("data/chp12.txt").split("\n\n")

#   erb :chapter
# end
