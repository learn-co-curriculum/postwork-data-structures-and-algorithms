require "./find_target"

RSpec.describe "find_target" do
  it "can handle an empty tree" do
    expect(find_target(nil, 5)).to be nil
  end

  it "can handle a tree with only a root node" do
    root = Node.new(5)

    expect(find_target(root, 5)).to be(root)
    expect(find_target(root, 7)).to be nil
  end

  it "can find the target node in a small balanced tree" do
    root = Node.new(1, Node.new(-1), Node.new(2))

    expect(find_target(root, 2)).to be root.right
  end

  it "returns the correct result for unbalanced trees" do
    root = Node.new(10, Node.new(9, Node.new(8, Node.new(7))))
    root_two = Node.new(1, nil, Node.new(2, nil, Node.new(3, nil, Node.new(4, nil, Node.new(5)))))

    expect(find_target(root, 8)).to be root.left.left
    expect(find_target(root_two, 5)).to be root_two.right.right.right.right
  end

  it "returns the correct result for a larger tree" do
    root = Node.new(10, Node.new(7, Node.new(6, Node.new(4)), Node.new(8)), Node.new(14, Node.new(11), Node.new(18, nil, Node.new(20))))

    expect(find_target(root, 20)).to be root.right.right.right
    expect(find_target(root, 5)).to be nil
  end
end