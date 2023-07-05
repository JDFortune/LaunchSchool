class CustomSet
  attr_reader :set

  def initialize(set = [])
    @set = set.uniq
  end

  def empty?
    set.empty?
  end

  def contains?(value)
    set.include?(value)
  end

  def subset?(other)
    set.all? {|val| other.contains?(val)}
  end

  def disjoint?(other)
    set.none? {|val| other.contains?(val) }
  end

  def eql?(other)
    set.size == other.set.size &&
    set.all? {|val| other.contains?(val)}
  end

  def add(val)
    set << val unless contains?(val)
    self
  end

  def intersection(other)
    same_values = set.select {|val| other.contains?(val) }
    CustomSet.new(same_values)
  end

  def difference(other)
    different_values = set.select {|val| !other.contains?(val)}
    CustomSet.new(different_values)
  end

  def union(other)
    CustomSet.new((set + other.set).uniq)
  end

  def ==(other)
    eql?(other)
  end
end