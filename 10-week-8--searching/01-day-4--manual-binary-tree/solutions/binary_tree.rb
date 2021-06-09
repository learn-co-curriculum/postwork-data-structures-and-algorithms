class Node
  attr_accessor :value, :left, :right

  def initialize(value, left = nil, right = nil)
    @value = value
    @left = left
    @right = right
  end
end

# list = [1, 4, 7]
#      4
#  1       7
def one_to_seven
  left = Node.new(1)
  right = Node.new(7)

  Node.new(4, left, right)
end

# list = [10, 40, 45, 46, 50]
#        45
#    40      50
#  10      46
def ten_to_fifty
  tenNode = Node.new(10)
  fortyNode = Node.new(40, tenNode)
  fortySixNode = Node.new(46)
  fiftyNode = Node.new(50, fortySixNode)

  Node.new(45, fortyNode, fiftyNode)
end

# YOU COULD ALSO DO THIS (THERE ARE MORE WAYS STILL!)
# BUT WE GENERALLY DON'T WANT TO MAKE TREES LIKE THIS, YOU'LL FIND OUT WHY LATER
#   10
#     40
#       45
#         46
#           50
# def tenToFifty
#   fifty = Node.new(50)
#   fortySix = Node.new(46, nil, fifty)
#   fortyFive = Node.new(45, nil, fortySix)
#   forty = Node.new(40, nil, fortyFive)

#   Node.new(10, nil, forty)
# end

# list = [-20, -19, -17, -15, 0, 1, 2, 10]
#          -15
#    -19         2
#  -20  -17    0    10
#                1
def negative_to_positive
  nTwenty = Node.new(-20)
  nSeventeen = Node.new(-17)
  nNineteen = Node.new(-19, nTwenty, nSeventeen)
  one = Node.new(1)
  zero = Node.new(0, nil, one)
  ten = Node.new(10)
  two = Node.new(2, zero, ten)
  
  Node.new(-15, nNineteen, two)
end

if __FILE__ == $PROGRAM_NAME
  # Add your own tests if you want
end

# Please add your pseudocode to this file
# And a written explanation of your solution
