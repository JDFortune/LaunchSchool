require 'sinatra'

# get '/hello/:name' do
#   "Hello #{params['name']}!\n"
# end

# get /\/hello\/([\w]+)/ do
#   "Hello, #{params['captures'].}!\n"
# end

# get %r{/hello/([\w]+)} do |c|
#   "Hello, #{c}!\n"
# end

class Stream
  def each
    100.times { |i| yield "#{i}\n" }
  end
end

get('/') { Stream.new }