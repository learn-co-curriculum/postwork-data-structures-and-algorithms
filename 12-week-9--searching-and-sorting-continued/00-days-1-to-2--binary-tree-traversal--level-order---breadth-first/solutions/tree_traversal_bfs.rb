class Node
  attr_accessor :value, :left, :right

  def initialize(value, left = nil, right = nil)
    @value = value
    @left = left
    @right = right
  end
end

def level_order_traversal(root)
  queue = root.nil? ? [] : [root]
  result = []

  while queue.length > 0
    node = queue.shift

    result << node
    queue << node.left unless node.left.nil?
    queue << node.right unless node.right.nil?
  end

  result.map { |node| node.value }
end


if __FILE__ == $PROGRAM_NAME
  root = Node.new(1, Node.new(2), Node.new(3));

  puts "Expecting: [1, 2, 3]"
  print level_order_traversal(root)

  puts
  puts

  root = Node.new(10, Node.new(20, Node.new(9), Node.new(22)), Node.new(30))

  puts "Expecting: [10, 20, 30, 9, 22]"
  print level_order_traversal(root)

  # Don't forget to add your own!
  puts
  puts

  root = nil

  puts "Expecting: []"
  print level_order_traversal(root)

  puts
  puts

  root = Node.new(10)

  puts "Expecting: [10]"
  print level_order_traversal(root)

  puts
  puts

  root = Node.new(10, Node.new(9, Node.new(8, Node.new(7, Node.new(32)), Node.new(6, nil, Node.new(33))), Node.new(12, Node.new(11), Node.new(40))), Node.new(11, Node.new(20, Node.new(4), Node.new(90)), Node.new(30, Node.new(9), Node.new(89, nil, Node.new(90, nil, Node.new(34))))))

  puts "Expecting: [10, 9, 11, 8, 12, 20, 30, 7, 6, 11, 40, 4, 90, 9, 89, 32, 33, 90, 34]"
  print level_order_traversal(root)

  puts
  puts

  root = Node.new(10, nil, Node.new(11, nil, Node.new(12, nil, Node.new(12))))

  puts "Expecting: [10, 11, 12, 12]"
  print level_order_traversal(root)

  puts
end

# Please add your pseudocode to this file
##############################################################################################
# if root is nil: return empty array
# else: initialize a queue with the root
# initialize an empty array to store result
#
# loop until the queue is empty:
#   store first node in queue in variable node
#   add node to result array
#   add node's left and right nodes to queue if not falsy, in that order  
#
# return result
##############################################################################################

# And a written explanation of your solution
##############################################################################################
# We can solve this problem by using a queue. Each time we process a node, we puts its left
# and right nodes into the queue for future processing. So starting at the root, we put it
# in the queue. We iterate over the queue: the node is added to a result array. If the node
# being processed has a left and/or right node, those are pushed onto the queue. We continue
# until the queue is empty. To return the values associated with the nodes in the result, we
# use map to return an array containing the values in the correct order.
##############################################################################################