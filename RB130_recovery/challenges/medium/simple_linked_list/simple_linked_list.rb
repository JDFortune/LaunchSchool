class Element
  attr_reader :datum
  attr_accessor :tail

  def initialize(datum, tail = nil)
    @datum = datum
    @tail = tail
  end

  def tail?
    @tail.nil?
  end

  def next
    @tail if @tail.is_a? Element
  end
  
end

class SimpleLinkedList
  attr_reader :head

  def self.from_a(arr)
    arr = [] if !arr.instance_of?(Array)
    temp = self.new
    arr.reverse_each { |el| temp.push(el) }
    temp
  end

  def to_a
    array = []
    current = head
    while current
      array << current.datum
      current = current.next
    end
    array
  end

  def push(obj)
    temp = Element.new(obj, head)
    @head = temp
  end
  
  def pop
    datum = peek
    @head = head.next
    datum
  end

  def size
    size = 0
    current = head
    while current
      current = current.next
      size += 1
    end
    size
  end

  def empty?
    head.nil?
  end

  def peek
    head.datum if head
  end

  def reverse
    result = self.class.new
    current = head
    while current
      obj = current.datum
      result.push(obj)
      current = current.next
    end
    result
  end
end