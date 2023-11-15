require "socket"

def parse_request(request_line)
  http_method, path_and_params, version = request_line.split
  path, params = path_and_params.split("?")

  params = params.split('&').each_with_object({}) do |pair, hash|
    key, value = pair.split('=')
    hash[key] = value.to_i
  end

  [http_method, path, params]
end

server = TCPServer.new('localhost', 3003)
loop do
  client = server.accept

  request_line = client.gets
  next if !request_line || request_line =~ /favicon/
  puts request_line

  http_method, path, params = parse_request(request_line)

  puts "HTTP method is #{http_method}"
  puts "path is #{path}"
  puts "params are #{params}"

  client.puts 'HTTP/1.1 200 OK'
  client.puts 'Content-Type: text/html'
  client.puts
  client.puts '<html>'
  client.puts '<head>'
  client.puts '<title>Rolls</title>'
  client.puts '<meta charset="utf-8"/>'
  client.puts '<style>'
  client.puts 'p { display: inline; color: lightgreen; };'
  client.puts '</style>'
  client.puts '</head>'
  client.puts '<body>'
  client.puts '<pre>'
  client.puts http_method
  client.puts path
  client.puts params
  client.puts '</pre>'

  
  client.puts '<h1>Rolls!</h1>'

  rolls = params['rolls']
  sides = params['sides']

  rolls.times do
    roll = rand(sides) + 1
    client.puts '<p>', roll, '</p>'
  end

  client.puts '</body>'
  client.puts '</html>'

  client.close
end