require './fibonacci'

RSpec.describe '#fibonacci' do
  fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811]

  10.times do |n|
    it "outputs the correct number in the sequence at index #{n}" do
      expect(fibonacci(n)).to eq(fibo[n])
    end
  end

  it "outputs the correct number at index 28" do
    expect(fibonacci(28)).to eq(fibo[28])
  end
end