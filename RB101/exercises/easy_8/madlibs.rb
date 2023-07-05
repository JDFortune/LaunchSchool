template = %w(noun verb adjective adverb)
words = {}

template.each do |part|
  puts "Enter a #{part}"
  input = gets.chomp
  words[part] = input
end

puts "The #{words['noun']}, #{words['verb']} #{words['adverb']} into the #{words['adjective']} coffee shop."
