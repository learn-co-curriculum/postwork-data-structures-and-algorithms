require "./doubly_linked_list"

RSpec.describe "Node" do
  let(:node) { Node.new("hi", "there") }

  context "#initialize with arguments" do
    it "sets an attribute called value to the argument" do
      expect(node.value).to eq("hi")
    end

    it "sets an attribute called next_node to the argument" do
      expect(node.next_node).to eq("there")
    end
  end

  context "#initialize without arguments" do
    it "sets an attribute called value to nil" do
      expect(Node.new.value).to eq(nil)
    end

    it "sets an attribute called next_node to nil" do
      expect(Node.new.next_node).to eq(nil)
    end
  end

  context "setting and getting prev_node" do
    it "sets prev_node to nil by default" do
      expect(Node.new('hi').prev_node).to be_nil
    end

    it "gets and sets the prev_node" do
      node = Node.new('two')
      node.prev_node = Node.new('one')

      expect(node.prev_node.value).to eq('one')
    end
  end
end

RSpec.describe "LinkedList" do
  let(:linked_list) { DoublyLinkedList.new(Node.new("one", Node.new("two", Node.new("three", Node.new("four"))))) }
  let(:empty_list) { DoublyLinkedList.new }
  let(:one_item_list) { DoublyLinkedList.new(Node.new("just one")) }

  context "#initialize" do
    it "sets head to nil if no argument is provided" do
      expect(empty_list.head).to eq(nil)
    end

    it "sets head to the argument if an argument is provided" do
      head = Node.new("hi")
      list = DoublyLinkedList.new(head)

      expect(list.head).to eq(head)
    end
  end

  context "#iterate" do
    it "calls the provided callback on every list node and provides the node as an argument to the callback" do
      values = []
      linked_list.iterate { |node| values << node }

      expect(values.length).to eq(4)
      expect(values.last).to be_a_kind_of(Node)
    end

    it "can handle an empty list" do
      values = []
      empty_list.iterate { |node| values << node }

      expect(values.length).to eq(0)
    end

    it "can handle a list with only a head" do
      values = []
      one_item_list.iterate { |node| values << node }

      expect(values.length).to eq(1)
      expect(values.last).to be_a_kind_of(Node)
    end
  end

  context "#print" do
    it "prints nothing at all when the list is empty" do
      expect { empty_list.print }.to_not output.to_stdout
    end

    it "prints a single line for a list with one node" do
      expect { one_item_list.print }.to output("just one\n").to_stdout
    end

    it "prints all nodes" do
      expect { linked_list.print }.to output("one\ntwo\nthree\nfour\n").to_stdout
    end
  end

  context "#find" do
    it "returns nil when the list is empty" do
      expect(empty_list.find(4)).to be_nil
    end

    it "returns the correct Node when a Node with that value is in the list" do
      expect(linked_list.find("two")).to be(linked_list.head.next_node)
    end

    it "returns nil when the value is not in the list" do
      expect(linked_list.find("nope")).to be_nil
    end
  end

  context "#add_first" do
    it "adds the given Node to the beginning of the list without removing any" do
      old_head = one_item_list.head
      node = Node.new("I'm new")
      one_item_list.add_first(node)

      expect(one_item_list.head).to be(node)
      expect(one_item_list.head.next_node).to be(old_head)
    end

    it "adds the given node to an empty list" do
      node = Node.new("I'm new")
      empty_list.add_first(node)

      expect(empty_list.head).to be(node)
      expect(empty_list.head.next_node).to be_nil
    end
  end

  context "#add_last" do
    it "adds the given Node to the end of the list without removing any" do
      old_tail = one_item_list.head
      node = Node.new("I'm new")
      one_item_list.add_last(node)

      expect(one_item_list.head).to be(old_tail)
      expect(one_item_list.head.next_node).to be(node)
    end

    it "adds the given node to an empty list" do
      node = Node.new("I'm new")
      empty_list.add_last(node)

      expect(empty_list.head).to be(node)
      expect(empty_list.head.next_node).to be_nil
    end
  end

  context "#remove_first" do
    it "removes and returns the head of the list" do
      old_head = linked_list.head

      expect(linked_list.remove_first).to be(old_head)
    end

    it "updates the head to the correct Node" do
      old_head = linked_list.head
      linked_list.remove_first

      expect(linked_list.head).to be(old_head.next_node)
      expect(linked_list.head.next_node).to be(old_head.next_node.next_node)
    end

    it "does not produce an error when called on an empty list" do
      expect { empty_list.remove_first }.to_not raise_exception
    end
  end

  context "#remove_last" do 
    it "removes and returns the tail of the list" do
      old_tail = linked_list.head.next_node.next_node.next_node

      expect(linked_list.remove_last).to be(old_tail)
      expect(linked_list.head.next_node.next_node.next_node).to be_nil
    end

    it "makes the node before the old tail the new tail" do
      new_tail = linked_list.head.next_node.next_node

      expect(linked_list.head.next_node.next_node).to be(new_tail)
    end

    it "does not produce an error when called on an empty list" do
      expect { empty_list.remove_last }.to_not raise_exception
    end
  end

  context "#replace" do
    it "returns the inserted node" do
      node = Node.new("replacing")

      expect(linked_list.replace(0, node)).to be(node)
    end

    it "replaces the correct nodes at the correct indexes" do
      node_zero = Node.new("replace at 0")
      node_one = Node.new("replace at 1")
      node_two = Node.new("replace at 2")
      node_three = Node.new("replace at 3")

      [node_zero, node_one, node_two, node_three].each_with_index { |node, idx| linked_list.replace(idx, node) }

      expect(linked_list.head).to be(node_zero)
      expect(linked_list.head.next_node).to be(node_one)
      expect(linked_list.head.next_node.next_node).to be(node_two)
      expect(linked_list.head.next_node.next_node.next_node).to be(node_three)
      expect(linked_list.head.next_node.next_node.next_node.next_node).to be_nil
    end
  end

  context "#insert" do
    it "can insert a node at the beginning of the list" do
      old_head = one_item_list.head
      node = Node.new('hi')
      one_item_list.insert(0, node)

      expect(one_item_list.head).to be(node)
      expect(one_item_list.head.next_node).to be(old_head)
      expect(one_item_list.head.next_node.next_node).to be_nil
    end

    it "can insert a node at the very end of the list (making a new tail)" do
      old_head = one_item_list.head
      node = Node.new('hi')
      one_item_list.insert(1, node)

      expect(one_item_list.head).to be(old_head)
      expect(one_item_list.head.next_node).to be(node)
      expect(one_item_list.head.next_node.next_node).to be_nil
    end

    it "can insert a node in the middle of a list" do
      node = Node.new('hi')
      linked_list.insert(2, node)

      expect { linked_list.print }.to output("one\ntwo\nhi\nthree\nfour\n").to_stdout
    end
  end

  context "#remove" do
    it "returns the removed node" do
      to_remove = linked_list.head.next_node.next_node.next_node

      expect(linked_list.remove(3)).to be(to_remove)
    end

    it "removes the correct node" do
      removed = linked_list.remove(1)

      found = false
      linked_list.iterate { |node| found = true if node == removed }

      expect(found).to be false
    end

    it "keeps the list intact when a node is removed" do
      linked_list.remove(2)

      expect { linked_list.print }.to output("one\ntwo\nfour\n").to_stdout
    end
  end

  context "#clear" do
    it "empties the list" do
      linked_list.clear

      expect(linked_list.head).to be_nil
    end
  end
