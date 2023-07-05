hash = {'one' => 'examine', 'two' => 'this', 'three' => 'string'}

new_hash =
  hash.select do |_k, v|
    v.length > 3
  end

p 'hash one'
p hash['one']
p hash['one'].object_id
p 'new_hash one'
p new_hash['one']
p new_hash['one'].object_id

p 'hash two'
p hash['two']
p hash['two'].object_id
p 'new_hash two'
p new_hash['two']
p new_hash['two'].object_id

p hash
p new_hash

#new_hash.key('examine').upcase!

p hash_array = hash.keys
p new_hash_array = new_hash.keys

p new_hash_array[0].object_id
p hash.key('examine').object_id
