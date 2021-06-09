const reverseString = require('../reverse_string');

test("can handle an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("can handle a single character", () => {
  expect(reverseString("a")).toBe("a");
}); 

test("can handle two characters", () => {
  expect(reverseString("ab")).toBe("ba");
});

test("can handle three characters", () => {
  expect(reverseString("cat")).toBe("tac");
});

test("can handle many characters", () => {
  expect(reverseString("sham-meow")).toBe("sham-meow".split("").reverse().join(""));
});
