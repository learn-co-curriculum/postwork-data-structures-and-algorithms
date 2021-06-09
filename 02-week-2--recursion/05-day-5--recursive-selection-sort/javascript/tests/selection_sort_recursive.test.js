const selectionSortRecursive = require('../selection_sort_recursive');

test('can handle an empty array', () => {
  expect(selectionSortRecursive([])).toEqual([]);
});

test('can sort one element', () => {
  expect(selectionSortRecursive([5])).toEqual([5]);
});

test('can sort two elements', () => {
  expect(selectionSortRecursive([3, 1])).toEqual([1, 3]);
});

test('can sort several elements', () => {
  expect(selectionSortRecursive([10, 4, 3, 2, 1, 5])).toEqual([1, 2, 3, 4, 5, 10]);
});
   
test('can sort negative and positive values', () => {
  expect(selectionSortRecursive([-1, -2, 4, 2])).toEqual([-2, -1, 2, 4]);
});

test('can sort an array containing repeating values', () => {
  expect(selectionSortRecursive([1, 4, 2, 1, 2, 4, 20, -2])).toEqual([1, 4, 2, 1, 2, 4, 20, -2].sort((a, b) => a - b));
});

