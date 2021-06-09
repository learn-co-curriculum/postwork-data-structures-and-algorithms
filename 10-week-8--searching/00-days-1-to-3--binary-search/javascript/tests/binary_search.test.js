const { binarySearch, binarySearchIndex} = require("../../solutions/binary_search");

describe("binarySearch", () => {
  test("can handle an empty input list", () => {
    expect(binarySearch([], 10)).toBe(false);
  });

  test("can handle a list with one item", () => {
    expect(binarySearch([10], 10)).toBe(true);
    expect(binarySearch([9], 10)).toBe(false);
  });

  test("can handle a list with two items", () => {
    expect(binarySearch([1, 5], 5)).toBe(true);
    expect(binarySearch([1, 5], 10)).toBe(false);
  });

  test("can find a value on the left edge of a long list", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 1)).toBe(true);
  });

  test("can find a value on the right edge of a long list", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12)).toBe(true);
  });

  test("can find a value somewhere outside the middle in a long list", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 10)).toBe(true);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3)).toBe(true);
  });

  test("returns false when the item isn't in a long list", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 100)).toBe(false);
  });
});


describe("binarySearchIndex", () => {
  test("can handle an empty input list", () => {
    expect(binarySearchIndex([], 10)).toBe(-1);
  });

  test("can handle a list with one item", () => {
    expect(binarySearchIndex([10], 10)).toBe(0);
    expect(binarySearchIndex([9], 10)).toBe(-1);
  });

  test("can handle a list with two items", () => {
    expect(binarySearchIndex([1, 5], 5)).toBe(1);
    expect(binarySearchIndex([1, 5], 10)).toBe(-1);
  });

  test("can find a value on the left edge of a long list", () => {
    expect(binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 1)).toBe(0);
  });

  test("can find a value on the right edge of a long list", () => {
    expect(binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 12)).toBe(11);
  });

  test("can find a value somewhere outside the middle in a long list", () => {
    expect(binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 10)).toBe(9);
    expect(binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3)).toBe(2);
  });

  test("returns -1 when the item isn't in a long list", () => {
    expect(binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 100)).toBe(-1);
  });
});
