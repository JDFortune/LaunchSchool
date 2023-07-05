produce = {
  'apple' => 'Fruit',
  'carrot' => 'Vegetable',
  'pear' => 'Fruit',
  'broccoli' => 'Vegetable'
}

def select_fruit(produce)
  counter = 0
  new_hash = {}
  loop do
    keys = produce.keys
    
    if produce[keys[counter]] == 'Fruit'
      new_hash[keys[counter]] = produce[keys[counter]]
    end

    counter += 1
    break if counter == keys.size
  end

  new_hash
end

p select_fruit(produce) # => {"apple"=>"Fruit", "pear"=>"Fruit"}


# p produce['apple'].object_id
# p new_hash['apple'].object_id
