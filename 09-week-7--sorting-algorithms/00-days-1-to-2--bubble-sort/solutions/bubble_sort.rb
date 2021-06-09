def bubble_sort(arr)
  sorted = false

  until sorted
    sorted = true

    arr.each_with_index do |num, idx|
      break if idx == arr.length - 1

      if num > arr[idx + 1]
        arr[idx], arr[idx + 1] = arr[idx + 1], arr[idx]
        sorted = false
      end
    end
  end

  arr
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [1, 2, 3, 4]"
  print bubble_sort([3, 2, 1, 4])

  puts

  puts "Expecting: [1, 2, 3]"
  print bubble_sort([1, 2, 3])

  puts

  puts "Expecting: []"
  print bubble_sort([])

  puts

  puts "Expecting: [1, 2, 3]"
  print bubble_sort([2, 3, 1])

  # Don't forget to add your own!

  puts

  puts "Expecting: [1]"
  print bubble_sort([1])

  puts

  puts "Expecting: [1, 3]"
  print bubble_sort([3, 1])

  puts

  puts "Expecting: [-2, 0, 0, 1, 5, 6, 6, 7, 8, 8]"
  print bubble_sort([6, -2, 0, 8, 7, 8, 6, 0, 5, 1])
end

# Please add your pseudocode to this file
##################################################################################
# initialize boolean sorted to false
#
# while sorted is false:
#   sorted = true
#   iterate over array with index tracking:
#     if current element is larger than next element:
#       swap those elements in place
#       sorted = false
#
# return input array
##################################################################################

# And a written explanation of your solution
##################################################################################
# Since we need to iterate over the array over and over until it's sorted, we need
# to track if it's sorted, so we initialize a Boolean to false to do exactly that.
# Next we need to use a while loop (or something similar) that runs until the Array
# is sorted. This allows us to iterate over the Array as many times as needed.
# Since we want to set sorted to false only if a swap happens, we'll set it to true
# before iterating over the Array. When we iterate over the Array, we always go
# over the whole thing. We compare the value we're iterating over to the next one, 
# and if the first one is more than the next one, we swap them. We also set sorted
# to false because of the swap. We'll eventually get to a point where there are no
# swaps and at that point, sorted will remain true and when the iteration ends,
# we'll exit the outer loop and return the Array.
# Big O for time complexity is O(n^2) quadratic time because of the loop within a loop. 
# In the worst case we'll end up going over the whole Array roughly once per element.
##################################################################################