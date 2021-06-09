require './find_first_duplicate'

RSpec.describe '#find_first_duplicate' do
  it 'can handle an empty array' do
    expect(find_first_duplicate([])).to eq(-1)
  end

  it 'can handle an array containing one element' do
    expect(find_first_duplicate([4])).to eq(-1)
  end

  it 'finds the first duplicate when there is only one duplicate' do
    expect(find_first_duplicate([2, 2])).to eq(2)
  end

  it 'finds the first duplicate in an Array containing multiple duplicates' do
    expect(find_first_duplicate([1, 2, 3, 3, 2, 1])).to eq(3)
  end
end