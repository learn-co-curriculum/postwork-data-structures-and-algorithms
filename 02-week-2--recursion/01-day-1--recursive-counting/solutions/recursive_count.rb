def recursive_count(num = 0)
  # BASE CASE
  return if num >= 10

  puts num
  recursive_count(num + 1)
  # IF YOU PUTS NUM BELOW, THE NUMBERS PRINT BACKWARDS FROM 9 TO 0. WHY?
  # puts num
end

if __FILE__ == $PROGRAM_NAME
  recursive_count
end

# OPTIONAL
# Please add your pseudocode to this file
# And a written explanation of your solution
