require './queue.rb'

class Queue
  attr_accessor :queue
end

RSpec.describe 'Queue' do
  let(:queue) { Queue.new }

  context '#size' do
    it 'returns 0 when the queue is empty' do
      expect(queue.size).to eq(0)
    end

    it 'returns the correct size when items are in the queue' do
      queue.queue = [1, 2, 3]

      expect(queue.size).to eq(3)
    end
  end

  context '#isEmpty?' do
    it 'returns true when the queue is empty' do
      expect(queue.isEmpty?).to be true
    end

    it 'returns false when items are in the queue' do
      queue.queue = [1]

      expect(queue.isEmpty?).to be false
    end
  end

  context '#isFull?' do
    it 'returns false when the queue has less than 10 items' do
      expect(queue.isFull?).to be false
    end

    it 'returns true when the queue has 10 items' do
      queue.queue = [1,2,3,4,5,6,7,8,9,10]

      expect(queue.isFull?).to be true
    end
  end

  context '#peek' do
    it 'returns the frontmost item in the queue without removing it' do
      queue.queue = [1, 2, 3]

      expect(queue.peek).to eq(1)
      expect(queue.size).to eq(3)
    end
  end

  context '#dequeue' do
    it 'returns the first item in the queue and removes it' do
      queue.queue = [1, 2, 3]

      expect(queue.dequeue).to eq(1)
      expect(queue.size).to eq(2)
    end
  end

  context '#enqueue' do
    it 'pushes an item onto the queue if it\'s not full' do
      queue.queue = [1, 2, 3]
      queue.enqueue(0)

      expect(queue.size).to eq(4)
      expect(queue.peek).to eq(1)
    end

    it 'throws an exception if the queue is full' do
      queue.queue = [0,1,2,3,4,5,6,7,8,9]

      expect { queue.enqueue(10) }.to raise_error
    end
  end

  context '#search' do
    it 'returns the distance between the front and the target element' do
      queue.queue = [1, 2, 3, 4, 5]

      expect(queue.search(5)).to eq(4)
      expect(queue.search(4)).to eq(3)
      expect(queue.search(1)).to eq(0)
    end

    it 'returns -1 when the target is not in the queue' do
      queue.queue = [1, 2, 3, 4, 5]

      expect(queue.search(7)).to eq(-1)
    end
  end

  context '#print' do
    it 'does not return the queue array itself' do
      expect(queue.print).to_not be(queue.queue)
    end
  end
end