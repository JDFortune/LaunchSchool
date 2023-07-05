arr = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}]

given the array of hashes above, use map method to return a new array of hashes with values of hash keys incremented by one

access each element in the array with map
  access teh key/value pairs of hash with map
    [k, value + 1]
  end.convert to a hash

def increment(array)
  array.map do |hash|
    hash.map do |key, value|
      [key, value + 1]
    end.to_h
  end
end

b = increment(arr)

p arr
p arr.object_id

p b
p b.object_id

    

