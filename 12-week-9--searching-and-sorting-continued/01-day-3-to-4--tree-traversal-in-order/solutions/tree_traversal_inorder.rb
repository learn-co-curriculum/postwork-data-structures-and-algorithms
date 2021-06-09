class Node
  attr_accessor :value, :left, :right

  def initialize(value, left = nil, right = nil)
    @value = value
    @left = left
    @right = right
  end
end

# Recursive solution
def tree_traversal_inorder(root, result = [])
  return [] if root.nil?

  tree_traversal_inorder(root.left, result)
  result << root.value
  tree_traversal_inorder(root.right, result)

  result
end

# Iterative solution
# require 'set'

# def tree_traversal_inorder(root)
#   return [] if root.nil?
#   queue = [root]
#   result = []
#   visited = Set.new

#   until queue.empty?
#     node = queue.first

#     if !node.left.nil? && !visited.include?(node)
#       queue.unshift(node.left)
#       visited.add(node)
#       next
#     end

#     result << node.value
#     queue.shift

#     unless node.right.nil?
#       queue.unshift(node.right)
#     end
#   end

#   result
# end

if __FILE__ == $PROGRAM_NAME
  root = Node.new(2, Node.new(-10), Node.new(20))
  puts "Expecting: [-10, 2, 20]"
  print tree_traversal_inorder(root)
  puts

  puts

  root = Node.new(10, Node.new(0, nil, Node.new(5)), Node.new(20, nil, Node.new(30)))
  puts "Expecting: [0, 5, 10, 20, 30]"
  print tree_traversal_inorder(root)
  puts

  # Don't forget to add your own!
  puts

  root = Node.new(1, nil, Node.new(3, Node.new(2)))
  puts "Expecting: [1, 2, 3]"
  print tree_traversal_inorder(root)
  puts

  puts

  root = nil
  puts "Expecting: []"
  print tree_traversal_inorder(root)
  puts

  puts

  root = Node.new(30, Node.new(10, nil, Node.new(20)), Node.new(50, Node.new(40)))
  puts "Expecting: [10, 20, 30, 40, 50]"
  print tree_traversal_inorder(root)
  puts
end

## Please add your pseudocode to this file (recursive)
############################################################################
 # initialize result to empty array
 # 
 # function in_order(root):
 #  return empty array if root is falsy
 # 
 #  in_order(left side)
 #  push root value onto result
 #  in_order(right side)
 # 
 #  return result
 # ##########################################################################

## Please add your pseudocode to this file (iterative)
############################################################################
 # return empty array if root is falsy
 # initialize queue with array containing root
 # initialize result to empty array
 # initialize visited to new set
 # 
 # while queue contains nodes:
 #  node = first node in queue
 # 
 #  if node has left node and set does not contain node:
 #    add left node to beginning of queue
 #    add node to set
 #    continue with loop
 # 
 #  add node value to end of result
 #  remove node from start of queue
 # 
 #  if node has right node:
 #    add right node to beginning of queue
 # 
 # return result
 #  ##########################################################################

## And a written explanation of your solution (recursive + iterative)
############################################################################
 # If we continuously go left from the root until there is no left node left
 # to visit, we will have traveled to the lowest possible value that branches
 # off of that node. Once we've done that we can push that value onto an array
 # and we can then start looking at the right nodes. We repeat this process of
 # always going as far to the left as possible before going right until there
 # are no nodes left to visit. For the iterative version, we add the node to a
 # set to mark that we had already visited a node's left node to avoid an infinite 
 # loop. Otherwise, if we visited a node's left node, then processed that same
 # node again, we'd go left all over again in an endless loop. I'm sure there are
 # other ways to solve this iteratively, but this is how I did it.
 # ##########################################################################


 # Big O for both solutions is O(n). Each node will be visited at least once.