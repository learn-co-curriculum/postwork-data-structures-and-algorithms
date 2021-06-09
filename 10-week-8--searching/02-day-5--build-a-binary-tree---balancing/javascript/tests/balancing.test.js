const { threeToTwenty, tenToTwoHundred } = require("../../solutions/balancing");
const { bstToArray, isBalanced } = require("./validation_methods");

describe("balanced BSTs", () => {
  describe("threeToTwenty", () => {
    test("returns the root node of a valid BST", () => {
      expect(bstToArray(threeToTwenty())).toStrictEqual([3, 5, 6, 9, 10, 20]);
    });

    test("returns the root of a balanced BST", () => {
      expect(isBalanced(threeToTwenty())).toBe(true);
    });
  });

  describe("tenToTwoHundred", () => {
    test("returns the root node of a valid BST", () => {
      expect(bstToArray(tenToTwoHundred())).toStrictEqual([10, 11, 30, 100, 200]);
    });
      
    test("returns the root of a balanced BST", () => {
      expect(isBalanced(tenToTwoHundred())).toBe(true);
    });
  });
});
