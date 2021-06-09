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
  attr_accessor :value, :next_node, :prev_node

  def initialize(value = nil, next_node = nil)
    @value = value
    @next_node = next_node
  end
end

if __FILE__ == $PROGRAM_NAME
  # Don't forget to add your tests!
end


