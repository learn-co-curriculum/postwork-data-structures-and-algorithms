class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findTarget(root, target) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  const root = new Node(1, new Node(-1), new Node(2));
  console.log("Expecting: Node with value 2");
  console.log(findTarget(root, 2));

  console.log("");

  console.log("Expecting: null");
  console.log(findTarget(root, 5));
}

module.exports = { findTarget, Node };

// Please add your pseudocode to this file
// And a written explanation of your solution
