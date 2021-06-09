class LinkedList
  attr_accessor :head
  attr_reader :size, :tail

  def initialize(head = nil)
    @head = head
    @tail = head
    @size = 0

    set_size_and_tail
  end

  def set_size_and_tail
    @size = 0

    iterate do |node|
      @tail = node
      update_size('+')
    end
  end

  def update_size(operation)
    operation === '+' ? @size += 1 : @size -= 1
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
    if @head.nil?
      @tail = node
    end

    node.next_node = @head
    @head = node

    update_size('+')
  end

  def add_last(node)
    if @head.nil?
      add_first(node)
      return
    end

    @tail.next_node = node
    @tail = node
    update_size('+')

    # if @head.nil?
    #   @head = node
    # end

    # iterate do |curr_node|
    #   if curr_node.next_node.nil?
    #     curr_node.next_node = node
    #     return
    #   end
    # end
  end

  def remove_first
    old_head = @head

    unless @head.nil?
      @head = @head.next_node
      update_size('-')
    end
    
    if @head.nil?
      @tail = nil
    end

    old_head
  end

  def remove_last
    return remove_first if @head.nil? || @head.next_node.nil?

    update_size('-')

    iterate do |node|
      if node.next_node.next_node.nil?
        old_tail = node.next_node
        node.next_node = nil
        @tail = node
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

        @tail = node if node.next_node.nil?

        return node
      end
    end
  end

  def insert(idx, node)
    if idx.zero?
      add_first(node)
      return
    end

    update_size('+')

    iterate do |curr_node, count|
      if count == idx - 1
        old_next = curr_node.next_node
        curr_node.next_node = node
        node.next_node = old_next

        @tail = node if node.next_node.nil?

        return
      end
    end
  end

  def remove(idx)
    return remove_first if idx.zero?

    update_size('-')

    iterate do |node, count|
      if count == idx - 1
        old_node = node.next_node
        node.next_node = node.next_node.next_node

        @tail = node if node.next_node.nil?

        return old_node
      end
    end
  end

  def clear
    @head = nil
    @tail = nil
    @size = 0
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
  one_item_list = LinkedList.new(Node.new('just one'))
  
  puts("CHECK FOR CORRECT TAIL ON INIT");
  puts("Should be 'four': #{list.tail.value}");
  puts("Should be 'null': #{empty_list.tail}");
  puts("Should be 'just one': #{one_item_list.tail.value}");
  puts("---------------------------------------------------");

  puts("CHECK FOR CORRECT TAIL ON ADD FIRST");
  list.add_first(Node.new('beans'))
  empty_list.add_first(Node.new('beans'))
  one_item_list.add_first(Node.new('beans'))
  puts("Should be 'four': #{list.tail.value}")
  puts("Should be 'beans': #{empty_list.tail.value}")
  puts("Should be 'just one': #{one_item_list.tail.value}")
  [list, empty_list, one_item_list].each { |l| l.remove_first }
  puts("---------------------------------------------------")

  puts("CHECK FOR CORRECT TAIL ON ADD LAST")
  list.add_last(Node.new('beans'))
  empty_list.add_last(Node.new('beans'))
  one_item_list.add_last(Node.new('beans'))
  puts("Should be 'beans': #{list.tail.value}")
  puts("Should be 'beans': #{empty_list.tail.value}")
  puts("Should be 'beans': #{one_item_list.tail.value}")
  [list, empty_list, one_item_list].each do |l|
    l.remove_last
    l.set_size_and_tail
  end
  puts("---------------------------------------------------")

  puts("CHECK FOR CORRECT TAIL ON REMOVE FIRST")
  removed = list.remove_first
  removed_again = one_item_list.remove_first
  empty_list.remove_first
  puts("Should be 'four': #{list.tail.value}")
  puts("Should be 'null': #{empty_list.tail}")
  puts("Should be 'null': #{one_item_list.tail}")
  list.add_first(removed)
  one_item_list.add_first(removed_again)
  puts("---------------------------------------------------")

  puts("CHECK FOR CORRECT TAIL ON REMOVE LAST")
  removed = list.remove_last
  removed_again = one_item_list.remove_last
  empty_list.remove_last
  puts("Should be 'three': #{list.tail.value}")
  puts("Should be 'null': #{empty_list.tail}")
  puts("Should be 'null': #{one_item_list.tail}")
  list.add_last(removed)
  one_item_list.add_last(removed_again)
  puts("---------------------------------------------------")

  puts("CHECK FOR CORRECT TAIL ON REPLACE")
  node_two = Node.new('two')
  node_one = Node.new('one', node_two)
  replace_list = LinkedList.new(node_one)

  replace_list.replace(0, Node.new('hi'))
  puts("Should be two: #{replace_list.tail.value}")
  replace_list.replace(1, Node.new('bye'))
  puts("Should be bye: #{replace_list.tail.value}")
  puts("---------------------------------------------------")

  puts("CHECK FOR CORRECT TAIL ON INSERT")
  node_two = Node.new('two')
  node_one = Node.new('one', node_two)
  insert_list = LinkedList.new(node_one)

  insert_list.insert(0, Node.new('hi'))
  # hi -> one -> two
  puts("Should be two: #{insert_list.tail.value}")
  insert_list.insert(1, Node.new('bye'))
  # hi -> bye -> one -> two
  puts("Should be two: #{insert_list.tail.value}")
  insert_list.insert(4, Node.new('last'))
  # hi -> bye -> one -> two -> last
  puts("Should be last: #{insert_list.tail.value}")
  puts("---------------------------------------------------")

  puts("CHECK FOR CORRECT TAIL ON REMOVE")
  # one -> two -> three -> four
  list.remove(1)
  # one -> three -> four
  puts("Should be four: #{list.tail.value}")
  list.remove(2)
  # one -> three
  puts("Should be three: #{list.tail.value}")
  list.insert(1, Node.new('two'))
  list.add_last(Node.new('four'))
  puts("---------------------------------------------------")

  puts("CHECK FOR CORRECT TAIL ON CLEAR")
  list.clear
  puts("Should be null: #{list.tail}")
  head = Node.new('one', Node.new('two', Node.new('three', Node.new('four'))))
  list = LinkedList.new(head)
  puts("---------------------------------------------------")

  puts("CHECKING SIZE")
  puts("New empty list should be 0: #{LinkedList.new.size}")
  puts("New list with one Node should be 1: #{LinkedList.new(Node.new('hi')).size}")
  puts("New list with 3 nodes should be 3: #{LinkedList.new(Node.new('hi', Node.new('bye', Node.new('what')))).size}")
  list.add_first(Node.new('s'))
  puts("On addFirst should be 5: #{list.size}")
  list.add_last(Node.new('b'))
  puts("On addLast should be 6: #{list.size}")
  list.remove_first
  puts("On removeFirst should be 5: #{list.size}")
  list.remove_last
  puts("On removeLast should be 4: #{list.size}")
  list.insert(1, Node.new('stuff'))
  puts("On insert should be 5: #{list.size}")
  list.remove(1)
  puts("On remove should be 4: #{list.size}")
  list.clear
  puts("On clear should be 0: #{list.size}")
end

