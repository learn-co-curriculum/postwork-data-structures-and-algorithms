const lengthOfLongestSubstring = require('../longSubString');

let s1 = "abcabcbb"
let s2 = "bbbbb"
let s3 = "pwwkew"
let s4 = ""


test('Input: s1 = "abcabcbb", Output: 3', () => {
  expect(lengthOfLongestSubstring(s1)).toEqual(3);
});

test('Input: s2 = "bbbbb", Output: 1', () => {
  expect(lengthOfLongestSubstring(s2)).toEqual(1);
});

test('Input: s3 = "pwwkew", Output: 3', () => {
  expect(lengthOfLongestSubstring(s3)).toEqual(3);
});

test('Input: s4 = "", Output: 0', () => {
  expect(lengthOfLongestSubstring(s4)).toEqual(0);
});