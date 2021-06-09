require "./tree_traversal_inorder"

RSpec.describe "tree_traversal_inorder" do
  it "can handle an empty tree" do
    expect(tree_traversal_inorder(nil)).to eq([])
  end

  it "can handle a tree with a single root node" do
    expect(tree_traversal_inorder(Node.new(5))).to eq([5])
  end

  it "can handle small balanced trees" do
    root = Node.new(2, Node.new(-10), Node.new(20))
    root_two = Node.new(10, Node.new(0, nil, Node.new(5)), Node.new(20, nil, Node.new(30)))

    expect(tree_traversal_inorder(root)).to eq([-10, 2, 20])
    expect(tree_traversal_inorder(root_two)).to eq([0, 5, 10, 20, 30])
  end

  it "can handle unbalanced trees" do
    root = Node.new(0, nil, Node.new(1, nil, Node.new(2, nil, Node.new(3, nil, Node.new(4)))))
    root_two = Node.new(10, Node.new(9, Node.new(8, Node.new(7, Node.new(6, Node.new(5))))))

    expect(tree_traversal_inorder(root)).to eq([0, 1, 2, 3, 4])
    expect(tree_traversal_inorder(root_two)).to eq([5, 6, 7, 8, 9, 10])
  end

  it "can handle a larger tree" do
    root = Node.new(30, Node.new(10, nil, Node.new(20, nil, Node.new(25, Node.new(24)))), Node.new(50, Node.new(40, Node.new(39)), Node.new(55, Node.new(54), Node.new(56, nil, Node.new(60)))))

    expect(tree_traversal_inorder(root)).to eq([10, 20, 24, 25, 30, 39, 40, 50, 54, 55, 56, 60])
  end
end