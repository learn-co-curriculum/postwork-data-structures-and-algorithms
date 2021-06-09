require './rotate_array'

RSpec.describe '#rotate_array' do
  it 'can handle k values from 1 up to the length of the array' do
    expect(rotate_array([1, 2, 3, 4], 1)).to eq([4, 1, 2, 3])
    expect(rotate_array([1, 2, 3], 2)).to eq([2, 3, 1])
    expect(rotate_array([1, 2, 3], 3)).to eq([1, 2, 3])
  end

  it 'can handle an empty array' do
    expect(rotate_array([], 7)).to eq([])
    expect(rotate_array([], 0)).to eq([])
  end

  it 'can handle a k value of 0' do
    expect(rotate_array([1, 2, 3], 0)).to eq([1, 2, 3])
  end

  it 'can handle k values larger than the array length' do
    expect(rotate_array([1, 2, 3], 5)).to eq([2, 3, 1])
    expect(rotate_array([1, 2, 3], 6)).to eq([1, 2, 3])
    expect(rotate_array([1, 2, 3, 4], 41)).to eq([4, 1, 2, 3])
  end
end
