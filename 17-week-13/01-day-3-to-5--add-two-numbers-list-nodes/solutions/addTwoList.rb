class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end

def add_two_numbers(l1, l2)
    n1, n2 = l1, l2
    
    current = answer = ListNode.new(nil)
    carry = 0
    
    while n1 || n2 || 0 < carry
        a = n1 ? n1.val : 0
        b = n2 ? n2.val : 0
        x = a + b + carry
        
        carry = x / 10
        x -= 10 if 0 < carry
        
        node = ListNode.new(x)
        current&.next = node
        current = node
        
        n1, n2 = n1&.next, n2&.next
    end 
    answer.next
end
  

if __FILE__ == $PROGRAM_NAME
puts "Expecting: 0"
l1 = ListNode.new(0)
l2 = ListNode.new(0)
puts "=>", add_two_numbers(l1,l2)

# Don't forget to add your own!
end
  
# More details here: https://leetcode.com/problems/add-two-numbers/solution/