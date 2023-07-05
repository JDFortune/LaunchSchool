require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

class NoExperienceError < StandardError
end

class Employee
  def hire
    raise NoExperienceError.new('no experience')
    # true
  end
end

class List
  def initialize(value)
    @value = value
  end

  def process
    @value
  end
end

### 
class EasyTest < Minitest::Test
  def test_is_odd?
    value = 7
    assert_equal(true, value.odd?, 'value is not odd')
    assert(value.odd?, 'value is not odd')
  end

  def test_downcase?
    value = 'XYZ'
    assert_equal('xyz', value.downcase, "incorrectn string value")
  end

  def test_nil?
    value = nil
    assert_nil value
  end

  def test_is_empty
    list = []
    assert_empty list
  end

  def test_list_include
    list = ['xyz']
    assert_includes(list,'xyz')
  end

  def test_raise_error
    assert_raises(NoExperienceError) do
      Employee.new.hire
    end
  end

  # def test_type
  #   skip
  #   value = 'string'
  #   assert_instance_of(Numeric, value)
  # end

  def test_kind_of
    value = 8
    assert_kind_of(Numeric, value)
  end

  def test_kind_of
    list1 = List.new(8)
    list = 8
    assert_same(list, list1.process)
  end

  def test_not_included
    list = ['xyzp']
    refute_includes(list, 'xyz')
  end
end