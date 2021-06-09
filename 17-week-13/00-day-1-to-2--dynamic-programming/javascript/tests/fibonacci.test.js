const fibonacci = require('../fibonacci');

const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811];

for (let i = 0; i < 10; ++i) {
  test(`outputs the correct number in the sequence at index ${i}`, () => {
    expect(fibonacci(i)).toBe(fibo[i]);
  });
}

test('outputs the correct number in the sequence at index 28', () => {
  expect(fibonacci(28)).toBe(fibo[28]);
});