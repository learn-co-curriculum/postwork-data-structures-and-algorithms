def rotate_array(arr, k)
  # avoid divide by zero error in Ruby, which will otherwise occur on L5
  return arr if arr.empty? || k.zero?

  rotations = k % arr.length
  removed = arr.slice!(arr.length - rotations, rotations)
  removed + arr
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [4, 1, 2, 3]"
  print rotate_array([1, 2, 3, 4], 1)

  puts

  puts "Expecting: [2, 3, 1]"
  print rotate_array([1, 2, 3], 2)

  puts

  puts "Expecting: [1, 2, 3]"
  print rotate_array([1, 2, 3], 3)
  # Don't forget to add your own!

  puts

  puts "Expecting: [1, 2, 3]"
  print rotate_array([1, 2, 3], 0)

  puts

  puts "Expecting: [2, 3, 1]"
  print rotate_array([1, 2, 3], 5)

  puts

  puts "Expecting: []"
  print rotate_array([], 7)
end

# Please add your pseudocode to this file
##########################################################################################
 # initialize rotations to store the remainder of k / array length
 # remove rotations number elements from end of array
 # return removed elements + remaining elements
##########################################################################################

# And a written explanation of your solution
##########################################################################################
 # We can solve this problem by figuring out how many elements to remove from the end
 # of the array, and then adding those removed elements to the front of the array. To
 # do this, we need to account for when k is the same or larger than the array's length.
 # This is ascertained by getting the remainder of k / array length.
##########################################################################################