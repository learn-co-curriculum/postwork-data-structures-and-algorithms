require './find_shortest_string_recursive'

RSpec.describe '#find_shortest_string' do
  it 'can handle an array containing one string' do
    expect(find_shortest_string_recursive(['cat'])).to eq('cat')
  end

  it 'returns the shortest string when there is only one' do
    expect(find_shortest_string_recursive(['dogbaby', 'cat', 'jammy', 'hamtaro'])).to eq('cat')
  end

  it 'returns the first occurrence of the shortest string when there are several' do
    expect(find_shortest_string_recursive(['stuff', 'a', 'things', 'b', 'two'])).to eq('a')
  end

  it 'returns the empty string' do
    expect(find_shortest_string_recursive(['things', 'crabapple', '', 'stuff'])).to eq('')
  end
end
