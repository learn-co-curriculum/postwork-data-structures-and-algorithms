def fibonacci(num)
  last_two = [0, 1]

  return last_two[num] if num < 2

  (num - 1).times do 
    sum = last_two[0] + last_two[1]
    last_two = [last_two[1], sum]
  end

  last_two.last
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts fibonacci(0)

  puts

  puts "Expecting: 1"
  puts fibonacci(2)

  puts

  puts "Expecting: 55"
  puts fibonacci(10)

  # Don't forget to add your own!
  puts

  puts "Expecting: 1"
  puts fibonacci(1)

  puts

  puts "Expecting: 6765"
  puts fibonacci(20)
end

# Please add your pseudocode to this file
#########################################################################
# initialize an Array called last_two with the first two values from the sequence
#
# if the input is 0 or 1, return the value at that index from last_two
#
# loop input - 1 times:
#   store the sum of the values in last_two in a variable called sum
#   remove the first element from last_two
#   push sum onto last_two
#
# return the last value in last_two
#########################################################################

# And a written explanation of your solution
#########################################################################
# Since the fibonacci sequence is always the same, I can initialize an Array
# with the first two values of the sequence. I only need to store two values
# because the next value is the sum of the two values that came before it. By
# adding up the two values I'm storing, I'll always get the next value. If I do
# that enough times (num - 1), once I'm done adding up the values, the last value
# will be the nth value in the sequence. Every time I add up the two values, I need
# to remove the 0th value I'm storing and then push the sum onto that array.
#########################################################################
