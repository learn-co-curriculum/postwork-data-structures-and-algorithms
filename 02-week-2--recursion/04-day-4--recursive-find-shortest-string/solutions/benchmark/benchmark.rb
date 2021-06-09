def find_shortest_string(arr)
  arr.reduce do |shortest, string|
    string.length < shortest.length ? string : shortest
  end
end

def find_shortest_string_recursive(arr)
  return arr.first if arr.length == 1

  result = find_shortest_string_recursive(arr[1..-1])

  arr.first.length <= result.length ? arr.first : result
end

def benchmark
  start_time = Time.now

  1000.times do 
    yield
  end

  (Time.now - start_time) / 1000
end

puts "Iterative: #{benchmark { find_shortest_string(['cat', 'dogs', '', 'bats', 'flags']) }}"
puts "Recursive: #{benchmark { find_shortest_string_recursive(['cat', 'dogs', '', 'bats', 'flags']) }}"
