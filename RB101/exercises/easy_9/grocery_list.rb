# given an array of nested arrays with fruits (string) and quantities (integer), return a new array with the amount of fruits multiplied by the quantities


#   access inner nested arrays
#   multiply string by quantity
#   split into individual objects with each iteration 
#   take returned array and flatten

def buy_fruit(list)
  list.map do |fruit, quantity|
    [fruit] * quantity
  end.flatten
end

p buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) #==
["apples", "apples", "apples", "orange", "bananas","bananas"]