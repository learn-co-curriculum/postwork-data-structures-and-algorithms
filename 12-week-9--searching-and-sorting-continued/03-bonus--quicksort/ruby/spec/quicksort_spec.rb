require "./quicksort"

RSpec.describe "quicksort" do
  it "returns the same array that was passed in" do
    arr_one = []
    arr_two = [1, 2, 3, 4]

    expect(quicksort(arr_one)).to be(arr_one)
    expect(quicksort(arr_two)).to be(arr_two)
  end

  it "returns an empty array when passed an empty array" do
    expect(quicksort([])).to eq([])
  end

  it "can sort an array with a single element" do
    expect(quicksort([2])).to eq([2])
  end

  it "can sort an array with two elements" do
    expect(quicksort([2, 1])).to eq([1, 2])
  end

  it "can sort an array with three elements" do
    expect(quicksort([2, 1, 3])).to eq([1, 2, 3])
  end

  it "can sort an array with more than three elements" do
    expect(quicksort([4, 2, 1, 3])).to eq([1, 2, 3, 4])
    expect(quicksort([4, 2, 6, 5, 1, 3])).to eq([1, 2, 3, 4, 5, 6])
  end

  it "can sort a sorted array" do
    expect(quicksort([1, 2, 3, 4, 5, 6])).to eq([1, 2, 3, 4, 5, 6])
  end

  it "can sort a reverse sorted array" do
    expect(quicksort([6, 5, 4, 3, 2, 1])).to eq([1, 2, 3, 4, 5, 6])
  end

  it "can sort an array with many elements" do
    arr = []
    1000.times { arr << rand * 1000}

    expect(quicksort(arr)).to eq(arr.sort)
  end
end