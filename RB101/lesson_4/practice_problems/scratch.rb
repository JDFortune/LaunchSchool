cd ..# def double_numbers(numbers, multiplier = 2)
#   doubled_numbers = []
#   counter = 0

#   loop do
#     break if counter == numbers.size
    
#     # current_number = numbers[counter]
#     #current_number *=  multiplier if counter.odd?
#     doubled_numbers << numbers[counter] * multiplier
    
#     counter += 1
#   end

#   doubled_numbers
# end

# my_numbers = [1, 4, 3, 7, 2, 6]
# p my_numbers

# p double_numbers(my_numbers)
# p double_numbers(my_numbers, 3)

# produce_list = %W(apple pear banana).zip(['fruit']*3).to_h.merge(%w(carrot squash potato).zip(['vegetable']*3).to_h)

# # p produce_list

# def general_select(produce_list, selection_criteria = 'fruit')
#   select_hash = {}
#   keys = produce_list.keys
#   counter = 0

#   loop do
#     break if counter == keys.size

#     current_key = keys[counter]
#     current_value = produce_list[current_key]
    
#     if current_value == selection_criteria
#       select_hash[current_key] = current_value
#     end

#     counter += 1
#   end

#   select_hash
# end


# # def general_select(produce_list, selection_criteria = 'fruit')
# #   produce_list.select { |key, value| value == selection_criteria }
# # end

# p general_select(produce_list)

# alphabet = ('a'..'z').to_a

# question = 'How many times does a particular character appear in this sentence?'

# def select_letter(alphabet, letter = 'g')
#   counter = 0
#   selected_letter = ''

#   loop do
#     break selected_letter if counter == alphabet.size

#     current_letter = alphabet[counter]
#     if current_letter == letter
#       selected_letter << current_letter
#     end

#     counter += 1
#   end
# end

# p select_letter(question, 'a').size

# words = "the flintstones rock"
# p words
# counter = 0

# loop do
#   if counter == 0 || words[counter - 1] == ' '
#     words = words[0...counter] + words[counter].capitalize + words[counter + 1..-1]
#   end
#   counter += 1
#   break words if counter == words.size
# end

# p words

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

munsters.each do |name, hash|
  age = hash["age"]
  case age
  when (0..17)
    hash['age_group'] = 'kid'
  when (18..64)
    hash['age_group'] = 'adult'
  else
    hash['age_group'] = 'senior'
  end
end

puts munsters