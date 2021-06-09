const consecutiveSubstrings = require('../consecutive_substrings');

test('returns an empty array when the input string is empty', () => {
  expect(consecutiveSubstrings('').length).toBe(0);
});

test('returns an array containing one string when the input is one character', () => {
  expect(consecutiveSubstrings('a')).toEqual(['a']);
});
    
test('can handle many letters', () => {
  expect(consecutiveSubstrings('ab')).toEqual(['a', 'ab', 'b']);
  expect(consecutiveSubstrings('abc')).toEqual(['a', 'ab', 'abc', 'b', 'bc', 'c']);
});
