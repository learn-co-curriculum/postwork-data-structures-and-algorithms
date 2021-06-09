const quicksort = require("../quicksort");

describe("quicksort", () => {
  it("returns the same array that was passed in", () => {
    const arrOne = [];
    const arrTwo = [1, 2, 3, 4];

    expect(quicksort(arrOne)).toBe(arrOne);
    expect(quicksort(arrTwo)).toBe(arrTwo);
  });
    
  it("returns an empty array when passed an empty array", () => {
    expect(quicksort([])).toEqual([]);
  });

  it("can sort an array with a single element", () => {
    expect(quicksort([2])).toEqual([2]);
  });

  it("can sort an array with two elements", () => {
    expect(quicksort([2, 1])).toEqual([1, 2]);
  });

  it("can sort an array with three elements", () => {
    expect(quicksort([2, 1, 3])).toEqual([1, 2, 3]);
  });

  it("can sort an array with more than three elements", () => {
    expect(quicksort([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);
    expect(quicksort([4, 2, 6, 5, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("can sort a sorted array", () => {
    expect(quicksort([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("can sort a reverse sorted array", () => {
    expect(quicksort([6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("can sort an array with many elements", () => {
    const arr = [];
    for (let i = 0; i < 1000; ++i) {
      arr.push(Math.random() * 1000);
    }

    expect(quicksort(arr)).toEqual(arr.sort((a, b) => a - b));
  });
});
