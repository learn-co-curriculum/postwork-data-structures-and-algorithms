require "./bubble_sort.rb"

RSpec.describe "bubble_sort" do
  it "returns the provided empty Array when it's provided as an argument" do
    input = []

    expect(bubble_sort(input)).to be(input)
  end

  it "returns an empty Array when the given an empty Array as an argument" do
    expect(bubble_sort([])).to eq([])
  end

  it "can handle an Array containing a single element" do
    input = [4]

    expect(bubble_sort(input)).to be(input)
    expect(bubble_sort(input)).to eq([4])
  end

  it "can handle an Array containing two elements" do
    input = [5, 2]

    expect(bubble_sort(input)).to be(input)
    expect(bubble_sort(input)).to eq([2, 5])
  end

  it "can handle an Array containing three elements" do
    input = [5, 2, 1]

    expect(bubble_sort(input)).to be(input)
    expect(bubble_sort(input)).to eq([1, 2, 5])
  end

  it "can handle an Array containing many elements" do
    input = [6, -2, 0, 8, 7, 8, 6, 0, 5, 1]

    expect(bubble_sort(input)).to be(input)
    expect(bubble_sort(input)).to eq([-2, 0, 0, 1, 5, 6, 6, 7, 8, 8])
  end

  it "can handle a sorted Array" do
    expect(bubble_sort([-10, 1, 2, 3, 4])).to eq([-10, 1, 2, 3, 4])
  end
end