class Node
  attr_accessor :value, :left, :right

  def initialize(value, left = nil, right = nil)
    @value = value
    @left = left
    @right = right
  end
end

def tree_traversal_inorder(root)
  # type your code in here
end

if __FILE__ == $PROGRAM_NAME
  root = Node.new(2, Node.new(-10), Node.new(20))
  puts "Expecting: [-10, 2, 20]"
  print tree_traversal_inorder(root)
  puts

  puts

  root = Node.new(10, Node.new(0, nil, Node.new(5)), Node.new(20, nil, Node.new(30)))
  puts "Expecting: [0, 5, 10, 20, 30] "
  print tree_traversal_inorder(root)
  puts

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
