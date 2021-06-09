const mergeSort = require("../merge_sort");

test("can sort an empty Array", () => {
  expect(mergeSort([])).toEqual([]);
});
    
test("can sort an Array with one element", () => {
  expect(mergeSort([2])).toEqual([2]);
});
    
test("can sort an Array with two elements", () => {
  expect(mergeSort([5, 3])).toEqual([3, 5]);
});

test("can sort an Array with three elements", () => {
  expect(mergeSort([10, -1, 5])).toEqual([-1, 5, 10]);
});
    
test("can sort a large Array with an even number of elements", () => {
  const arr = [90, 4, 5, -100, 5, 78, 3, 19, 1000, -900, 54, 34, 3, 5];

  expect(mergeSort(arr)).toEqual(arr.sort((a, b) => a - b));
});

test("can sort a large Array with an odd number of elements", () => {
  const arr = [90, 4, 5, -100, 5, 78, 19, 1000, -900, 54, 34, 3, 5];

  expect(mergeSort(arr)).toEqual(arr.sort((a, b) => a - b));
});

test("can handle an already sorted Array", () => {
  const arr = [-10, -5, 4, 6, 7];

  expect(mergeSort(arr)).toEqual(arr);
});
