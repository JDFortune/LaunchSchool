LINE_LIMIT = 76

def print_in_box(string)
  spacer = ((string.length > LINE_LIMIT) ? LINE_LIMIT : string.length)

  horizontal_rule = "+#{'-' * (spacer + 2)}+"
  empty_line = "|#{' ' * (spacer + 2)}|"

  puts horizontal_rule
  puts empty_line
  puts_string_line(string)
  puts empty_line
  puts horizontal_rule
end


def puts_string_line(string)
  lines, leftover = string.length.divmod(LINE_LIMIT)
  count = 0

  while lines >= 0
    if lines >= 1
      puts "| #{string[count, LINE_LIMIT]} |"
    else
      puts "| #{string[count, leftover]}#{" " * (LINE_LIMIT - leftover)} |"
    end
    count += LINE_LIMIT
    lines -= 1
  end
end


print_in_box('To boldly go where no one has gone before.')
# +--------------------------------------------+
# |                                            |
# | To boldly go where no one has gone before. |
# |                                            |
# +--------------------------------------------+

print_in_box('')
# +--+
# |  |
# |  |
# |  |
# +--+

print_in_box("Use the form below to add your solution or analysis for this exercise. You can include a link to a gist or pastebin, or write your entire solution right here. Make sure to use proper formatting so your code shows up correctly and preview your code first. You may include some commentary about your code and the tradeoffs you took, or some analysis about this exercise and its solutions. Make sure your solution fulfills all of the provided examples, if any, and doesn't contain any obvious errors.")


# p "Use the form below to add your solution or analysis for this exercise. You can include a link to a gist or pastebin, or write your entire solution right here. Make sure to use proper formatting so your code shows up correctly and preview your code first. You may include some commentary about your code and the tradeoffs you took, or some analysis about this exercise and its solutions. Make sure your solution fulfills all of the provided examples, if any, and doesn't contain any obvious errors.".length