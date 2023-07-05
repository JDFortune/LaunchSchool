# we need something to store commmands

# given a commands as a string of commands
# need to convert the string into an array of individual commands and iterate over them

# the stack needs to be accessible in the outer scope

# each command has a function, which means they'll be split up into individual methods where the stack can be passed in and mutated.

# register variable will contain a current valye dictated by the commands
# stack will start as an empty array and be modified through commands

# list of commands:
# n - represents a number value for local variable register don't modify stack
# PUSH - pushes the current value of register into the stack (as an integer)
# ADD - POPS a value from the stack and adds it to the current value of the register
# SUB - POPS value from stack and subtracts from current value fo register
# MULT - POPS and MULTS register value
# DIV - POPS and divides from register value
# MOD - pops and gets returns remainder to register from dividing current reg value by stack top value
# POP - pops from stack and entirely replaces register value
# PRINT - prints current register value

def minilang(command_list)
  stack = []
  register = 0

  commands = %w(PUSH ADD SUB MULT DIV MOD POP PRINT)
  non_command = command_list.to_s.split.map do |item|
                  commands.include?(item)
                end.any?
  
  if !non_command
    return p command_list
  else
    command_list.split.each do |command|
      case command
      when 'PUSH'  then stack << register
      when 'ADD'   then register += stack.pop
      when 'SUB'   then register -= stack.pop
      when 'MULT'  then register *= stack.pop
      when 'DIV'   then register /= stack.pop
      when 'MOD'   then register %= stack.pop
      when 'POP'   then register = stack.pop
      when 'PRINT' then puts register
      else              register = command.to_i
      end
    end
  end
end

minilang('PRINT')
# 0

minilang('5 PUSH 3 MULT PRINT')
# 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
# 5
# 3
# 8

minilang('5 PUSH POP PRINT')
# 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
# 5
# 10
# 4
# 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT ')
# # 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT ')
# 12

minilang('-3 PUSH 5 SUB PRINT')
# 8

minilang('6 PUSH')

minilang((3 + (4 * 5) - 7) / (5 % 3))