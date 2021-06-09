require './addTwoList'

RSpec.describe '#addTwoList' do

n1 = ListNode.new(3)
n2 = ListNode.new(4, n1)
l1 = ListNode.new(2, n2)

n3 = ListNode.new(4)
n4 = ListNode.new(6, n3)
l2 = ListNode.new(5, n4)

n5 = ListNode.new(8)
n6 = ListNode.new(0, n5)
result_1 = ListNode.new(7, n6)

  
p "results: #{add_two_numbers(l1,l2)}"

  it "Input: l1 = [2,4,3] & l2 = [5,6,4], Output: [7,0,8]" do
    expect(add_two_numbers(l1,l2).val).to eql(result_1.val)
    expect(add_two_numbers(l1,l2).next.val).to eql(result_1.next.val)
    expect(add_two_numbers(l1,l2).next.next.val).to eql(result_1.next.next.val)
  end
end