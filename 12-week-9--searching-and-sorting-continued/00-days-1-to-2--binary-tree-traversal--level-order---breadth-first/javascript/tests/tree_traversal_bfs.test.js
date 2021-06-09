const { Node, levelOrderTraversal } = require("../tree_traversal_bfs");

describe("levelOrderTraversal", () => {
  test("can handle an empty tree", () => {
    expect(levelOrderTraversal(null)).toEqual([]);
  });

  test("can handle a single node, e.g. just the root", () => {
    expect(levelOrderTraversal(new Node(5))).toEqual([5]);
  });

  test("can handle a tree with several nodes", () => {
    expect(levelOrderTraversal(new Node(1, new Node(2), new Node(3)))).toEqual([1, 2, 3]);
    expect(levelOrderTraversal(new Node(10, new Node(20, new Node(9), new Node(22)), new Node(30)))).toEqual([10, 20, 30, 9, 22]);
    expect(levelOrderTraversal(new Node(10, 
      new Node(9, 
        new Node(8, 
          new Node(7, 
            new Node(32)), 
            new Node(6, null, 
              new Node(33))), 
              new Node(12, 
                new Node(11), 
                new Node(40))), 
                new Node(11, 
                  new Node(20, 
                    new Node(4), 
                    new Node(90)), 
                    new Node(30, 
                      new Node(9), 
                      new Node(89, null, 
                        new Node(90, null, 
                          new Node(34)))))))).toEqual([10, 9, 11, 8, 12, 20, 30, 7, 6, 11, 40, 4, 90, 9, 89, 32, 33, 90, 34]);
  });

  test("can handle a one-sided tree", () => {
    expect(levelOrderTraversal(new Node(10, null, new Node(11, null, new Node(12, null, new Node(12)))))).toEqual([10, 11, 12, 12]);
    expect(levelOrderTraversal(new Node(1, new Node(2, new Node(3, new Node(4)))))).toEqual([1, 2, 3, 4]);
  });
});