require './longSubString'

RSpec.describe '#length_of_longest_substring' do

s1 = "abcabcbb"
s2 = "bbbbb"
s3 = "pwwkew"
s4 = ""

p "results: #{length_of_longest_substring(s1)}"

  it "Input: s1 = abcabcbb, Output: 3" do
    expect(length_of_longest_substring(s1)).to eql(3)
  end

p "results: #{length_of_longest_substring(s2)}"

  it "Input: s2 = bbbbb, Output: 1" do
    expect(length_of_longest_substring(s2)).to eql(1)
  end

p "results: #{length_of_longest_substring(s3)}"

  it "Input: s3 = pwwkew, Output: 3" do
    expect(length_of_longest_substring(s3)).to eql(3)
  end


p "results: #{length_of_longest_substring(s4)}"

  it "Input: s4 = "", Output: 0" do
    expect(length_of_longest_substring(s4)).to eql(0)
  end
end