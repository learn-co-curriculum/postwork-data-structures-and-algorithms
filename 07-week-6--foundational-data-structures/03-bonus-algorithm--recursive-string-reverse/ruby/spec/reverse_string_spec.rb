require './reverse_string'

RSpec.describe '#reverse_string' do 
  it "can handle an empty string" do
    expect(reverse_string('')).to eq('')
  end

  it "can handle a single character" do
    expect(reverse_string('a')).to eq('a')
  end

  it "can handle two characters" do
    expect(reverse_string('ab')).to eq('ba')
  end

  it "can handle three characters" do
    expect(reverse_string('cat')).to eq('tac')
  end

  it "can handle many characters" do
    expect(reverse_string('sham-meow')).to eq('sham-meow'.reverse)
  end
end