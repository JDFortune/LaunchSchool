def say_name_age
  name = get_name
  age = rand(20..200)
  puts "#{name} is #{age} years old!"
end

def get_name
  print "Enter a name: "
  name = gets.chomp
  name.empty? ? 'Teddy' : name
end


say_name_age