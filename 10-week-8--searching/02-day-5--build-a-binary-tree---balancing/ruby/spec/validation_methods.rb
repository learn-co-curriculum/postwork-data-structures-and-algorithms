class Validator
  def self.bst_to_array(root)
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

  def self.balanced?(root)
    return true if root.nil?
    
    left_height = branch_height(root.left)
    right_height = branch_height(root.right)

    (left_height - right_height).abs < 2
  end

  def self.branch_height(root)
    queue = root.nil? ? [] : [root]
    count = 0

    until queue.empty?
      count += 1

      queue = queue.reduce([]) do |accum, node|
        accum << node.left if node.left
        accum << node.right if node.right
        accum
      end
    end

    count
  end
end


