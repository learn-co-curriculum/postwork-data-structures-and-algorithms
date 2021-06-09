def selection_sort(arr)
  sorted = []

  until arr.length == 0
    min = arr.min
    idx = arr.index(min)
    sorted << min
    arr.delete_at(idx)
  end

  sorted
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print selection_sort([3, -1, 5, 2])

  puts

  puts "Expecting: []"
  print selection_sort([])

  puts

  puts "Expecting: [-1]"
  print selection_sort([-1])

  puts

  puts "Expecting: [-10, 2, 2, 3, 7]"
  print selection_sort([3, 2, 2, 7, -10])

  puts

  puts "Expecting: [100, 200]"
  print selection_sort([100, 200])

  puts
  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }

  start_time = Time.now

  1000.times do
    selection_sort([2, 1])
    selection_sort(long_input)
  end

  avg_time = (Time.now - start_time) / 2000
  puts avg_time
end

# Please add your pseudocode to this file
############################################################################
 # initialize an empty Array called sorted
 # 
 # loop array length times:
 #    store minimum value in array in min
 #    remove minimum value from input array
 #    push min onto sorted
 # 
 # return sorted
############################################################################

# And a written explanation of your solution
############################################################################
 # The selection sort algorithm states that we need to find the minimum value 
 # of the input array and place it in another array until all of the values have
 # been placed. This means I can find the minimum in the input, remove it from the
 # input, and push it onto another array in order to sort the values. The first time
 # I find the minimum in the input, that's the lowest value, the second time I find
 # the minimum, that's the second lowest value, and so on. Once the input array is  
 # empty, the sorting is complete.
############################################################################
