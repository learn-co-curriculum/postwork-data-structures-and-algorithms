require "./binary_tree"

describe "Node" do
  let(:node) { Node.new(10) }

  it "sets the value when a new Node is initialized" do
    expect(node.value).to eq(10)
  end

  it "sets the left and right node attributes to nil when no nodes are provided" do
    expect(node.left).to be_nil
    expect(node.right).to be_nil
  end

  it "sets the left and right nodes attributes when they are provided" do
    left = Node.new(1)
    right = Node.new(10)
    root = Node.new(5, left, right)

    expect(root.left).to be(left)
    expect(root.right).to be(right)
  end
end

def bst_to_array(root)
  if (root == nil)
    return []
  end

  stack = [root]
  sorted = []

  while stack.length > 0
    node = stack.last

    if (node.left != nil)
      stack.push(node.left)
      node.left = nil
      next
    end

    sorted.push(stack.pop().value)

    if (node.right != nil) 
      stack.push(node.right)
    end
  end

  sorted
end

describe "Manual BSTs" do
  describe "one_to_seven" do
    it "returns the root node of a valid BST" do
      expect(bst_to_array(one_to_seven)).to eq([1, 4, 7])
    end
  end

  describe "ten_to_fifty" do
    it "returns the root node of a valid BST" do
      expect(bst_to_array(ten_to_fifty)).to eq([10, 40, 45, 46, 50])
    end
  end

  describe "negative_to_positive" do
    it "returns the root node of a valid BST" do
      expect(bst_to_array(negative_to_positive)).to eq([-20, -19, -17, -15, 0, 1, 2, 10])
    end
  end
end
