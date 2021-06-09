const balancingParentheses = require('../balancing_parentheses');

test('can balance parentheses when only one type of parenthesis is in the string', () => {
  expect(balancingParentheses(')')).toBe(1);
  expect(balancingParentheses('(')).toBe(1);
  expect(balancingParentheses(')))')).toBe(3);
  expect(balancingParentheses('(((')).toBe(3);
});

test('accounts for strings that start with a closing parenthesis or end with an opening one', () => {
  expect(balancingParentheses(')(')).toBe(2);
  expect(balancingParentheses(')()')).toBe(1);
  expect(balancingParentheses(')((((()))((())))()(()))(')).toBe(2);
});

test('returns 0 when the parentheses are balanced', () => {
  expect(balancingParentheses('(()())')).toBe(0);
  expect(balancingParentheses('()')).toBe(0);
});


test('returns the correct number when the string starts with an opening parenthesis and ends with a closing one', () => {
  expect(balancingParentheses('()))')).toBe(2);
});
 