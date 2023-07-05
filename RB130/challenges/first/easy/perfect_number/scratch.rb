class Person
  def initialize(name)
    @name = name
  end

  def this(obj)
    obj.each do |o|
      o.act
    end
  end

  protected

  def act
    puts "#{@name} says hello"
  end
end

p1 = Person.new("Barry")
p2 = Person.new("Gary")
p3 = Person.new("Very")
p4 = Person.new("Larry")

arr = [p1, p2, p3, p4]

p1.act