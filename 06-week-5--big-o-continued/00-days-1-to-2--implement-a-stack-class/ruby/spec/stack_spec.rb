require './stack.rb'

class Stack
  attr_accessor :stack
end

RSpec.describe 'Stack' do
  let(:stack) { Stack.new }

  context '#size' do
    it 'returns 0 when the stack is empty' do
      expect(stack.size).to eq(0)
    end

    it 'returns the correct size when items are in the stack' do
      stack.stack = [1, 2, 3]

      expect(stack.size).to eq(3)
    end
  end

  context '#isEmpty?' do
    it 'returns true when the stack is empty' do
      expect(stack.isEmpty?).to be true
    end

    it 'returns false when items are in the stack' do
      stack.stack = [1]

      expect(stack.isEmpty?).to be false
    end
  end

  context '#isFull?' do
    it 'returns false when the stack has less than 10 items' do
      expect(stack.isFull?).to be false
    end

    it 'returns true when the stack has 10 items' do
      stack.stack = [1,2,3,4,5,6,7,8,9,10]

      expect(stack.isFull?).to be true
    end
  end

  context '#peek' do
    it 'returns the last item on the stack without removing it' do
      stack.stack = [1, 2, 3]

      expect(stack.peek).to eq(3)
      expect(stack.size).to eq(3)
    end
  end

  context '#pop' do
    it 'returns the last item on the stack and removes it' do
      stack.stack = [1, 2, 3]

      expect(stack.pop).to eq(3)
      expect(stack.size).to eq(2)
    end
  end

  context '#push' do
    it 'pushes an item onto the stack if it\'s not full' do
      stack.push(0)

      expect(stack.size).to eq(1)
      expect(stack.peek).to eq(0)
    end

    it 'throws an exception if the stack is full' do
      stack.stack = [0,1,2,3,4,5,6,7,8,9]

      expect { stack.push(10) }.to raise_error
    end
  end

  context '#search' do
    it 'returns the distance between the top and the target element' do
      stack.stack = [1, 2, 3, 4, 5]

      expect(stack.search(5)).to eq(0)
      expect(stack.search(4)).to eq(1)
      expect(stack.search(1)).to eq(4)
    end

    it 'returns -1 when the target is not in the stack' do
      stack.stack = [1, 2, 3, 4, 5]

      expect(stack.search(7)).to eq(-1)
    end
  end

  context '#print' do
    it 'does not return the stack array itself' do
      expect(stack.print).to_not be(stack.stack)
    end
  end
end