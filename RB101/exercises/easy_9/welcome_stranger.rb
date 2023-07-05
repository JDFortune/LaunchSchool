

def greetings(array, hash)
  profession = hash.values.join(' ')
  puts "Hello, #{array.join(' ')}! Nice to have a #{profession} around."
end

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })