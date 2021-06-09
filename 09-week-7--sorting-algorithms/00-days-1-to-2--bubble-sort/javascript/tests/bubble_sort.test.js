const bubbleSort = require("../bubble_sort");

test("returns the provided empty Array when it's provided as an argument", () => {
  const input = [];

  expect(bubbleSort(input)).toBe(input);
  expect(bubbleSort(input)).toStrictEqual([]);
});

test("can handle an Array containing a single element", () => {
  const input = [4];

  expect(bubbleSort(input)).toBe(input);
  expect(bubbleSort(input)).toStrictEqual([4]);
});

test("can handle an Array containing two elements", () => {
  const input = [5, 2];

  expect(bubbleSort(input)).toBe(input);
  expect(bubbleSort(input)).toStrictEqual([2, 5]);
});

test("can handle an Array containing three elements", () => {
  const input = [5, 2, 1];

  expect(bubbleSort(input)).toBe(input);
  expect(bubbleSort(input)).toStrictEqual([1, 2, 5]);
});

test("can handle an Array containing many elements", () => {
  const input = [6, -2, 0, 8, 7, 8, 6, 0, 5, 1];

  expect(bubbleSort(input)).toBe(input);
  expect(bubbleSort(input)).toStrictEqual([-2, 0, 0, 1, 5, 6, 6, 7, 8, 8]);
});

test("can handle a sorted Array", () => {
  expect(bubbleSort([-10, 1, 2, 3, 4])).toStrictEqual([-10, 1, 2, 3, 4]);
});
