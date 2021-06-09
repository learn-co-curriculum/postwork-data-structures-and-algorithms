Fibs = {}

def fibonacci(num)
    return num if num == 0 || num == 1
    return Fibs[num] if Fibs.keys.include?(num)
    
    Fibs[num] = fibonacci(num -1) + fibonacci(num - 2)
    return Fibs[num]
end

if __FILE__ == $PROGRAM_NAME
puts "Expecting: 0"
puts "=>", fibonacci(0)

puts

puts "Expecting: 1"
puts "=>", fibonacci(2)

puts

puts "Expecting: 55"
puts "=>", fibonacci(10)

# Don't forget to add your own!
end
  
# // Please add your pseudocode to this file

# // fib(4) = fib(3) + fib(2)
# // fib(2), fib(3) were already saved into mem, so will fib(4)

# // fib(5) = fib(4) + fib(3)
# // The previously saved fib(3) and fib(4) will be used to avoid duplicated calculation and call stacks

# // And a written explanation of your solution

# // In a nutshell, DP is a efficient way in which we can use memoziation to cache visited data to faster retrieval later on.

# // This implementation makes use of mem as an array (or hash) to store value of an already computed num. This will greatly reduce the number of call stack and duplicated computation in the call stack.

# // Time complexity O(N), Space O(N)