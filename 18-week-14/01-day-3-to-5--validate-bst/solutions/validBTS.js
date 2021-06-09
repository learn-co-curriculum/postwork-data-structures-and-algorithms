class Node {
  constructor(val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const isValid = (root, low, high) => {
  if(!root) {
      return true;
  }
  if(root.val <= low || root.val >= high) {
      return false;
  }
  return (isValid(root.left, low, root.val) && isValid(root.right, root.val, high));
  
}

function isValidBST(root) {
  return isValid(root, -Infinity, Infinity);
}

if (require.main === module) {

// add your own tests in here
const T = (v, l, r) => new Node(v, l, r)

console.log("Expecting: true");
console.log("=>", isValidBST(T(2, T(1), T(3))));

}

module.exports = {
  isValidBST,
  Node
}