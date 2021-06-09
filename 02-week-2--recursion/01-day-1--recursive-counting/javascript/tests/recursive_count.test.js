const recursiveCount = require('../recursive_count');

test('logs numbers 0 to 9', () => {
  console.log = jest.fn();
  recursiveCount();

  for (let i = 0; i < 10; ++i) {
    expect(console.log).toHaveBeenCalledWith(i);
  }
});

test('returns undefined', () => {
  expect(recursiveCount()).toBe(undefined);
});