=begin
helper method to break up hours and minutes and return integers

helper method convert hours to minutes

after_midnight
  convert hours to minutes and add to minutes
  = set total minutes
  return minutes

Before midnight
  subtract hours from 23
  subtract minutes from 60
  convert hours to minutes and add to minutes
  return minutes


=end

# def get_hours_mins(string)
#   string.split(':').map(&:to_i)
# end

# def convert_hours_to_mins(hours)
#   hours * 60
# end

# # def after_midnight(string_time)
# #   hours, mins = get_hours_mins(string_time)
# #   hours = 0 if hours == 24
# #   convert_hours_to_mins(hours) + mins
# # end

# def before_midnight(string_time)
#   mins = after_midnight(string_time)
#   return 0 if mins == 0
#   1440 - mins
# end


# p after_midnight('00:00') == 0
# p before_midnight('00:00') == 0
# p after_midnight('12:34') == 754
# p before_midnight('12:34') == 686
# p after_midnight('24:00') == 0
# p before_midnight('24:00') == 0


def after_midnight(string_time)
  hours, mins = string_time.split(':').map(&:to_i) # extracts hours and minutes
  second = (hours * 60 + mins) * 60 # gets total seconds

  t = Time.new(0, 1, 2)




end

p after_midnight('00:00') == 0
# p before_midnight('00:00') == 0
p after_midnight('12:34') == 754
# p before_midnight('12:34') == 686
p after_midnight('24:00') == 0
# p before_midnight('24:00') == 0