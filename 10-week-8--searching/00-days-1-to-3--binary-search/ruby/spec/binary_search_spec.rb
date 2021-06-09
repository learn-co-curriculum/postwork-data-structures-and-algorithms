require "../solutions/binary_search.rb"

RSpec.describe "binary_search" do
  it "can handle an empty input list" do
    expect(binary_search([], 10)).to be false
  end

  it "can handle a list with one item" do
    expect(binary_search([10], 10)).to be true
    expect(binary_search([9], 10)).to be false
  end

  it "can handle a list with two items" do
    expect(binary_search([1, 5], 5)).to be true
    expect(binary_search([1, 5], 10)).to be false
  end

  it "can find a value on the left edge of a long list" do
    expect(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 1)).to be true
  end

  it "can find a value on the right edge of a long list" do
    expect(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12)).to be true
  end

  it "can find a value somewhere outside the middle in a long list" do
    expect(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 10)).to be true
    expect(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3)).to be true
  end

  it "returns false when the item isn't in a long list" do
    expect(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 100)).to be false
  end
end

RSpec.describe "binary_search_index" do
  it "can handle an empty input list" do
    expect(binary_search_index([], 10)).to eq(-1)
  end

  it "can handle a list with one item" do
    expect(binary_search_index([10], 10)).to eq(0)
    expect(binary_search_index([9], 10)).to eq(-1)
  end

  it "can handle a list with two items" do
    expect(binary_search_index([1, 5], 5)).to eq(1)
    expect(binary_search_index([1, 5], 10)).to eq(-1)
  end

  it "can find a value on the left edge of a long list" do
    expect(binary_search_index([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 1)).to eq(0)
  end

  it "can find a value on the right edge of a long list" do
    expect(binary_search_index([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12)).to eq(11)
  end

  it "can find a value somewhere outside the middle in a long list" do
    expect(binary_search_index([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 10)).to eq(9)
    expect(binary_search_index([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3)).to eq(2)
  end

  it "returns -1 when the item isn't in a long list" do
    expect(binary_search_index([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 100)).to eq(-1)
  end
end