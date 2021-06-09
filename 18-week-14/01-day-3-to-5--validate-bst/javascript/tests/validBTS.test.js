const { Node , isValidBST } = require('../validBTS');

describe('example test cases', () => {
  // Convenience helper to construct a tree.
  const T = (v, l, r) => new Node(v, l, r);
  
  it('should validate the examples', () => {
    expect(isValidBST(T(2, T(1), T(3)))).toEqual(true);
    expect(isValidBST(T(5, T(1), T(4, T(3), T(6))))).toEqual(false);
  });
});