=begin
write a method that returns the number of friday the 13ths in the given year


probably need the date method
=end
require 'date'

# def friday_13th(year)
#   days = 0
#   start_date = Date.new(year, 01, 01)
#   end_date = Date.new(year, 12, 31)
#   (start_date..end_date).each do |day|
#     days += 1 if day.friday? && day.mday == 13
#   end
#   days
# end

def friday_13th(year)
  count = 0
  thirteenth = Date.civil(year, 1, 13)
  12.times do
    count += 1 if thirteenth.friday?
    thirteenth = thirteenth.next_month
  end
  count
end

p friday_13th(2015) == 3
p friday_13th(1986) == 1
p friday_13th(2019) == 2