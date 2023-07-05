=begin
create a method that takes an integer representing minutes and returns a time +- minutes from midnight.

implicit rules:
  midnight is represented at 00:00
  hours is limited to range of 00 to 23
  minutes is limited to range of 00 to 59

get the dividend and remainder of integer when divided by 60.
for hours.
add to or subtract from hour while removing from dividend, 
  if adding, when hour becomes 24 reset to 00. 
  If subtracting, when hr becomes -1 reset to 23.
add to or subtract from minutes while removing from remainder
if subtracting, subtract from 60. if adding, add from 0

print results

=end

# def time_of_day(integer)
#   hours, minutes = integer.divmod(60)

#   if hours >= 0
#     hour = 0
#     minute = minutes
#     loop do
#       break if hours == 0
#       hour += 1
#       hours -= 1
#       hour = 0 if hour == 24
#     end
#   else
#     hour = 24
#     minute = minutes
#     loop do
#       break if hours == 0
#       hour -= 1
#       hours += 1
#       hour = 24 if hour == 0
#     end
#   end
#   hour = 0 if hour == 24
#   format('%02d:%02d', hour, minute)
# end

# MINUTES_PER_HOUR = 60
# HOURS_PER_DAY = 24
# MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY

# def normalize_minutes_to_0_through_1439(minutes)
#   minutes % MINUTES_PER_DAY
# end

# def time_of_day(delta_minutes)
#   delta_minutes = normalize_minutes_to_0_through_1439(delta_minutes)
#   hours, minutes = delta_minutes.divmod(MINUTES_PER_HOUR)
#   format('%02d:%02d', hours, minutes)
# end

MINUTES_PER_HOUR = 60
HOURS_PER_DAY = 24
MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR

#   time_24_hour = time_hours + ':' + time_minutes
# end
# 1. set hour = 00
#    set minute = 00
# 1. normalize minutes to minutes in a single day
# 2. if normalized minutes == 0 retunr 00:00
# 2. split into hours and minutes
# 3. if positive
#     add hours to hour and minute to minute
#   if negative
#     subtract hours from 23 and subtract minutes from 60

def time_of_day(minutes)
  minutes = minutes % MINUTES_PER_DAY
  hours, mins = minutes.divmod(MINUTES_PER_HOUR)
  format("%02d:%02d", hours, mins)
end

p time_of_day(0) == "00:00"
p time_of_day(-3) == "23:57"
p time_of_day(35) == "00:35"
p time_of_day(-1437) == "00:03"
p time_of_day(3000) == "02:00"
p time_of_day(800) == "13:20"
p time_of_day(-4231) == "01:29"