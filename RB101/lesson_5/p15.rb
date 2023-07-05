arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]

# given this array return an array with only the hashes  where all the values elements are even

# create an empty array
# access each hash element in the array
#   hash_size = hash.size
#   iterate through the hashes
#   return only key value pairs where the all elements of the value are even
#   set the return to variable selected
#   if selected.size == hash_size
#     push the hash into the empty array
  

# result = []

# # arr.each do |hash|
# #   hash_size = hash.size
# #   selection = hash.select do |key, value|
# #                 value.all?(&:even?)
# #               end
# #   if selection.size == hash_size
# #     result << hash
# #   end
# # end

# p result
arr.select do |hash|
  hash.all? do |_, value|
    value.all?(&:even?)
  end
end
