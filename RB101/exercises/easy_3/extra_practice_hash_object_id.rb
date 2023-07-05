hash = {'apple' => 'five', 'banana' => 'seventeen', 'groupon' => 'thirty'}


new_hash = hash.select { |a, v| v.size > 3 }

p hash.values[1].object_id
p new_hash['banana']. object_id
p hash['apple']. object_id
p new_hash['apple']. object_id

p "hash keys"
p hash.key('five').object_id
p new_hash.key('five').object_id

a = hash.values[1]
a.upcase!

p a
p hash
p new_hash