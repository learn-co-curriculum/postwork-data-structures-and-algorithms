class Node
  attr_accessor :value, :left, :right

  def initialize(value, left = nil, right = nil)
    @value = value
    @left = left
    @right = right
  end
end

def find_target(root, target)
  return nil if root.nil?
  return root if root.value == target

  if root.value > target
    return find_target(root.left, target)
  else
    return find_target(root.right, target)
  end
end

if __FILE__ == $PROGRAM_NAME
  root = Node.new(1, Node.new(-1), Node.new(2))
  puts "Expecting: Node with value 2"
  puts find_target(root, 2).inspect

  puts

  puts "Expecting: nil"
  puts find_target(root, 5).inspect

  puts

  # Don't forget to add your own!
  root = Node.new(10, Node.new(9, Node.new(8, Node.new(7))))
  puts "Expecting: Node with value 8"
  puts find_target(root, 8).inspect

  puts

  root = Node.new(1, nil, Node.new(2, nil, Node.new(3, nil, Node.new(4, nil, Node.new(5)))))
  puts "Expecting: Node with value 5"
  puts find_target(root, 5).inspect

  puts

  root = Node.new(10, Node.new(7, Node.new(6, Node.new(4)), Node.new(8)), Node.new(14, Node.new(11), Node.new(18, nil, Node.new(20))))
  puts "Expecting: Node with value 20"
  puts find_target(root, 20).inspect

  puts

  puts "Expecting: nil"
  puts find_target(root, 5).inspect
end

# Please add your pseudocode to this file
###############################################################################################
 # return null or nil if root is falsy
 # 
 # return node if node value == target value
 # 
 # if node value > target:
 #  return result of recursing with node.left
 # else:
 #  return result of recursing with node.right
###############################################################################################

# And a written explanation of your solution
###############################################################################################
 # This is very similar to using a binary search on a sorted array. First we
 # check if the root is a node. If it isn't we just return null or nil. If it
 # is a node and its value is the same as the target, we return the node. If
 # the value is higher than target, we recursively traverse the left side of 
 # the tree. Otherwise we traverse the right side if the value is less than
 # the target.
###############################################################################################

 # Time complexity for a balanced tree is O (log n), since we are dividing the input on each recursion
 # For an unbalanced tree, it's O(n), since we must visit all nodes in the worst case
