### PART 1 ###
=begin
items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  yield(items)
  puts "Nice selection of food we have gathered!"
end

gather(items) do |items|
  items.map!(&:capitalize)
  case items.size
  when 1
    items = items[0]
  when 2
    items = items.join(' and ')
  else
    items = "#{items[0..-2].join(', ')}, and #{items[-1]}"
  end
  puts items
end
=end

### PART 2 ###
=begin
birds = %w(raven finch hawk eagle)

def pass(birds)
  yield birds
end

pass(birds) do |_,_,*raptors|
  p raptors
end
=end

### PART 3 ###
=begin
items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  yield(items)
  puts "We've finished gathering!"
end

gather(items) do |*foods, grain|
  puts foods.join(', ')
  puts grain
end

gather(items) do |first, *mid , last |
  puts first
  puts mid.join(', ')
  puts last
end

gather(items) do |first , *last|
  puts first
  puts last.join(", ")
end

gather(items) do |one, two, three, four|
  puts "#{one}, #{two}, #{three}, and #{four}"
end
=end