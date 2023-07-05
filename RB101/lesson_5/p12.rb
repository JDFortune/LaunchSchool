arr = [[:a, 1], ['b', 'two'], ['sea', {c: 3}], [{a: 1, b: 2, c: 3, d: 4}, 'D']]
# expected return value: {:a=>1, "b"=>"two", "sea"=>{:c=>3}, {:a=>1, :b=>2, :c=>3, :d=>4}=>"D"}

# create an empty hash
# access each element |a, b|
#   hash[a] = b

# return the hash

def array_to_hash(array)
  hash = {}
  array.each do |key, value|
    hash[key] = value
  end
  hash
end

p array_to_hash(arr)