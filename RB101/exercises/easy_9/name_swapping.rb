def swap_name(string)
  string_arr = string.split
  "#{string_arr[1]}, #{string_arr[0]}"
end

def swap_name(string)
  string.split.reverse.join(", ")
end

p swap_name('Joe Roberts') == 'Roberts, Joe'