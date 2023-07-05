hsh = {
  'grape' => {type: 'fruit', colors: ['red', 'green'], size: 'small'},
  'carrot' => {type: 'vegetable', colors: ['orange'], size: 'medium'},
  'apple' => {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
  'apricot' => {type: 'fruit', colors: ['orange'], size: 'medium'},
  'marrow' => {type: 'vegetable', colors: ['green'], size: 'large'},
}

# given this hash return an array containing only the values of the colors and size of the fruits
# colors should be capitalized
# sizes should be upcases

# empty array
# access the elements of the hash
#   colors array empty
#     if type is fruit
#   #   for each of the values colors
#   #     push capitalize words into colored array
# #       push colored array into outer array
#     else
# #   push value size upcased into outer array

b =  hsh.map do |_key, value|
    if value[:type] == 'fruit'
      value[:colors].map do |color|
        color.capitalize
      end
    else
      value[:size].upcase
    end
  end


p b