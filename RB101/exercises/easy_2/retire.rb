=begin
Problem:
  Program receives users age and what age they will retire. Then returns the current year, year the user will retire and how many years they have left until retirement.
  Implicit Rules:
  Input by user will be two integers.
  program will automatically know date
  Explicit Rules:

  Questions: none

Examples and Test Cases:
  
Data Structures
  input: interger(age), integer(retire_age)
  mid:
  output:integer(current_year), integer(retire_year), integer(years_left)


Algorithm:
  High-level:
    1. User inputs their current_age and retire_age. Computer uses method for determining the current year. Calculate retire_year by adding the difference of current_age and retire_age to current_year. Display the difference as years_left.

    2.
  Low-level:
  GET current_age
  GET retire_age
  SET current_year (find a method)
  SET years_left = retire_age - current_age
  SET retire_year = years_left + current_year
  
  PRINT current_year, retire_year, years_left

CODE

=end

def get_age
  input = ''
  loop do
    input = gets.chomp
    break input.to_i if input.to_i.to_s == input
    puts "Not a valid age. Please input your age in total years"
  end
  input.to_i
end

def years_difference(retire_age, current_age)
  retire_age - current_age
end

def retire_year(current_year, years_left)
  current_year + years_left
end

def say_retire(current_year, retire_year, years_left)
  puts "It's #{current_year}. You will retire in #{retire_year}"
  puts "You have only #{years_left} years of work to go!"
end


# Main Program
puts "Enter your current age"
current_age = get_age

puts "At what age would you like to retire?"
retire_age = get_age

current_year = Time.now.year
years_left = years_difference(retire_age, current_age)
retire_year = retire_year(current_year, years_left)

say_retire(current_year, retire_year, years_left)