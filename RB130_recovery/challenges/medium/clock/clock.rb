class Clock
  MINS_PER_DAY = 24 * 60

  def self.at(hour, min = 0)
    new(hour, min)
  end

  def initialize(hours, mins)
    time = ((hours * 60) + mins) % MINS_PER_DAY 
    @hour, @min = time.divmod(60) 
  end

  def +(mins)
    self.class.new(hour, min + mins)
  end

  def -(mins)
    self.class.new(hour, min - mins)
  end

  def to_s
    format('%02d:%02d', hour, min)
  end

  def ==(other)
    hour == other.hour && min == other.min
  end

  protected

  attr_reader :hour, :min
end
