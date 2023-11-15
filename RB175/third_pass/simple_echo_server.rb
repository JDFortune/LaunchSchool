require 'socket'

server = TCPServer.new('localhost', 3003)

loop do
  client = server.accept
  
  request_line = client.gets
  next if !request_line || request_line =~ /favicon/
  puts request_line
  client.puts "<form><textarea>Hello</textarea></form>"
  client.puts request_line
  client.close
end