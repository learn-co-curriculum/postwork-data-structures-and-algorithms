const rotateArray = require('../rotate_array');

test('can handle k values from 1 up to the length of the array', () => {
  expect(rotateArray([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]);
  expect(rotateArray([1, 2, 3], 2)).toEqual([2, 3, 1]);
  expect(rotateArray([1, 2, 3], 3)).toEqual([1, 2, 3]);
});
    
test('can handle an empty array', () => {
  expect(rotateArray([], 7)).toEqual([]);
  expect(rotateArray([], 0)).toEqual([]);
});
    
test('can handle a k value of 0', () => {
  expect(rotateArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
});
    
test('can handle k values larger than the array length', () => {
  expect(rotateArray([1, 2, 3], 5)).toEqual([2, 3, 1]);
  expect(rotateArray([1, 2, 3], 6)).toEqual([1, 2, 3]);
  expect(rotateArray([1, 2, 3, 4], 41)).toEqual([4, 1, 2, 3]);
});