end

RSpec.describe "updating prev_node appropriately" do
  let(:node) { Node.new('one') }
  let(:list) { DoublyLinkedList.new(node) }
  let(:head) { Node.new('one') }
  let(:tail) { Node.new('two') }
  let(:two_list) do 
    list = DoublyLinkedList.new(head)
    list.add_last(tail)
    list
  end

  context "#add_first" do
    it "updates the former head's previous node to the node being added" do
      list.add_first(Node.new('zero'))

      expect(list.head.next_node).to be(node)
      expect(node.prev_node.value).to eq('zero')
    end
  end

  context "#add_last" do
    it "updates the former head's previous node to the node being added" do
      last_node = Node.new('two')
      list.add_last(last_node)

      expect(last_node.prev_node).to be(list.head)
    end
  end

  context "#remove_first" do
    it "updates the new head's prev_node to nil" do
      two_list.remove_first

      expect(two_list.head.prev_node).to be_nil
    end
  end

  context "#replace" do
    it "is nil when the head is replaced" do
      two_list.replace(0, Node.new('new one'))

      expect(two_list.head.prev_node).to be_nil
    end

    it "sets the tail's prev_node when the tail is replaced" do
      two_list.replace(1, Node.new('new one'))

      expect(two_list.head.next_node.prev_node.value).to eq('one')
    end

    it "sets the middle node's prev_node when it is replaced" do
      two_list.add_first(Node.new('zero'))
      two_list.replace(1, Node.new('special'))

      # zero -> special -> two
      expect(two_list.head.next_node.prev_node.value).to eq('zero')
    end

    it "sets the next node's prev_node when a node replaced" do
      two_list.add_first(Node.new('zero'))
      two_list.replace(1, Node.new('special'))

      # zero -> special -> two
      expect(two_list.head.next_node.next_node.prev_node.value).to eq('special')
    end
  end

  context "#insert" do
    it "sets prev_node correctly when a node is inserted at index 0" do
      two_list.insert(0, Node.new('zero'))

      expect(two_list.head.prev_node).to be_nil
      expect(two_list.head.next_node.prev_node.value).to eq('zero')
    end

    it "sets prev_node correctly when a node is inserted as the new tail" do
      two_list.insert(2, Node.new('tail'))

      expect(two_list.head.next_node.next_node.prev_node.value).to eq('two')
    end

    it "sets prev_node correctly when a node is inserted in the middle" do
      new_node =  Node.new('1.5')
      two_list.insert(1, new_node)

      expect(two_list.head.next_node.prev_node).to be(head)
      expect(two_list.head.next_node.next_node.prev_node).to be(new_node)
    end
  end

  context "#remove" do
    it "sets the new head's prev_node to nil when removing the original head" do
      two_list.remove(0)

      expect(two_list.head.prev_node).to be_nil
    end

    it "sets the next node's prev_node correctly when removing a middle node" do
      two_list.add_first(Node.new('zero'))
      # zero -> one -> two
      two_list.remove(1)
      # zero -> two

      expect(two_list.head.next_node.prev_node.value).to eq('zero')
    end

    it "leaves the prev_node alone when removing the tail" do
      two_list.remove(1)

      expect(two_list.head.prev_node).to be_nil
    end
  end
end
