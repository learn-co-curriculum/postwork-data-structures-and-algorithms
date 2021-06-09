const recursiveSearch = require('../recursive_search');

test('returns false when given an empty array', () => {
  expect(recursiveSearch([], 7)).toBe(false);
});

test('returns true when the target is in the array', () => {
  expect(recursiveSearch([7], 7)).toBe(true);
  expect(recursiveSearch([1, 2, 3], 2)).toBe(true);
  expect(recursiveSearch([1, 2, 3], 3)).toBe(true);
});

test('returns false when the target is not in the array', () => {
  expect(recursiveSearch([3], 7)).toBe(false);
  expect(recursiveSearch([1, 2, 3], 5)).toBe(false);
});

