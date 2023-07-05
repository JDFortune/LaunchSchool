HEXKEY = (1..15).to_a.zip((1..9).to_a + ('a'..'f').to_a).to_h

# p rand(1..15)

# generate an array with 32 random numbers between 1 and 15
# iterate over random numbers changing the number to its value association in the hexkey
# group a sequence of 8-4-4-4-12 elements

# print each element joined with dashes '-' to separate

def generate_uuid
  start_time = Time.now
  array = []
  until array.size == 32
    array << rand(1..15)
  end

  array.size.times do |idx|
    array[idx] = HEXKEY[array[idx]]
  end

  first = array[0,8].join
  second = array[8,4].join
  third = array[12,4].join
  fourth = array[16,4].join
  fifth = array[20,12].join

  puts "#{first}-#{second}-#{third}-#{fourth}-#{fifth}"
  end_time = Time.now
  total_seconds = end_time - start_time
  p total_seconds
end




def generate_uuid2
  start_time = Time.now
  characters = []

  (1..9).each { |num| characters << num.to_s }
  ('a'..'f').each { |letter| characters << letter }

  sections = [8, 4, 4, 4, 12]

  uuid = ''
  sections.each_with_index do |section, idx|
    section.times { uuid += characters.sample }
    uuid += '-' unless idx >= sections.size - 1
  end

  puts uuid
  end_time = Time.now
  total_seconds = end_time - start_time
  p total_seconds
end

generate_uuid
generate_uuid2