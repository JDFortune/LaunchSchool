require 'minitest'

def hello(output: $stdout)
  output.puts "Hello"
end

hello()