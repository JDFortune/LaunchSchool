=begin
Problem
given a number of rounds flip lights switches once for any numbered switches that are evenly divisible by the number of the round
at the end of the rounds return an array of the switches in the on position

Data Structures
input: integer
middle: hash of switches and on/off position
output: array of switches still on

Algorithm:
Get a number of light switches which also represents the number of rounds
create a hash with a key for each light switch, initally setting the values at 0
  set empty hash
  iterate from one to the entered number
    set hash[current_num] = false
  return hash
create an empty result array
iterate through rounds for the number of rounds 1..n
  iterate through the hash
    if hash key evenly divisibly by round
      switch the value
iterate through the has again
  if the value is set to on (1)
    push the corresponding key into the results array

return the results array

=end

# def create_switches(num)
#   switches = {}
#   (1..num).each do |number|
#     switches[number] = false
#   end
#   switches
# end

# def on_switches(switches)
#   switches.select do |_switch, on|
#     on == true
#   end.keys
# end

# def off_switches(switches)
#   switches.select do |_switch, on|
#     on == false
#   end.keys
# end

# def lights_on(num)
#   switches = create_switches(num)
  
#   (1..num).each do |round|
#     switches.each do |switch, on|
#       if switch % round == 0
#         switches[switch] = !on
#       end
#     end
#   end
  
#   on = on_switches(switches)
#   off = off_switches(switches)

#   puts "Switches #{(on[0...-1]).join(', ')}, and #{on[-1]} are on."
#   puts "Switches #{(off[0...-1]).join(', ')}, and #{off[-1]} are off."
# end

# p lights_on(1000)

def flip_switches(switches, num)
      switches.each_with_index do |state, index|
        if (index + 1) % num == 0
          switches[index] = !state
        end
      end
  switches
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

def switches(num)
  switches = Array.new(num, false)

  1.upto(num) do |number|
    switches = flip_switches(switches, number)
  end

  grab_on_switches(switches)
end

p switches(1000)

# def toggle_lights(num)
#   result = []
#   1.upto(num) do |switch|
#     break if switch ** 2 > num
#     result << switch ** 2
#   end
#   result
# end 

# p toggle_lights(1000) == [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961]