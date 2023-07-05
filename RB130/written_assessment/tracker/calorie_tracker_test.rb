require 'simplecov'
SimpleCov.start
require 'minitest/autorun'

require_relative 'calorie_tracker'

class CalorieTrackerTest < Minitest::Test
  def setup
    @tracker = CalorieTracker.new
  end

  def test_orginal_stats
    assert_equal(0, @tracker.current)
    assert_equal(2000, @tracker.goal)
  end

  def test_calorie_instance
    assert_instance_of(CalorieTracker, @tracker)
  end

  def test_add
    @tracker.add(200)
    assert_equal(200, @tracker.current)
  end
  
  def test_add_argument_error
    assert_raises(ArgumentError) do
      @tracker.add
    end
  end

  def test_burn
    @tracker.add(500)
    assert_equal(500, @tracker.current)
    @tracker.burn(300)
    assert_equal(200, @tracker.current)
  end

  def test_met_goal
    @tracker.add(2500)
    assert(@tracker.met_goal?)
  end

  def test_custom_goal
    new_tracker = CalorieTracker.new(2500)
    assert_equal(2500, new_tracker.goal)
  end
end