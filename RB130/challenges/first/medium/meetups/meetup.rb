require 'date'

class Meetup
  WEEKDAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  def initialize(year, month)
    @year = year
    @month = month
  end

  def day(weekday, descriptor)
    grab_days(weekday)
    date(descriptor)
  end

  private

  attr_accessor :days
  attr_reader :year, :month

  def grab_days(weekday)
    weekday = WEEKDAYS.index(weekday.downcase) + 1
    start_date = Date.new(year,  month, 1)
    end_date = Date.new(year, month, -1)

    self.days = (start_date..end_date).select { |date| date.cwday == weekday }
  end
  
  def date(descriptor)
    case descriptor.downcase
    when 'first'    then days[0]
    when 'second'   then days[1]
    when 'third'    then days[2]
    when 'fourth'   then days[3]
    when 'fifth'    then days[4]
    when 'last'     then days[-1]
    when 'teenth'   then teenth
    end
  end

  def teenth
    days.find { |day| day.mday.between?(13,19) }
  end
end