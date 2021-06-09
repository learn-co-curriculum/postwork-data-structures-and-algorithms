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
    if @head.nil?
      @head = node
      @tail = node
      return
    end

    @head.prev_node = node
    node.next_node = @head
    @head = node
    @head.prev_node = nil
  end

  # REMOVE THE TAIL NODE FROM THE LIST
  # AND RETURN IT
  def remove_tail
    return @tail if @tail.nil?

    old_tail = @tail
    @tail = @tail.prev_node

    unless @tail.nil?
      @tail.next_node = nil
    else
      @head = @tail
    end

    old_tail
  end

  # REMOVE THE GIVEN NODE FROM THE LIST
  # AND THEN RETURN IT
  def remove_node(node) 
    case node
    when @tail
      remove_tail
    when @head
      # this is a good candidate for a helper method!
      @head = node.next_node
      @head.prev_node = nil unless @head.nil?
      @tail = @head if @head.nil? || @head.next_node.nil?
    else
      node.prev_node.next_node = node.next_node unless node.prev_node.nil?
      node.next_node.prev_node = node.prev_node unless node.next_node.nil?
    end
    
    node
  end

  # MOVE THE GIVEN NODE FROM ITS LOCATION TO THE HEAD
  # OF THE LIST
  def move_node_to_head(node) 
    removed = remove_node(node)

    add_head(removed)
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
    found = @hash[key]

    if found
      @list.move_node_to_head(found)
      return found
    end

    -1
  end

  # ADD THE GIVEN KEY AND VALUE TO THE CACHE
  # IF THE CACHE ALREADY CONTAINS THE KEY, UPDATE ITS VALUE AND MOVE IT TO 
  # THE HEAD OF THE LIST
  # IF THE CACHE DOESN'T CONTAIN THE KEY, ADD IT TO THE CACHE AND PLACE IT
  # AT THE HEAD OF THE LIST
  # IF THE CACHE IS FULL, REMOVE THE LEAST RECENTLY USED ITEM BEFORE ADDING
  # THE NEW DATA TO THE CACHE
  def put(key, value)
    found = @hash[key]

    if found
      found.data = value
      @list.move_node_to_head(found)
      return
    end

    if @limit === @size
      tail = @list.remove_tail
      @hash.delete(tail.key)
      @size -= 1
    end

    add_entry(key, value)
  end

  private

  def add_entry(key, value)
    node = Node.new(value, key)
    @list.add_head(node)
    @hash[key] = node
    @size += 1
  end
end

if __FILE__ == $PROGRAM_NAME
  # Don't forget to add your own tests!
  list = DoublyLinkedList.new
  list.add_head(Node.new(1))

  puts "List has same node as head and tail"
  puts list.head === list.tail
  puts list.head.data === 1

  list.remove_node(list.head)

  puts "List is empty"
  puts list.head === nil && list.tail === nil

  list.add_head(Node.new(1))
  list.add_head(Node.new(2))

  puts "List head is 2 and tail is 1"
  puts list.head.data === 2 && list.tail.data === 1

  list.remove_tail
  puts "Can remove tail"
  puts list.head === list.tail && list.head.data === 2

  list.move_node_to_head(list.head)
  puts "Can move head to head"
  puts list.head === list.tail && list.head.data === 2

  list.add_head(Node.new(3))
  list.move_node_to_head(list.tail)
  puts "Can move tail to head"
  puts list.head.data === 2 && list.tail.data === 3

  list.add_head(Node.new(1))
  list.move_node_to_head(list.head.next_node)
  puts "Can move middle to head"
  puts list.head.data === 2 && list.tail.data === 3
end

# Please add your pseudocode to this file
# And a written explanation of your solution
