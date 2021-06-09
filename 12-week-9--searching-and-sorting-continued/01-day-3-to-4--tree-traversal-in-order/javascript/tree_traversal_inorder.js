class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function treeTraversalInorder(root) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  let root = new Node(2, new Node(-10), new Node(20));
  console.log("Expecting: [-10, 2, 20]");
  console.log(treeTraversalInorder(root));

  console.log("");

  root = new Node(10, new Node(0, null, new Node(5)), new Node(20, null, new Node(30)));
  console.log("Expecting: [0, 5, 10, 20, 30] ");
  console.log(treeTraversalInorder(root));
}

module.exports = {
  Node,
  treeTraversalInorder
};

// Please add your pseudocode to this file
// And a written explanation of your solution
