require './recursive_count'

RSpec.describe '#recursive_count' do
  it 'outputs numbers 0 to 9' do
    expect { recursive_count }.to output("0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n").to_stdout 
  end

  it 'returns nil' do
    expect(recursive_count).to be_nil
  end
end