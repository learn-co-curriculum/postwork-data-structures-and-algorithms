class Node
  attr_accessor :value, :left, :right

  def initialize(value, left = nil, right = nil)
    @value = value
    @left = left
    @right = right
  end
end

# list = [3, 5, 6, 9, 10, 20]
#           6
#       5       10
#     3       9   20
def three_to_twenty
  three = Node.new(3)
  five = Node.new(5, three)
  nine = Node.new(9)
  twenty = Node.new(20)
  ten = Node.new(10, nine, twenty)

  Node.new(6, five, ten)
end

# list = [10, 11, 30, 100, 200]
#           30
#       11    100
#     10        200
def ten_to_two_hundred
  ten = Node.new(10)
  eleven = Node.new(11, ten)
  two_hundred = Node.new(200)
  hundred = Node.new(100, nil, two_hundred)

  Node.new(30, eleven, hundred)
end

if __FILE__ == $PROGRAM_NAME
  # Add tests if you need them
end

# Please add your pseudocode to this file
# And a written explanation of your solution
