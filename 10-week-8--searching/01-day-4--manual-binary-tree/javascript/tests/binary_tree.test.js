const { Node, oneToSeven, tenToFifty, negativeToPositive } = require("../binary_tree");

describe("Node", () => {
  const node = new Node(10);

  test("sets the value when a new Node is initialized", () => {
    expect(node.value).toBe(10);
  });

  test("sets the left and right node attributes to null when no nodes are provided", () => {
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
  });


  test("sets the left and right nodes attributes when they are provided", () => {
    const left = new Node(1);
    const right = new Node(10);
    const root = new Node(5, left, right);

    expect(root.left).toBe(left);
    expect(root.right).toBe(right);
  });
});
    
function bstToArray(root) {
  if (root === null) {
    return [];
  }

  const stack = [root];
  const sorted = [];

  while (stack.length) {
    const node = stack[stack.length - 1];

    if (node.left !== null) {
      stack.push(node.left);
      node.left = null;
      continue;
    }

    sorted.push(stack.pop().value);

    if (node.right !== null) {
      stack.push(node.right);
    }
  }

  return sorted;
}

describe("Manual BSTs", () => {
  test("oneToSeven() returns the root node of a valid BST", () => {
    expect(bstToArray(oneToSeven())).toEqual([1, 4, 7]);
  });

  test("tenToFifty() returns the root node of a valid BST", () => {
    expect(bstToArray(tenToFifty())).toEqual([10, 40, 45, 46, 50]);
  });

  test("negativeToPositive()", () => {
    expect(bstToArray(negativeToPositive())).toEqual([-20, -19, -17, -15, 0, 1, 2, 10]);
  });
});
