require './my_set'

RSpec.describe 'MySet' do
  let(:empty_set) { MySet.new }
  let(:data_set) { MySet.new('hello') }

  context '#initialize(iterator = nil)' do
    it 'raises an exception if the argument is not nothing, an array, or a string' do
      expect { MySet.new(1) }.to raise_exception
    end

    it 'populates @data with keys when given an Array or String' do
      array_set = MySet.new([1, 2, 1, 3])
      string_set = MySet.new('hello')

      expect(array_set.data.keys.sort).to eq([1, 2, 3].sort)
      expect(string_set.data.keys.sort).to eq('helo'.chars.sort)
    end
  end

  context '#size' do
    it 'returns the number of items in the set' do
      expect(empty_set.size).to eq(0)
      expect(data_set.size).to eq(4)
    end
  end

  context '#add(item)' do
    it 'adds the item to the set' do
      empty_set.add('cat')
      expect(empty_set.data['cat']).to eq(true)
    end

    it 'returns the instance of MySet' do
      expect(empty_set.add('cat')).to eq(empty_set)
    end
  end

  context '#has(item)' do
    it 'returns true if the item is in the set' do
      expect(data_set.has('h')).to be true
    end

    it 'returns false if the item is not in the set' do
      expect(data_set.has('z')).to be false
    end
  end

  context '#delete(item)' do
    it 'returns true upon successful deletion' do
      expect(data_set.delete('l')).to be true
    end
    
    it 'returns false if the item could not be deleted' do
      expect(data_set.delete('z')).to be false
    end
  end

  context '#entries' do
    it 'returns an array of all of the unique keys in data' do
      expect(data_set.entries.sort).to eq('helo'.chars.sort)
      expect(empty_set.entries).to eq([])
    end
  end
end
