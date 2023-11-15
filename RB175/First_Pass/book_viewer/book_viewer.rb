require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"

def each_chapter
  @contents.each.with_index(1) do |name, number|
    contents = File.read("data/chp#{number}.txt")
    yield number, name, contents
  end
end

def chapters_matching(query)
  results = []

  return results unless query

  each_chapter do |number, name, contents|
    matches = {}
    contents.split("\n\n").each_with_index do |paragraph, index|
      matches[index] = paragraph if paragraph.include?(query)
    end

    results << {number: number, name: name, paragraphs: matches}
  end

  results
end

def count_instances_of_query(results)
  count = 0

  results.each do |hash|
    count += hash[:paragraphs].size
  end

  count
end

get "/search" do
  @results = chapters_matching(params[:query])
  @count = count_instances_of_query(@results)
  erb :search
end

before do
 @contents = File.readlines("data/toc.txt")
end

helpers do
  def in_paragraphs(text)
    text.split("\n\n").each_with_index.map do |paragraph, idx|
      "<p id=paragraph#{idx}>#{paragraph}</p>"
    end.join
  end

  def highlight(text, term)
    text.gsub(term, %(<strong>#{term}</strong>))
  end
end

get "/" do
  @title = "The Adventures of Sherlock Holmes"
  
  erb :home, layout: :layout
end

get "/chapters/:number" do  
  number = params[:number].to_i
  chapter_name = @contents[(number - 1)]
  
  redirect "/" unless (1..@contents.size).cover?(number)

  @title = "Chapter #{number}: #{chapter_name}"
  @chapter = File.read("data/chp#{number}.txt")

  erb :chapter
end

get "/show/:name" do
  params[:name]
end

not_found do
  redirect "/"
end


