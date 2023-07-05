class SimpleLinkedList
  attr_reader :list

  def initialize
    @list = []
    @idx = 0
  end

  def self.from_a(arr)
    temp = self.new
    unless arr.is_a? Array
      arr.each_with_index do |el, idx|
        current = Element.new(el)
        if empty?
          temp.list << (current)
        else
          temp.list.last.tail = current
          temp.list << (current)
        end
      end
    end
    temp
  end

  def push(obj)
    list.unshift(Element.new(obj))
  end
  
  def pop
    list.shift
  end

  def peek
    list[@idx].datum
  end

  def head
    list[0]
  end

  def tail?
    list[@idx] == list.last
  end

  def empty?
    list.empty?
  end

  def size
    list.size
  end

  def reverse
    temp = self.class.new
    temp.list = list.reverse
    temp
  end

  def to_a
    list
  end
end

class Element < SimpleLInkedList
  attr_reader :datum, :tail
  
  def initialize(datum, tail = nil)
    @datum = datum
    @tail = tail
  end
  
  def next
    @tail
  end
end