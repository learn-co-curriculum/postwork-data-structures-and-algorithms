require "./merge_sort.rb"

RSpec.describe "merge_sort" do
  it "can sort an empty Array" do
    expect(merge_sort([])).to eq([])
  end

  it "can sort an Array with one element" do
    expect(merge_sort([2])).to eq([2])
  end

  it "can sort an Array with two elements" do
    expect(merge_sort([5, 3])).to eq([3, 5])
  end

  it "can sort an Array with three elements" do
    expect(merge_sort([10, -1, 5])).to eq([-1, 5, 10])
  end

  it "can sort a large Array with an even number of elements" do
    arr = [90, 4, 5, -100, 5, 78, 3, 19, 1000, -900, 54, 34, 3, 5]

    expect(merge_sort(arr)).to eq(arr.sort)
  end

  it "can sort a large Array with an odd number of elements" do
    arr = [90, 4, 5, -100, 5, 78, 19, 1000, -900, 54, 34, 3, 5]

    expect(merge_sort(arr)).to eq(arr.sort)
  end

  it "can handle an already sorted Array" do
    arr = [-10, -5, 4, 6, 7]

    expect(merge_sort(arr)).to eq(arr)
  end
end