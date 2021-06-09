require './recursive_search'

RSpec.describe '#recursive_search' do
  it 'returns false when given an empty array' do
    expect(recursive_search([], 7)).to be false
  end

  it 'returns true when the target is in the array' do
    expect(recursive_search([7], 7)).to be true
    expect(recursive_search([1, 2, 3], 2)).to be true
    expect(recursive_search([1, 2, 3], 3)).to be true
  end

  it 'returns false when the target is not in the array' do
    expect(recursive_search([3], 7)).to be false
    expect(recursive_search([1, 2, 3], 5)).to be false
  end
end