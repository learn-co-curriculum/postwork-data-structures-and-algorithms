require './consecutive_substrings'

RSpec.describe '#consecutive_substrings' do
  it 'returns an empty array when the input string is empty' do
    expect(consecutive_substrings('')).to eq([])
  end

  it 'returns an array containing one string when the input is one character' do
    expect(consecutive_substrings('a')).to eq(['a'])
  end

  it 'can handle many letters' do
    expect(consecutive_substrings('ab')).to eq(['a', 'ab', 'b'])
    expect(consecutive_substrings('abc')).to eq(['a', 'ab', 'abc', 'b', 'bc', 'c'])
  end
end
