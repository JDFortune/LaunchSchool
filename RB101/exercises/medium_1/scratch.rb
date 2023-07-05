# def sum_dig_pow(a, b)
#   result = []
#   (a..b).each do |num|
#     total_sum = 0
#     num.digits.reverse.each.with_index(1) do |digit, idx|
#       total_sum += digit ** idx
#     end
#     result << num if total_sum == num
#   end
#   result
# end

# p sum_dig_pow(1, 10)

def flip_switches(switches, num)
  switches.each_with_index do |state, index|
    if (index + 1) % num == 0
      switches[index] = !state
    end
  end
end

def grab_on_switches(switches)
  switches.each_with_index do |state, index|
    if state == true
      switches[index] = (index + 1)
    else
      switches[index] = nil
    end
  end
  switches.compact
end

def lights_on(num)
  switches = Array.new(num, false)

  1.upto(num) do |number|
    flip_switches(switches, number)
  end

  grab_on_switches(switches)
end


p lights_on(10)
# def ascend_descend(length, min, max)
#   result = ''
#   return result if max < min
#   increase = true

#   current = min

#   until result.size >= length
#     if increase
#       result << current.to_s
#       increase = false if current == max
#       current += 1
#     else
#       current -= 1
#       result << current.to_s
#       increase = true if current == max
#     end
#   end

#   result[0, length]
# end

# p ascend_descend(11, 1, 10)
# p ascend_descend(5, 1, 3) #== "12321"

# p ascend_descend(14, 0, 2) == "01210121012101"
# p ascend_descend(11, 5, 9) == "56789876567"