class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function levelOrderTraversal(root) {
  let queue = root !== null ? [root] : [];
  let result = [];

  while (queue.length) {
    const node = queue.shift();

    result.push(node);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return result.map(node => node.value);
}

if (require.main === module) {
  let root = new Node(1, new Node(2), new Node(3));
  // add your own tests in here
  console.log("Expecting: [1, 2, 3]");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = new Node(10, new Node(20, new Node(9), new Node(22)), new Node(30));

  console.log("Expecting: [10, 20, 30, 9, 22]");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = null;

  console.log("Expecting: []");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = new Node(10);
  
  console.log("Expecting: [10]");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = new Node(10, new Node(9, new Node(8, new Node(7, new Node(32)), new Node(6, null, new Node(33))), new Node(12, new Node(11), new Node(40))), new Node(11, new Node(20, new Node(4), new Node(90)), new Node(30, new Node(9), new Node(89, null, new Node(90, null, new Node(34))))));
  
  console.log("Expecting: [10, 9, 11, 8, 12, 20, 30, 7, 6, 11, 40, 4, 90, 9, 89, 32, 33, 90, 34]");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = new Node(10, null, new Node(11, null, new Node(12, null, new Node(12))));
  
  console.log("Expecting: [10, 11, 12, 12]");
  console.log(levelOrderTraversal(root));
}

module.exports = {
  Node,
  levelOrderTraversal
};

// Please add your pseudocode to this file
/****************************************************************************************** */
// if root is nil: return empty array
// else: initialize a queue with the root
// initialize an empty array to store result
//
// loop until the queue is empty:
//   store first node in queue in variable node
//   add node to result array
//   add node's left and right nodes to queue if not falsy, in that order  
//
// return result
/****************************************************************************************** */

// And a written explanation of your solution
/****************************************************************************************** */
// We can solve this problem by using a queue. Each time we process a node, we puts its left
// and right nodes into the queue for future processing. So starting at the root, we put it
// in the queue. We iterate over the queue: the node is added to a result array. If the node
// being processed has a left and/or right node, those are pushed onto the queue. We continue
// until the queue is empty. To return the values associated with the nodes in the result, we
// use map to return an array containing the values in the correct order.
/****************************************************************************************** */
