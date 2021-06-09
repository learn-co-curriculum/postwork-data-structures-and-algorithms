const findShortestString = require('../find_shortest_string');

test('can handle an array containing one string', () => {
  expect(findShortestString(['cat'])).toBe('cat');
});
    
test('returns the shortest string when there is only one', () => {
  expect(findShortestString(['dogbaby', 'cat', 'jammy', 'hamtaro'])).toBe('cat');
});

test('returns the first occurrence of the shortest string when there are several', () => {
  expect(findShortestString(['stuff', 'a', 'things', 'b', 'two'])).toBe('a');
});

test('returns the empty string', () => {
  expect(findShortestString(['things', 'crabapple', '', 'stuff'])).toBe('');
});
