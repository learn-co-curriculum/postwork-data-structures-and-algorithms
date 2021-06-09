class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Recursive solution
function treeTraversalInorder(root, result = []) {
  if (root === null) {
    return [];
  }

  treeTraversalInorder(root.left, result);
  result.push(root.value);
  treeTraversalInorder(root.right, result);

  return result;
}

// Iterative solution
// function treeTraversalInorder(root) {
//   const queue = root ? [root] : [];
//   const result = [];

//   while (queue.length > 0) {
//     const node = queue[0];

//     if (node.left && !node.done) {
//       queue.unshift(node.left);
//       node.done = true;
//       continue;
//     }

//     delete node.done;
//     result.push(node.value);
//     queue.shift();

//     if (node.right) {
//       queue.unshift(node.right);
//     }
//   }

//   return result;
// }

if (require.main === module) {
  // add your own tests in here
  let root = new Node(2, new Node(-10), new Node(20));
  console.log("Expecting: [-10, 2, 20]");
  console.log(treeTraversalInorder(root));

  console.log("");

  root = new Node(10, new Node(0, null, new Node(5)), new Node(20, null, new Node(30)));
  console.log("Expecting: [0, 5, 10, 20, 30] ");
  console.log(treeTraversalInorder(root));

  console.log("");

  root = new Node(1, null, new Node(3, new Node(2)));
  console.log("Expecting: [1, 2, 3]");
  console.log(treeTraversalInorder(root));

  console.log("");

  console.log("Expecting: []");
  console.log(treeTraversalInorder(null));

  console.log("");

  root = new Node(30, new Node(10, null, new Node(20)), new Node(50, new Node(40)));
  console.log("Expecting: [10, 20, 30, 40, 50]");
  console.log(treeTraversalInorder(root));

  console.log("");
}

module.exports = {
  Node,
  treeTraversalInorder
};

// Please add your pseudocode to this file (recursive)
/***************************************************************************
 * initialize result to empty array
 * 
 * function in_order(root):
 *  return empty array if root is falsy
 * 
 *  in_order(left side)
 *  push root value onto result
 *  in_order(right side)
 * 
 *  return result
 * *************************************************************************/

// Please add your pseudocode to this file (iterative)
/***************************************************************************
 * return empty array if root is falsy
 * initialize queue with array containing root
 * initialize result to empty array
 * 
 * while queue contains nodes:
 *  node = first node in queue
 * 
 *  if node has left node and not yet seen / done:
 *    add left node to beginning of queue
 *    add attribute done and set to true (to mark as visited)
 *    continue with loop
 * 
 *  remove done attribute from node
 *  add node value to end of result
 *  remove node from start of queue
 * 
 *  if node has right node:
 *    add right node to beginning of queue
 * 
 * return result
 *  *************************************************************************/

// And a written explanation of your solution (recursive + iterative)
/***************************************************************************
 * If we continuously go left from the root until there is no left node left
 * to visit, we will have traveled to the lowest possible value that branches
 * off of that node. Once we've done that we can push that value onto an array
 * and we can then start looking at the right nodes. We repeat this process of
 * always going as far to the left as possible before going right until there
 * are no nodes left to visit. For the iterative version, we added an attribute
 * to mark that we had already visited a node's left node to avoid an infinite 
 * loop. Otherwise, if we visited a node's left node, then processed that same
 * node again, we'd go left all over again in an endless loop. I'm sure there are
 * other ways to solve this iteratively, such as putting the node in a set, which
 * I did in the Ruby version, but this is how I did it to shake things up a bit.
 * *************************************************************************/

 // Big O for both solutions is O(n). Each node will be visited at least once.