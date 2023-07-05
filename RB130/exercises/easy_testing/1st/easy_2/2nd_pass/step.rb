def step(start, finish, jump)
  loop do
    yield(start)
    break if start + jump > finish
    start += jump
  end
  start
end

p step(1, 10, 4) { |value| puts "value = #{value}" }
