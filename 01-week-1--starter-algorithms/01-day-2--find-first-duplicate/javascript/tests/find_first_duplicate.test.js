const findFirstDuplicate = require('../find_first_duplicate');

test('can handle an empty array', () => {
  expect(findFirstDuplicate([])).toBe(-1);
}); 

test('can handle an array containing one element', () => {
  expect(findFirstDuplicate([4])).toBe(-1);
});

test('finds the first duplicate when there is only one duplicate', () => {
  expect(findFirstDuplicate([2, 2])).toBe(2);
});

test('finds the first duplicate in an Array containing multiple duplicates', () => {
  expect(findFirstDuplicate([1, 2, 3, 3, 2, 1])).toBe(3);
});
