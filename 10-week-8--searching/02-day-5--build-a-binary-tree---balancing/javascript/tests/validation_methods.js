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

function isBalanced(root) {
  if (root === null) {
    return true;
  }

  const leftHeight = branchHeight(root.left);
  const rightHeight = branchHeight(root.right);

  return Math.abs(leftHeight - rightHeight) < 2;
}

function branchHeight(root) {
  let queue = root === null ? [] : [root];
  let count = 0;

  while(queue.length) {
    ++count;

    queue = queue.reduce((accum, node) => {
      if (node.left) {
        accum.push(node.left);
      }

      if (node.right) {
        accum.push(node.right);
      }

      return accum;
    }, []);
  }

  return count;
}

module.exports = {
  bstToArray,
  isBalanced
};