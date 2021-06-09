class Node
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def is_valid_bst(root)
    # type your code here
end

if __FILE__ == $PROGRAM_NAME

    puts "Expecting: true"
    def T(v,l,r)
        return Node.new(v, l, r)
    end
    puts "=>", is_valid_bst(T(2, T(1, nil, nil), T(3, nil, nil)))

# Don't forget to add your own!
end
  
# Please add your pseudocode to this file
# And a written explanation of your solution