require './selection_sort'

RSpec.describe '#selection_sort' do
  it 'can handle an empty array' do
    expect(selection_sort([])).to eq([])
  end

  it 'can sort one element' do
    expect(selection_sort([5])).to eq([5])
  end

  it 'can sort two elements' do
    expect(selection_sort([3, 1])).to eq([1, 3])
  end

  it 'can sort several elements' do
    expect(selection_sort([10, 4, 3, 2, 1, 5])).to eq([1, 2, 3, 4, 5, 10])
  end

  it 'can sort negative and positive values' do
    expect(selection_sort([-1, -2, 4, 2])).to eq([-2, -1, 2, 4])
  end

  it 'can sort an array containing repeating values' do
    expect(selection_sort([1, 4, 2, 1, 2, 4, 20, -2])).to eq([1, 4, 2, 1, 2, 4, 20, -2].sort)
  end
end