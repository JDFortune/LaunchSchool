require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

require_relative '../car'

# class CarTest < Minitest::Test
#   def setup
#     @car = Car.new
#   end

#   # example `assert` test: Fails unless argument is truthy
#   def test_car_exists
#     assert(@car)
#   end

#   #example `assert_equal`: Fails unless exp == act
#   def test_wheels
#     assert_equal(4, @car.wheels)
#   end

#   #example `assert_nil`: Fails unless obj is nil
#   def test_name_is_nil
#     assert_nil(@car.name)
#   end

#   #assert_raises: Fails unless block raises one of *expected Errors
#   def test_raise_initialize_with_arg
#     assert_raises(ArgumentError) do
#       Car.new(name:"Joey")
#     end
#   end

#   #assert_instance_of: Fails unless obj is instance of class argument
#   def test_instance_of_car
#     assert_instance_of(Car, @car)
#   end

#   #assert_includes: Fails unless obj included in argument
#   def test_includes_car
#     arr = [1, 2, 3]
#     arr << @car
    
#     assert_includes(arr, @car)
#   end

#   def test_value_equality
#     skip "I'm a cutie with a booty"
#     car1 = Car.new
#     car2 = Car.new

#     car1.name = "Kim"
#     car2.name = "Kim"
    
#     assert_equal(car1, car2)
#     # assert_same(car1, car2)
#   end
# end

describe 'Car' do
  it 'includes_car' do
    arr = [1, 2, 3]
    car = Car.new
    arr << car
    
    _(arr).must_include(car)
  end
end