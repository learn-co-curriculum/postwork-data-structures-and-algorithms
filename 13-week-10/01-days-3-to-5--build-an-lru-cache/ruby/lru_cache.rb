class Node
  attr_accessor :data, :key, :next_node, :prev_node

  def initialize(data = nil, key = nil, next_node = nil, prev_node = nil)
    @data = data
    @key = key
    @next_node = next_node
    @prev_node = prev_node
  end
end

class DoublyLinkedList
  attr_reader :head, :tail

  def initialize(head = nil, tail = nil)
    @head = head
    @tail = tail
  end

  # ADD THE NODE TO THE HEAD OF THE LIST
  def add_head(node) 

  end

  # REMOVE THE TAIL NODE FROM THE LIST
  # AND RETURN IT
  def remove_tail

  end

  # REMOVE THE GIVEN NODE FROM THE LIST
  # AND THEN RETURN IT
  def remove_node(node) 

  end

  # MOVE THE GIVEN NODE FROM ITS LOCATION TO THE HEAD
  # OF THE LIST
  def move_node_to_head(node) 

  end
end

class LRUCache
  attr_reader :limit, :size

  def initialize(limit = 10)
    @limit = limit
    @size = 0
    @hash = {}
    @list = DoublyLinkedList.new
  end

  # RETRIEVE THE NODE FROM THE CACHE USING THE KEY
  # IF THE NODE IS IN THE CACHE, MOVE IT TO THE HEAD OF THE LIST AND RETURN IT
  # OTHERWISE RETURN -1
  def get(key)

  end

  # ADD THE GIVEN KEY AND VALUE TO THE CACHE
  # IF THE CACHE ALREADY CONTAINS THE KEY, UPDATE ITS VALUE AND MOVE IT TO 
  # THE HEAD OF THE LIST
  # IF THE CACHE DOESN'T CONTAIN THE KEY, ADD IT TO THE CACHE AND PLACE IT
  # AT THE HEAD OF THE LIST
  # IF THE CACHE IS FULL, REMOVE THE LEAST RECENTLY USED ITEM BEFORE ADDING
  # THE NEW DATA TO THE CACHE
  def put(key, value)

  end
end

if __FILE__ == $PROGRAM_NAME
  # Don't forget to add your own tests!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
