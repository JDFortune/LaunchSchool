# calorie_tracker.rb
class CalorieTracker
  attr_reader :current, :goal

  def initialize(goal = 2000)
    @current = 0
    @goal = goal
  end

  def add(amount)
    @current += amount
  end

  def burn(amount)
    @current -= amount
  end

  def met_goal?
    @current >= @goal
  end
end