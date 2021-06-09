const { Node, findTarget } = require("../find_target");

describe("findTarget", () => {
  test("can handle an empty tree", () => {
    expect(findTarget(null, 5)).toBe(null);
  });

  test("can handle a tree with only a root node", () => {
    const root = new Node(5);

    expect(findTarget(root, 5)).toBe(root);
    expect(findTarget(root, 7)).toBe(null);
  });

  test("can find the target node in a small balanced tree", () => {
    const root = new Node(1, new Node(-1), new Node(2));

    expect(findTarget(root, 2)).toBe(root.right);
  });

  test("returns the correct result for unbalanced trees", () => {
    const root = new Node(10, new Node(9, new Node(8, new Node(7))));
    const root_two = new Node(1,null, new Node(2,null, new Node(3,null, new Node(4,null, new Node(5)))));

    expect(findTarget(root, 8)).toBe(root.left.left);
    expect(findTarget(root_two, 5)).toBe(root_two.right.right.right.right);
 });

 test("returns the correct result for a larger tree", () => {
   const root = new Node(10, new Node(7, new Node(6, new Node(4)), new Node(8)), new Node(14, new Node(11), new Node(18,null, new Node(20))))

    expect(findTarget(root, 20)).toBe(root.right.right.right);
    expect(findTarget(root, 5)).toBe(null);
  });
});
