const distinctPairSum = require('../distinct_pair_sum');

function sortArray(arr, k) {
  let res = distinctPairSum(arr, k);
  res = res.map(arr => arr.sort((a, b) => a - b));
  return res.sort((a, b) => a[0] - b[0]);
}

test('returns an empty array when there are no pairs that sum up to k', () => {
  expect(distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 100)).toEqual([]);
  expect(distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 100).length).toBe(0);
  expect(distinctPairSum([], 100).length).toBe(0);
  expect(distinctPairSum([59], 100).length).toBe(0);
});

test('only returns distinct pairs', () => {
  expect(sortArray([0, 1, 1, 2, 0, 1, 1], 2)).toEqual([[0, 2], [1, 1]]);
  expect(sortArray([3, 4, 2, 1, 5, 2, 8, 2], 10)).toEqual([[2, 8]]);
  expect(sortArray([59, 41], 100)).toEqual([[41, 59]]);
  expect(sortArray([1, 0, 0, 10, -10, 5, 4, 3, -3, -3], 0)).toEqual([[-10, 10], [-3, 3], [0, 0]]);
});
