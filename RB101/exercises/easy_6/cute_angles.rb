# taking a float number
# format into degrees , but using the whole number as the degree, and convert the decimal to minutes and seconds.

# def dms(angle)
#   degrees = angle.to_i
#   minutes = ((angle - angle.to_i) * 60).to_i
#   seconds = ((((angle - angle.to_i) * 60) - minutes) * 60).to_i

#   format(%(#{degrees}#{DEGREE}%02d'%02d"), minutes, seconds)
# end

DEGREE = "\xC2\xB0"
MINUTES_PER_DEGREE = 60
SECONDS_PER_MINUTE = 60
SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE
MAX_DEGREES = 360

def dms(angle)
  total_seconds = (angle * SECONDS_PER_DEGREE).round
  degrees, remaining_seconds = total_seconds.divmod(SECONDS_PER_DEGREE)
  minutes, seconds = remaining_seconds.divmod(SECONDS_PER_MINUTE)
  degrees %= MAX_DEGREES
  format(%(#{degrees}#{DEGREE}%02d'%02d"), minutes, seconds)
end

p dms(30) == %(30°00'00")
p dms(76.73) == %(76°43'48")
p dms(254.6) == %(254°36'00")
p dms(93.034773) == %(93°02'05")
p dms(0) == %(0°00'00")
p dms(360) == %(360°00'00") || dms(360) == %(0°00'00")
p dms(400) == %(40°00'00")
p dms(-40) == %(320°00'00")
p dms(-420) == %(300°00'00")