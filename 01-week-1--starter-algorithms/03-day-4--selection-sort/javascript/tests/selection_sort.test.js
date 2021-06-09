const selectionSort = require('../selection_sort');

test('can handle an empty array', () => {
  expect(selectionSort([])).toEqual([]);
});

test('can sort one element', () => {
  expect(selectionSort([5])).toEqual([5]);
});

test('can sort two elements', () => {
  expect(selectionSort([3, 1])).toEqual([1, 3]);
});

test('can sort several elements', () => {
  expect(selectionSort([10, 4, 3, 2, 1, 5])).toEqual([1, 2, 3, 4, 5, 10]);
});
   
test('can sort negative and positive values', () => {
  expect(selectionSort([-1, -2, 4, 2])).toEqual([-2, -1, 2, 4]);
});

test('can sort an array containing repeating values', () => {
  expect(selectionSort([1, 4, 2, 1, 2, 4, 20, -2])).toEqual([1, 4, 2, 1, 2, 4, 20, -2].sort((a, b) => a - b));
});

