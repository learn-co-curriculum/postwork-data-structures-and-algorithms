def reverse_string(str)
  reversed_str = ""

  str.chars.each do |char|
    reversed_str = char + reversed_str
  end

  reversed_str
end

puts "Expecting: 'ih'"
puts reverse_string('hi')

puts

puts "Expecting: 'ybabtac'"
puts reverse_string('catbaby')

puts

puts "Expecting: '' (empty string)"
puts reverse_string('')

puts

puts "Expecting: 'a'"
puts reverse_string('a')

############################################################################
# Please add your pseudocode to this file:

# initialize reversed_str to store empty string

# iterate over each letter in the input string:
#   place character before previous characters and store result in reversed_str

# return reversed_str
############################################################################

############################################################################
# And a written explanation of your solution:

# The simplest way I can think of reversing a string is to start by thinking of a really
# simple example: "ab"

# To solve for "ab", you take "a", store it in a variable, and then take the next character "b",
# and place it before "a" in that same variable. If we do this for each character, we should be
# able to reverse the string.
############################################################################