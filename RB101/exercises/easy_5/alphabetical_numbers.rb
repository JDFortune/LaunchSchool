# given an  array of integers 0-19 sort the array beased on their alphabetic character when the integer is spelled out in english. (0 = zero, 1 = one)

# create a hash with integers as keys and values as spelled out words
# sort the hash based on the values
# return an array of the keys of the sorted hash

# SET hash_chart
# sort based on keys
# return keys array

# int_keys = (0..19).to_a
WORD_VALUES = %w(zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen)


def alphabetic_number_sort(int_keys)
  pair_chart = int_keys.zip(WORD_VALUES)
  pair_chart.sort { |(a,b),(c,d)| b <=> d }.map {|a,_| a }
end



# def alphabetic_number_sort(numbers)
#   numbers.sort_by! { |number| NUMBER_WORDS[number] }
# end

p alphabetic_number_sort((0..19).to_a) == [
  8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17,
  6, 16, 10, 13, 3, 12, 2, 0
]