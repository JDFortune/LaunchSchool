class Device 
  def initialize
    @recordings = []
  end

  def listen
    record(yield) if block_given?
  end

  def play
    recordings.last
  end

  private

  attr_reader :recordings

  def record(recording)
    recordings << recording
  end
end

listener = Device.new
listener.listen { "Hello World!" }
listener.listen {"The documents are in the safe"}
listener.listen { "The communist has oddly shaped feet" }
listener.listen
p listener.play # Outputs "Hello World!"
pp listener.recordings