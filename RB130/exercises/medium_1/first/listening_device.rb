# Problem:
# Create a listening device that lets us 'listen' and records information for later use if it hears something.

# Examples:

# Data Structures
# class for Listening device
#   states: recordings
#   behaviors: listen
#              play
#              record

# Problems:
# record
# private method of device class
#   push value into @recordings

# listen
# instance method invoked on the device obj.
#   if passed a return value via a block
#     record()
#   else
#     nothing

# play
# isntance method for device
#     outputs all values in @recordings
#     (number the recordings)


class Device
  def initialize
    @recordings = []
  end

  def listen
    record(yield) if block_given?
  end

  def play
    puts recordings.last
  end

  def play_all
    recordings.each.with_index(1) do |recording, idx|
      puts "Recording #{idx}: #{recording}"
    end
  end

  private

  attr_reader :recordings

  def record(recording)
    recordings << recording
  end
end


listener = Device.new
listener.listen { "Hello World!" }
listener.listen
listener.play # Outputs "Hello World!"

# Quiz 1
# 1. B, D
# 2. C
# 3. A, C, D
# 4. A, C
# 5. C, D (Obviously for C, you can also define a method with explicit blocks)
# 6. B, F
# 7. C 
# 8. B, D missed again. This is just a messed up question correct answer(B, C)
# 9. B
# 10. B, E
# 11. A, C
# 12. B, D
# 13. C
# 14. D
# 15. A, B, E