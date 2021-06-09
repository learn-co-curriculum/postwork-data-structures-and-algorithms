# BONUS: REDUCE NUMBER OF SWAPS
# def partition(array, low, high)
#   pivot = array[high]  # choose rightmost element as pivot
#   pivot_index = high  # store index of pivot
#   i = low

#   while i < pivot_index
#     if array[i] <= pivot
#       i += 1
#       next
#     end

#     before_pivot = pivot_index - 1
#     array[i], array[before_pivot] = array[before_pivot], array[i]
#     pivot_index -= 1
#   end
#   # SWAP ONCE AT END OF LOOP TO PUT PIVOT IN CORRECT LOCATION
#   array[pivot_index], array[high] = array[high], array[pivot_index]
#   pivot_index
# end

# SUPER BONUS: USE MIDDLE AS PIVOT
def partition(array, low, high)
  middle = (high + low ) / 2
  pivot = array[middle]  # choose middle element as pivot
  # SWAP MIDDLE TO END
  array[middle], array[high] = array[high], array[middle]

  pivot_index = high  # store index of pivot
  i = low

  while i < pivot_index
    if array[i] <= pivot
      i += 1
      next
    end

    before_pivot = pivot_index - 1
    array[i], array[before_pivot] = array[before_pivot], array[i]
    pivot_index -= 1
  end
  # SWAP ONCE AT END OF LOOP TO PUT PIVOT IN CORRECT LOCATION
  array[pivot_index], array[high] = array[high], array[pivot_index]
  pivot_index
end

def quicksort(array, low = 0, high = array.length - 1)
  return array if low >= high

  pivot_index = partition(array, low, high)
  quicksort(array, low, pivot_index - 1)
  quicksort(array, pivot_index + 1, high)

  array
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [1, 2, 3, 4]"
  print quicksort([3, 2, 1, 4])
  puts

  puts

  puts "Expecting: [1, 2, 2, 3, 4]"
  print quicksort([1, 2, 2, 3, 4])
  puts

  puts

  puts "Expecting: []"
  print quicksort([])
  puts

  puts

  puts "Expecting: [5]"
  print quicksort([5])
  puts

  puts

  puts "Expecting: [2, 4]"
  print quicksort([2, 4])
  puts

  puts

  puts "Expecting: [1, 2, 3, 4, 5, 6, 7]"
  print quicksort([1, 2, 3, 4, 5, 6, 7])
  puts

  puts

  puts "Expecting: [4, 4, 4, 4]"
  print quicksort([4, 4, 4, 4])
  puts

  puts

  puts "Expecting: [-10, -10, 0, 1, 2, 3, 4, 8, 9, 10, 87]"
  print quicksort([-10, 8, 4, 3, 9, 10, -10, 87, 2, 0, 1])
  puts
end

# Please add your pseudocode to this file
# And a written explanation of your solution
