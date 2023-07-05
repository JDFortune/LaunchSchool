def test_method
  prompt('test message')
end

def prompt(message)
  puts "=> #{message}"
end

test_method
