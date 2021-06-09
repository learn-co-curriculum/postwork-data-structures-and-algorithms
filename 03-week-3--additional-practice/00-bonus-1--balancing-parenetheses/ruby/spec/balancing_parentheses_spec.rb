require './balancing_parentheses'

RSpec.describe '#balancing_parentheses' do
  it 'can balance parentheses when only one type of parenthesis is in the string' do
    expect(balancing_parentheses(')')).to eq(1)
    expect(balancing_parentheses('(')).to eq(1)
    expect(balancing_parentheses(')))')).to eq(3)
    expect(balancing_parentheses('(((')).to eq(3)
  end

  it 'accounts for strings that start with a closing parenthesis or end with an opening one' do
    expect(balancing_parentheses(')(')).to eq(2)
    expect(balancing_parentheses(')()')).to eq(1)
    expect(balancing_parentheses(')((((()))((())))()(()))(')).to eq(2)
  end

  it 'returns 0 when the parentheses are balanced' do
    expect(balancing_parentheses('(()())')).to eq(0)
    expect(balancing_parentheses('()')).to eq(0)
  end

  it 'returns the correct number when the string starts with an opening parenthesis and ends with a closing one' do
    expect(balancing_parentheses('()))')).to eq(2)
  end
end
