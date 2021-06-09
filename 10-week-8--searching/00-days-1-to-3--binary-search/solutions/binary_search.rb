def binary_search(arr, target)
  return false if arr.empty?

  middle = arr.length / 2
  middle_value = arr[middle]

  return true if middle_value == target

  search_side = middle_value > target ? arr[0...middle] : arr[middle + 1..-1]

  return binary_search(search_side, target)
end

# BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
def binary_search_index(arr, target)
  return -1 if arr.empty?

  middle = arr.length / 2
  middle_value = arr[middle]

  return middle if middle_value == target

  if middle_value > target
    return binary_search_index(arr[0...middle], target)
  else
    idx = binary_search_index(arr[middle + 1..-1], target)

    return -1 if idx == -1

    return idx + middle + 1
  end 
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: true"
  puts "=>", binary_search([1, 2, 3], 3)

  puts

  puts "Expecting: false"
  puts "=>", binary_search([3, 5, 9], 10)

  puts

  puts "Expecting: true"
  puts "=>", binary_search([3, 5, 9, 20], 3)

  puts

  puts "Expecting: false"
  puts "=>", binary_search([3, 5, 9, 20], -10)

  puts

  puts "Expecting: true"
  puts "=>", binary_search([3, 5, 9, 20], 9)

  puts

  puts "Expecting: false"
  puts "=>", binary_search([], 9)

  # Don't forget to add your own!

  # UNCOMMENT FOR BONUS
  puts 

  puts "Expecting: 0"
  puts "=>", binary_search_index([1, 2, 3], 1)

  puts

  puts "Expecting: -1"
  puts "=>", binary_search_index([4, 7, 20], 100)

  puts

  puts "Expecting: 6"
  puts "=>", binary_search_index([1, 2, 3, 4, 5, 6, 7, 8], 7)

  puts

  puts "Expecting: 4"
  puts "=>", binary_search_index([4, 7, 20, 30, 40], 40)

  puts

  puts "Expecting: 2"
  puts "=>", binary_search_index([1, 2, 3, 4, 5, 6, 7, 8], 3)
end

# Add a written explanation of your solution
########################################################################################################
 # Big O time complexity is O(log n) because the input is divided on each recursive call.
 # Let's assume we're searching for a value not in the list. The following number of 
 # recursive calls are made for the following input sizes:
 # Input size 1 => Recursive calls 1
 # Input size 2 => Recursive calls 2
 # Input size 3 => Recursive calls 2
 # Input size 4 => Recursive calls 3
 # Input size 10 => Recursive calls 4
 # 
 # The true/false algorithm is already explained in the README so I'll explain the bonus.
 # To find the index, we have to return the middle index when the target is found, otherwise
 # return -1. This is simple when the function only searches left. We can just return the middle,
 # or rather the result of calling the function on the left side. Things get a little complicated
 # when we search the right side. Since we're always dividing the input into smaller and smaller
 # subsets, it means the middle on each recursive call will no longer reflect the actual location
 # of the target when searching the right side. This is because the input only contains the right
 # half of the previous input. We also need to make sure we return -1 if the target isn't found. 
 # 
 # So for the right side, we store the result of the recursive call in a variable. This will be the 
 # middle idx when the target is found or -1. If it's -1, we need to return that value. Otherwise, 
 # we return the result of adding the idx to the middle value in that frame and then add one. We add
 # one because we removed the middle value from the input when we made the recursive call, and we need
 # to make up for that. Let's take a look at a small example:
 # 
 # arr = [1, 2, 3], target = 3, expected output = 2
 # 
 # If we don't add the middle or 1, we'll get 0 as the result, which is incorrect:
 # Initial call: [1, 2, 3]
 # Middle: 1
 # Middle value: 2
 # Go Right
 # 
 # Recursive call 1: [3]
 # Middle: 0
 # Middle value: 3
 # Found
 # Return Middle up stack: 0
 # 
 # Initial call receives 0
 # Return 0
 # 
 # Now let's see what happens when we add the middle + 1 every time we go right:
 # Initial call: [1, 2, 3]
 # Middle: 1
 # Middle value: 2
 # Go Right
 # 
 # Recursive call 1: [3]
 # Middle: 0
 # Middle value: 3
 # Found
 # Return Middle up stack: 0
 # 
 # Initial call receives 0
 # Adds Middle and 1 to 0: 0 + 1 (<- value of Middle at initial call) + 1
 # Returns 2
########################################################################################################