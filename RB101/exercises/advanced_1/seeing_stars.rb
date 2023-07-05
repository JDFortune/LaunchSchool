=begin
seeing stars
write a method that displays an 8 pointed star in an n x n grid wher n is an odd integer that is supplied as an argument to the method.

number of spaces stars as n - 3 / 2 and is has 1 subtracted until it is 0
left adjust starts at 0 and adds 1 until spaces is 0
star is a variable of '*'

=end

def star_top(leftjust, spaces, symbol, n)
  star_top = []
  until spaces < 0 
    star_top << (symbol + (' ' * spaces) + symbol + (' ' * spaces) + symbol).center(n)
    leftjust += 1
    spaces -= 1
  end
  star_top
end

def star(n)
  spaces= (n - 3) / 2
  leftjust = 0
  symbol = '*'

  star = star_top(leftjust, spaces, symbol, n)
  star << symbol * n
  star << star[0...-1].reverse

  puts star
end

star(25)

