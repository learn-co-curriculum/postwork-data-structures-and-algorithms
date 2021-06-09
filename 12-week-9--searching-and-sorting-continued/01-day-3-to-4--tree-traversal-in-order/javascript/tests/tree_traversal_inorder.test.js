const { Node, treeTraversalInorder } = require("../tree_traversal_inorder");

describe("treeTraversalInorder", () => {
  test("can handle an empty tree", () => {
    expect(treeTraversalInorder(null)).toEqual([]);
  });

  test("can handle a tree with a single root node", () => {
    expect(treeTraversalInorder(new Node(5))).toEqual([5]);
  });

  test("can handle small balanced trees", () => {
    const root = new Node(2, new Node(-10), new Node(20));
    const rootTwo = new Node(10, new Node(0, null, new Node(5)), new Node(20, null, new Node(30)));

    expect(treeTraversalInorder(root)).toEqual([-10, 2, 20]);
    expect(treeTraversalInorder(rootTwo)).toEqual([0, 5, 10, 20, 30]);
  });

  test("can handle unbalanced trees", () => {
    const root = new Node(0, null, new Node(1, null, new Node(2, null, new Node(3, null, new Node(4)))));
    const rootTwo = new Node(10, new Node(9, new Node(8, new Node(7, new Node(6, new Node(5))))));

    expect(treeTraversalInorder(root)).toEqual([0, 1, 2, 3, 4]);
    expect(treeTraversalInorder(rootTwo)).toEqual([5, 6, 7, 8, 9, 10]);
  });

  test("can handle a larger tree", () => {
    const root = new Node(30, new Node(10, null, new Node(20, null, new Node(25, new Node(24)))), new Node(50, new Node(40, new Node(39)), new Node(55, new Node(54), new Node(56, null, new Node(60)))));

    expect(treeTraversalInorder(root)).toEqual([10, 20, 24, 25, 30, 39, 40, 50, 54, 55, 56, 60]);
  });
});
