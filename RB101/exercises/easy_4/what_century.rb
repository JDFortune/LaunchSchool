=begin
Write a method that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with st, nd, rd, or th as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901-2000 comprise the 20th century.

Data structures
input integer
output string

Algorithm
Given an integer, year. pad number to be at least 4 characters, buffering the front with 2. when deciding the century string output, use all integers except the last 2 in the string. when outputing the string 1 is associated with st, 2 with nd, 3 with rd and everthing else with th, except when 1, 2, or 3 is preceded by a 1.

1. divide the given number by 100 and adding 1 if the original number doesn't end with 00
   for suffix, if 
=end


# def century(year)
#   SUFFIX = {
#               1 => 'st',
#               2 => 'nd',
#               3 => 'rd'
#   }

#   SUFFIX.default = 'th'

#   string_year = year.to_s.rjust(4, '0')
#   year_array = string_year.chars
#   century_num = year_array[0...-2].join('').to_i
#   endings = ['st', 'nd', 'rd', 'th']

#   century_num += 1 if year_array[-2..-1] != ['0', '0']
#   century_num = century_num.to_s

#   century
#   if century_num[-2] == '1'
#     ending = endings[3]
#   else
#     if century_num[-1].to_i < 4 && century_num[-1].to_i > 0
#       ending = endings[century_num[-1].to_i - 1]
#     else
#       ending = endings[3]
#     end
#   end

#   century_num + ending
# end

SUFFIX = {
            1 => 'st',
            2 => 'nd',
            3 => 'rd'
}

SUFFIX.default = 'th'

def get_suffix(century)
  century = century.digits
  century[1] == 1 ? 'th' : SUFFIX[century[0]]
end

def century(year)
  century = (year / 100.0).ceil
  century.to_s + get_suffix(century)
end
























# SUFFIX = {
#   1 => "st",
#   2 => "nd",
#   3 => "rd",
# }

# SUFFIX.default = "th"

# def get_suffix(century)
#   century_digits = century.digits
#   if century_digits[1] == 1
#     'th'
#   else
#     p SUFFIX[century_digits[0]]
#   end
# end

# def century(year)
#   century = (year / 100.0).ceil
#   "#{century}#{get_suffix(century)}"
# end


p century(2000) == '20th'
p century(2001) == '21st'
p century(1965) == '20th'
p century(256) == '3rd'
p century(5) == '1st'
p century(10103) == '102nd'
p century(1052) == '11th'
p century(1127) == '12th'
p century(11201) == '113th'
p century(212300) == '2123rd'