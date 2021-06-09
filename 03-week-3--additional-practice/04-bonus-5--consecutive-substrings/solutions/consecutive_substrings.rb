def consecutive_substrings(string)
  subs = []

  string.split('').each_with_index do |char, idx|
    subs << char
    fragment = char

    string[idx + 1..-1].split('').each_with_index do |letter|
      fragment += letter
      subs << fragment
    end
  end

  subs
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']"
  print consecutive_substrings('abc')

  puts

  puts "Expecting: ['a']"
  print consecutive_substrings('a')

  # Don't forget to add your own!

  puts

  puts "Expecting: []"
  print consecutive_substrings('')

  puts

  puts "Expecting: ['a', 'ab', 'b']"
  print consecutive_substrings('ab')
end

# Please add your pseudocode to this file
#####################################################################################
 # initialize an empty array called subs
 # 
 # iterate over string:
 #    push character onto subs
 #    initialize fragment and store character in it
 # 
 #    iterate over string starting one index ahead:
 #      add letter to fragment
 #      push fragment onto subs
 # 
 # return subs
#####################################################################################

# And a written explanation of your solution
#####################################################################################
 # We can get all of the consecutive substrings by iterating over the string. We
 # push that character onto an array. We also store that character in a variable,
 # which we'll use to store the rest of the following characters. Next, we iterate
 # over the rest of the string. Each time we encounter a new character, we add it
 # onto the variable and then push the variable onto the array.
#####################################################################################
