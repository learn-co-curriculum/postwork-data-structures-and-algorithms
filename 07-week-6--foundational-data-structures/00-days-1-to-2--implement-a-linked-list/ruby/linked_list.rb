class LinkedList
  attr_accessor :head

  def initialize()
  end

  def iterate()
  end

  # print each node's value on its own line
  # use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  def print
  end

  # find the node with the target value and return it
  # if not found return nil, use your iterate method to be DRY!
  def find(target)
  end

  # add the node to the start of the list, no nodes should be removed
  def add_first(node)
  end

  # add node to end of list, no nodes should be removed
  # you may wish to use the iterate method
  def add_last(node)
  end

  # remove the first Node in the list and update head
  # and return the removed node
  def remove_first
  end

  # remove the tail node, iterate may be helpful
  # return the node you just removed
  def remove_last
  end

  # replace the node at the given index with the given node
  def replace(idx, node)
  end

  # insert the node at the given index
  # no existing nodes should be removed or replaced
  def insert(idx, node)
  end

  # remove the node at the given index, and return it
  def remove(idx)
  end
end

class Node
  # next is a reserved word in Ruby, so we'll use next_node instead 
  # just to keep things clear
  attr_accessor :value, :next_node

  def initialize()
  end
end

if __FILE__ == $PROGRAM_NAME
  # Don't forget to add your tests!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
