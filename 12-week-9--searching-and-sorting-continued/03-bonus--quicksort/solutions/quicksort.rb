def partition(array, low, high)
  pivot = array[high]  # choose rightmost element as pivot
  pivot_index = high  # store index of pivot

  # iterate over the portion of the array that needs processing
  # use a while loop to control the index, we only want to increment it
  # if we encounter an element that's less than or equal to the pivot
  i = low

  while i < pivot_index
    if array[i] <= pivot
      i += 1
      next
    end

    before_pivot = pivot_index - 1
    # swap the higher valued element with the one just before the pivot
    # then swap the element just before the pivot with the pivot
    # then update the pivot index since it moved
    array[i], array[before_pivot] = array[before_pivot], array[i]
    array[pivot_index], array[before_pivot] = array[before_pivot], array[pivot_index]
    pivot_index -= 1
  end

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

  # Don't forget to add your own!
  # testing partition
  pArray = [3, 2, 1, 4]
  puts "Expecting: 3, [3, 2, 1, 4]"
  print(partition(pArray, 0, pArray.length - 1), pArray)
  puts
  puts

  pArray = [3, 2, 1, 2]
  puts "Expecting: 2, [1, 2, 2, 3]"
  print(partition(pArray, 0, pArray.length - 1), pArray)
  puts
  puts

  pArray = []
  puts "Expecting: -1, []"
  print(partition(pArray, 0, pArray.length - 1), pArray)
  puts
  puts

  pArray = [3]
  puts "Expecting: 0, [3]"
  print(partition(pArray, 0, pArray.length - 1), pArray)
  puts
  puts

  pArray = [1, 2]
  puts "Expecting: 1, [1, 2]"
  print(partition(pArray, 0, pArray.length - 1), pArray)
  puts
  puts

  pArray = [0, 4, 2]
  puts "Expecting: 1, [0, 2, 4]"
  print(partition(pArray, 0, pArray.length - 1), pArray)
  puts
  puts

  pArray = [2, -10, 7, 0, 1, 3]
  puts "Expecting: 4, [2, -10, 1, 0, 3, 7]"
  print(partition(pArray, 0, pArray.length - 1), pArray)
  puts
  puts

  pArray = [2, -10, 7, 0, 1, 3]
  puts "Expecting: 2, [2, -10, 0, 7, 1, 3]"
  print(partition(pArray, 1, 3), pArray)
  puts
  puts

  pArray = [2, 1, 0]
  puts "Expecting: 0, [0, 1, 2]"
  print(partition(pArray, 0, 2), pArray)
  puts
  puts
end

# Please add your pseudocode to this file
# And a written explanation of your solution
