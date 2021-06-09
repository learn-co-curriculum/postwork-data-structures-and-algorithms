def length_of_longest_substring(s)
    return s.size if s.size < 2
    
    queue, hash = [], {}
    s.each_char.reduce(-Float::INFINITY) do |max, c|
        hash.delete(char = queue.shift) until queue.empty? || char.eql?(c) if hash.key?(c)

        [max, (queue << hash[c] = c).size].max
    end
end


if __FILE__ == $PROGRAM_NAME

puts "Expecting: 3"
puts "=>", length_of_longest_substring("abcabcbb")

# Don't forget to add your own!
end
  