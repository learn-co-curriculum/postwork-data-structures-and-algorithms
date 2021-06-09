class DoublyLinkedList
  attr_accessor :head

  def initialize(head = nil)
    @head = head
  end

  def iterate
    count = 0
    temp = @head

    until temp.nil?
      yield(temp, count)      
      temp = temp.next_node
      count += 1
    end

    @head
  end

  def print
    iterate { |node| puts node.value }
  end

  def find(target)
    iterate do |node|
      return node if node.value == target
    end

    nil
  end

  # MODIFY TO UPDATE PREV_NODE
  def add_first(node)
    node.next_node = @head
    @head.prev_node = node unless @head.nil?
    @head = node
  end

  # MODIFY TO UPDATE PREV_NODE
  def add_last(node)
    if @head.nil?
      @head = node
      return
    end

    iterate do |curr_node|
      if curr_node.next_node.nil?
        curr_node.next_node = node
        node.prev_node = curr_node
        return
      end
    end
  end

  # MODIFY TO UPDATE PREV_NODE
  def remove_first
    old_head = @head
    @head = @head.next_node unless @head.nil?
    @head.prev_node = nil unless @head.nil?
    old_head
  end

  def remove_last
    return remove_first if @head.nil? || @head.next_node.nil?

    iterate do |node|
      if node.next_node.next_node.nil?
        old_tail = node.next_node
        node.next_node = nil
        return old_tail
      end
    end
  end

  # MODIFY TO UPDATE PREV_NODE
  def replace(idx, node)
    if idx.zero?
      remove_first
      add_first(node)
      return node
    end

    iterate do |curr_node, count|
      if count == idx - 1
        node.next_node = curr_node.next_node.next_node
        curr_node.next_node = node
        node.prev_node = curr_node

        unless curr_node.next_node.next_node.nil?
          curr_node.next_node.next_node.prev_node = node
        end

        return node
      end
    end
  end

  # MODIFY TO UPDATE PREV_NODE
  def insert(idx, node)
    if idx.zero?
      add_first(node)
      return
    end

    iterate do |curr_node, count|
      if count == idx - 1
        old_next = curr_node.next_node
        curr_node.next_node = node
        node.next_node = old_next
        old_next.prev_node = node unless old_next.nil?
        node.prev_node = curr_node

        return
      end
    end
  end

  # MODIFY TO UPDATE PREV_NODE
  def remove(idx)
    if idx.zero?
      return remove_first
    end

    iterate do |node, count|
      if count == idx - 1
        old_node = node.next_node
        node.next_node = node.next_node.next_node
        node.next_node.prev_node = node unless node.next_node.nil?

        return old_node
      end
    end
  end

  def clear
    @head = nil
  end
end

class Node
  attr_accessor :value, :next_node, :prev_node

  def initialize(value = nil, next_node = nil, prev_node = nil)
    @value = value
    @next_node = next_node
    @prev_node = nil
  end
end

if __FILE__ == $PROGRAM_NAME
  node = Node.new('one')
  node.prev_node = Node.new('zero')

  puts "NODE TESTING PREV VALUES"
  puts "Node prev value is zero: #{node.prev_node.value}"
  puts "Node prev.prev is null: #{node.prev_node.prev_node}"
  puts "---------------------------------------------------------"

  node = Node.new('one')
  list = DoublyLinkedList.new(node)
  list.add_first(Node.new('zero'))

  puts "TEST PREV WHEN CALLING ADD FIRST"
  puts "Node prev value is zero: #{node.prev_node.value}"
  puts "Node prev.next value is one: #{node.prev_node.next_node.value}"
  puts "---------------------------------------------------------"

  last_node = Node.new('last')
  list.add_last(last_node)
  puts "TEST PREV WHEN CALLING ADD LAST"
  puts "Last node prev value is one: #{last_node.prev_node.value}"
  puts "---------------------------------------------------------"

  puts "TEST PREV WHEN CALLING REMOVE FIRST"
  list.remove_first
  puts "Head node's prev should be nil: #{list.head.prev_node}"
  puts "---------------------------------------------------------"

  # one -> last
  list.replace(0, Node.new('zero'))
  puts "TEST PREV WHEN REPLACING HEAD"
  puts "Head node's prev is null: #{list.head.prev_node}"

  # zero -> last
  list.replace(1, Node.new('one'))
  puts "TEST PREV WHEN REPLACING TAIL"
  puts "Tail node's prev is zero: #{list.head.next_node.prev_node.value}"

  head = Node.new('zero')
  one = Node.new('one')
  two = Node.new('two')
  head.next_node = one
  one.next_node = two
  one.prev_node = head
  two.prev_node = one
  list = DoublyLinkedList.new(head)

  # zero -> one -> two
  replacing = Node.new('replacing')
  list.replace(1, replacing)
  # zero -> replacing -> two
  puts "TEST PREV WHEN REPLACING MIDDLE NODE"
  puts "Middle node prev value is zero: #{replacing.prev_node.value}"
  puts "Last node prev value is replacing: #{two.prev_node.value}"
  puts "---------------------------------------------------------"

  # zero -> replacing -> two
  node = Node.new('insert')
  list.insert(0, node)
  # insert -> zero -> replacing -> two
  puts "TEST PREV WHEN INSERTING 0TH NODE"
  puts "Head node prev is null: #{list.head.prev_node}"
  puts "Head node next.prev value is insert: #{list.head.next_node.prev_node.value}"

  node = Node.new('at tail')
  list.insert(4, node)
  # insert -> zero -> replacing -> two -> at tail
  puts "TEST PREV WHEN INSERTING TAIL NODE"
  puts "Tail node prev is two: #{node.prev_node.value}"

  node = Node.new('in middle')
  list.insert(2, node)
  # insert -> zero -> in middle -> replacing -> two -> at tail
  puts "TEST PREV WHEN INSERTING IN MIDDLE"
  puts "Middle node prev value is zero: #{node.prev_node.value}"
  puts "Middle node next.prev is in middle: #{node.next_node.prev_node.value}"
  puts "---------------------------------------------------------"

  # insert -> zero -> in middle -> replacing -> two -> at tail
  list.remove(0)
  # zero -> in middle -> replacing -> two -> at tail
  puts "TEST PREV WHEN REMOVING 0TH NODE"
  puts "Head node's prev value is nil: #{list.head.prev_node}"

  list.remove(2)
  # zero -> in middle -> two -> at tail
  puts "TEST PREV WHEN REMOVING IN MIDDLE"
  puts "Node at index 2 prev's value is in middle: #{list.head.next_node.next_node.prev_node.value}"

  list.remove(3)
  # zero -> in middle -> two 
  puts "TEST PREV WHEN REMOVING TAIL"
  puts "Tail node's prev should still point to node with value in middle: #{list.head.next_node.next_node.prev_node.value}"
  puts "---------------------------------------------------------"
end

# Please add your pseudocode to this file
# And a written explanation of your solution
