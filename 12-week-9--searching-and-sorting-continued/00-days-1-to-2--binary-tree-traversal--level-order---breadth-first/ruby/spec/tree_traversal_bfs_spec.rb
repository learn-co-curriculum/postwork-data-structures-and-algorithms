require "./tree_traversal_bfs"

RSpec.describe "level_order_traversal" do
  it "can handle an empty tree" do
    expect(level_order_traversal(nil)).to eq([])
  end

  it "can handle a tree that has only a root node" do
    expect(level_order_traversal(Node.new(5))).to eq([5])
  end

  it "can handle a tree with several nodes" do
    expect(level_order_traversal(Node.new(1, Node.new(2), Node.new(3)))).to eq([1, 2, 3])
    expect(level_order_traversal(Node.new(10, Node.new(20, Node.new(9), Node.new(22)), Node.new(30)))).to eq([10, 20, 30, 9, 22])
    expect(level_order_traversal(Node.new(10, 
      Node.new(9, 
        Node.new(8, 
          Node.new(7, 
            Node.new(32)), 
            Node.new(6, nil, 
              Node.new(33))), 
              Node.new(12, 
                Node.new(11), 
                Node.new(40))), 
                Node.new(11, 
                  Node.new(20, 
                    Node.new(4), 
                    Node.new(90)), 
                    Node.new(30, 
                      Node.new(9), 
                      Node.new(89, nil, 
                        Node.new(90, nil, 
                          Node.new(34)))))))).to eq([10, 9, 11, 8, 12, 20, 30, 7, 6, 11, 40, 4, 90, 9, 89, 32, 33, 90, 34])
  end

  it "can handle a one-sided tree" do
    expect(level_order_traversal(Node.new(10, nil, Node.new(11, nil, Node.new(12, nil, Node.new(12)))))).to eq([10, 11, 12, 12])
    expect(level_order_traversal(Node.new(1, Node.new(2, Node.new(3, Node.new(4)))))).to eq([1, 2, 3, 4])
  end
end