class LinkedList
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

  def add_first(node)
    node.next_node = @head
    @head = node
  end

  def add_last(node)
    if @head.nil?
      @head = node
      return
    end

    iterate do |curr_node|
      if curr_node.next_node.nil?
        curr_node.next_node = node
        return
      end
    end
  end

  def remove_first
    old_head = @head
    @head = @head.next_node unless @head.nil?
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
        return node
      end
    end
  end

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
        return
      end
    end
  end

  def remove(idx)
    if idx.zero?
      return remove_first
    end

    iterate do |node, count|
      if count == idx - 1
        old_node = node.next_node
        node.next_node = node.next_node.next_node
        return old_node
      end
    end
  end

  def clear
    @head = nil
  end
end

class Node
  attr_accessor :value, :next_node

  def initialize(value = nil, next_node = nil)
    @value = value
    @next_node = next_node
  end
end

if __FILE__ == $PROGRAM_NAME
  head = Node.new('one', Node.new('two', Node.new('three', Node.new('four'))))
  list = LinkedList.new(head)
  empty_list = LinkedList.new

  puts "Print one to four"
  list.print
  puts "-----------------------------"

  puts "Print empty list"
  empty_list.print
  puts "-----------------------------"

  puts "Find four"
  puts "#{list.find('four').value}"
  puts "Find non-existent value"
  puts "Nothing: #{list.find(50)}"
  puts "-----------------------------"

  puts "Find four in empty list"
  puts "#{empty_list.find('four')}"
  puts "-----------------------------"

  puts "Add zero as head"
  list.add_first(Node.new('zero'))
  list.print
  puts "-----------------------------"

  puts "Add zero as head to empty list"
  empty_list.add_first(Node.new('zero'))
  empty_list.print
  empty_list.head = nil
  puts "-----------------------------"

  puts "Add five as tail"
  list.add_last(Node.new('five'))
  list.print
  puts "-----------------------------"

  puts "Add five as tail to empty list"
  empty_list.add_last(Node.new('five'))
  empty_list.print
  empty_list.head = nil
  puts "-----------------------------"

  puts "Remove first node zero and return it"
  puts "#{list.remove_first.value} was removed"
  list.print
  puts "-----------------------------"

  puts "Remove first node from an empty list"
  puts "#{empty_list.remove_first} was removed"
  empty_list.print
  puts "-----------------------------"

  puts "Remove last node five and return it"
  puts "#{list.remove_last.value} was removed"
  list.print
  puts "-----------------------------"

  puts "Remove last node from empty list and return it"
  puts "#{empty_list.remove_last} was removed"
  empty_list.print
  puts "-----------------------------"

  puts "Replace node at index and return inserted node"
  puts "replace middle two with 2: #{list.replace(1, Node.new('2')).value}"
  list.print
  puts "replace zeroth one with 1: #{list.replace(0, Node.new('1')).value}"
  list.print
  puts "replace tail four with 4: #{list.replace(3, Node.new('4')).value}"
  list.print
  puts "replace middle three with 3: #{list.replace(2, Node.new('3')).value}"
  list.print
  puts "-----------------------------"

  puts "Insert node at index"
  puts "Insert at 0"
  list.insert(0, Node.new('zero'))
  list.print
  list.remove_first

  puts "Insert at 2"
  list.insert(2, Node.new('two'))
  list.print

  puts "Insert at 4"
  list.insert(4, Node.new('four'))
  list.print

  puts "Insert at 6"
  list.insert(6, Node.new('six'))
  list.print
  list.remove_last
  puts "-----------------------------"

  head = Node.new('one', Node.new('two', Node.new('three', Node.new('four'))))
  list = LinkedList.new(head)

  puts "Remove the node at the index and return it"
  puts "Remove two: #{list.remove(1).value}"
  puts "Remove tail four: #{list.remove(2).value}"
  puts "Remove three: #{list.remove(1).value}"
  puts "Remove one: #{list.remove(0).value}"
  list.print
  puts "-----------------------------"

  puts "Clear a list"
  head = Node.new('one', Node.new('two', Node.new('three', Node.new('four'))))
  list = LinkedList.new(head)
  list.clear
  list.print
end

# Please add your pseudocode to this file
# And a written explanation of your solution
