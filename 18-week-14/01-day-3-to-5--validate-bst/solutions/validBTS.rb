class Node
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

def isValid(root, low, high)
    !root ||
    low < root.val &&
    root.val < high &&
    isValid(root.left, low, root.val) &&
    isValid(root.right, root.val, high)
end

def is_valid_bst(root)
    return isValid(root, -Float::INFINITY, Float::INFINITY)
end

if __FILE__ == $PROGRAM_NAME

    puts "Expecting: true"
    def T(v,l,r)
        return Node.new(v, l, r)
    end
    puts "=>", is_valid_bst(T(2, T(1, nil, nil), T(3, nil, nil)))

end
