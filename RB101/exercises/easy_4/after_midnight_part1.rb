=begin
take in an integer and return a time in 24hr representation

the integer represents minutes
- integers subtract from midnight 00:00
- positive integers add

get an integer
normalize into minutes in a day
  - set number of minutes in a day.
  - set number of minutes in an hour
  - set number of hours in a day

  - normailze minutes into a single day by getting the remainder of dividing the given integer by the minutes in a day (1440)
  - divide that number by 60, setting the dividend to number of hours and remainder to minutes.
  - if the number is negative, subtract that from midnight (24:00)
    - if the number is positive, we'll add to 00:00
subtract or add from that time
display the time


=end

MINUTES_IN_HOUR = 60
HOURS_IN_DAY = 24
MINUTES_PER_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY #1440

# def normalize_minutes(minutes)
#   minutes.abs % MINUTES_PER_DAY
# end

# def time_of_day(minutes)
#   hours, mins = normalize_minutes(minutes).divmod(60)

#   if minutes < 0
#     hours = 23 - hours
#     mins = 60 - mins
#   end

#   format("%02d:%02d", hours, mins)
# end

def time_of_day(minutes)
  (Time.new(0, 1, 2) + minutes*60).strftime("%A %H:%M")
end
p time_of_day(0) #== "00:00"
p time_of_day(-3) #== "23:57"
p time_of_day(35) #== "00:35"
p time_of_day(-1437) #== "00:03"
p time_of_day(3000) #== "02:00"
p time_of_day(800) #== "13:20"
p time_of_day(-4231) #== "01:29"
p time_of_day(3060) #== "03:00"