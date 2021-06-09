def balancing_parentheses(string)
  missing = 0
  openings = 0

  string.chars.each do |char|
    if char == '('
      openings += 1
      next
    end

    if openings > 0 
      openings -= 1
    else
      missing += 1
    end
  end

  missing + openings
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts balancing_parentheses('(()())')

  puts

  puts "Expecting: 2"
  puts balancing_parentheses('()))')

  puts

  puts "Expecting: 1"
  puts balancing_parentheses(')')

  # Don't forget to add your own!

  puts

  puts "Expecting: 0"
  puts balancing_parentheses('()')

  puts

  puts "Expecting: 1"
  puts balancing_parentheses('(')

  puts

  puts "Expecting: 2"
  puts balancing_parentheses(')(')

  puts

  puts "Expecting: 1"
  puts balancing_parentheses(')()')

  puts

  puts "Expecting: 2"
  puts balancing_parentheses(')((((()))((())))()(()))(')

  puts

  puts "Expecting: 3"
  puts balancing_parentheses(')))')

  puts

  puts "Expecting: 3"
  puts balancing_parentheses('(((')
end

# Please add your pseudocode to this file
##################################################################################
# initialize missing to 0 (will store unmatched closing parens count)
# initialize openings to 0 (will store opening parens count)
#
# iterate over string:
#   if char == '(':
#     increment openings
#   else:
#     if openings is 0:
#       increment missing
#     else:
#       decrement openings
#
# return missing + openings
##################################################################################

# And a written explanation of your solution
##################################################################################
# We can calculate the number of parentheses needed by counting the number of opening
# parentheses that occur in the string and decrementing that count any time a closing
# parenthesis is encountered after that. If we encounter a closing parenthesis and there
# are no opening parentheses (openings = 0), we add to missing. Once we've iterated 
# over the whole string, we just need to add the missing count with the openings count,
# since the openings count will track any opening parentheses for which there were no
# matching closing ones.
##################################################################################
