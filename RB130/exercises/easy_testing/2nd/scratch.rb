def my_method
  a = 'hello'
  proc {a = 'goodbye'}
end

my_proc = my_method

def other(&block)
  a = 'gadzooks'
  block.call
  a
end

p other(&my_proc)
