def consecutive(array)
  return "empty" if array.empty?
  number = array[0].ord 

  array.each_with_index do |letter, index|
    return ((number + index).chr) if letter != (number + index).chr
  end
end





p determine_missing_letter(['a','b','c','d','f']) == 'e' 
p determine_missing_letter(['O','Q','R','S']) == 'P'
p determine_missing_letter(["a","b","c","d","f"]) == "e"
p determine_missing_letter(["O","Q","R","S"]) == "P"
p determine_missing_letter([]) == 'empty' 



def determine_missing_letter(arr)
  alpha = (arr.first..arr.last).to_a
  
  alpha.each do |e|
    return e if !arr.include?(e)
  end
end

def determine_missing_letter(arr)
 arr.each_with_index do |string, index|
   ord = string.ord+1
   return ord.chr if ord.chr != arr[index+1]
 end
end
