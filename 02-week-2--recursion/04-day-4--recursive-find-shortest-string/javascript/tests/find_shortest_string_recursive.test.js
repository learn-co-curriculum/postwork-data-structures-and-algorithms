const findShortestStringRecursive = require('../find_shortest_string_recursive');

test('can handle an array containing one string', () => {
  expect(findShortestStringRecursive(['cat'])).toBe('cat');
});
    
test('returns the shortest string when there is only one', () => {
  expect(findShortestStringRecursive(['dogbaby', 'cat', 'jammy', 'hamtaro'])).toBe('cat');
});

test('returns the first occurrence of the shortest string when there are several', () => {
  expect(findShortestStringRecursive(['stuff', 'a', 'things', 'b', 'two'])).toBe('a');
});

test('returns the empty string', () => {
  expect(findShortestStringRecursive(['things', 'crabapple', '', 'stuff'])).toBe('');
});
