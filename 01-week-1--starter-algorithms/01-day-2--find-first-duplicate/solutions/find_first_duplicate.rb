require 'set'

def find_first_duplicate(arr)
  uniques = Set.new

  arr.each do |value|
    return value if uniques.include?(value)

    uniques.add(value)
  end

  -1
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts find_first_duplicate([1, 2, 3, 4])

  puts

  puts "Expecting: -1"
  puts find_first_duplicate([])

  puts

  puts "Expecting: -1"
  puts find_first_duplicate([4])

  puts

  puts "Expecting: 7"
  puts find_first_duplicate([7, 1, 2, 3, 7])
end

# Please add your pseudocode to this file
####################################################################
 # initialize an empty set called uniques
 # 
 # iterate through the input array:
 #    if the value is in uniques, return the value
 #    else add the value to the set
 # 
 # return -1 if no duplicate found during iteration
#####################################################################

# And a written explanation of your solution
####################################################################
 # A Set is a data structure that contains only unique objects/values.
 # If I check if a value is in a Set before adding it, I'll know if there's
 # a duplicate. If there's a duplicate, I'll just return that value right 
 # away because that'll be the first duplicate in the input array. If we
 # exit iteration without returning anything, that means there's no duplicate, 
 # so we'll return -1
 ####################################################################
