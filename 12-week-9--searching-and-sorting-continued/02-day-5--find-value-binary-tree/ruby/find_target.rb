class Node
  attr_accessor :value, :left, :right

  def initialize(value, left = nil, right = nil)
    @value = value
    @left = left
    @right = right
  end
end

def find_target(root, target)
  # type your code in here
end

if __FILE__ == $PROGRAM_NAME
  root = Node.new(1, Node.new(-1), Node.new(2))
  puts "Expecting: Node with value 2"
  puts find_target(root, 2).inspect

  puts

  puts "Expecting: nil"
  puts find_target(root, 5).inspect

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
