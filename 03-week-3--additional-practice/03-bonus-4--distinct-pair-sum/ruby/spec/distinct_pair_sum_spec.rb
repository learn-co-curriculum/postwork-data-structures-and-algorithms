require './distinct_pair_sum'

def sort_array(arr, k)
  res = distinct_pair_sum(arr, k)
  res.map!(&:sort)
  res.sort!
end

RSpec.describe '#distinct_pair_sum' do
  it 'returns an empty array when there are no pairs that sum up to k' do
    expect(distinct_pair_sum([3, 4, 2, 1, 5, 2, 8, 2], 100)).to eq([])
    expect(distinct_pair_sum([], 100)).to eq([])
    expect(distinct_pair_sum([59], 100)).to eq([])
  end

  it 'only returns distinct pairs' do
    expect(sort_array([0, 1, 1, 2, 0, 1, 1], 2)).to eq([[0, 2], [1, 1]])
    expect(sort_array([3, 4, 2, 1, 5, 2, 8, 2], 10)).to eq([[2, 8]])
    expect(sort_array([59, 41], 100)).to eq([[41, 59]])
    expect(sort_array([1, 0, 0, 10, -10, 5, 4, 3, -3, -3], 0)).to eq([[-10, 10], [-3, 3], [0, 0]])
  end
end
