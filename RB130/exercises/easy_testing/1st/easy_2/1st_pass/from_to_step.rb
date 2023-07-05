def step(start, finish, increment)
  current = start
  loop do
    yield(current)
    break if current + increment > finish
    current += increment
  end
  current
end

p step(0, 10, 2) {|n| puts "Current: #{n}"}

p step(2, 7, 3) {|n| puts "Curr: #{n}"}
