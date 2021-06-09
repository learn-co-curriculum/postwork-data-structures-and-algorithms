class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// list = [3, 5, 6, 9, 10, 20]
//           6
//       5       10
//     3       9   20
function threeToTwenty() {
  const three = new Node(3);
  const five = new Node(5, three);
  const nine = new Node(9);
  const twenty = new Node(20);
  const ten = new Node(10, nine, twenty);

  return new Node(6, five, ten);
}

// list = [10, 11, 30, 100, 200]
//           30
//       11    100
//     10        200
function tenToTwoHundred() {
  const ten = new Node(10);
  const eleven = new Node(11, ten);
  const two_hundred = new Node(200);
  const hundred = new Node(100, null, two_hundred);

  return new Node(30, eleven, hundred);
}

if (require.main === module) {
  // add tests in here if you need them
}

module.exports = {
  Node,
  threeToTwenty,
  tenToTwoHundred
};

// Please add your pseudocode to this file
// And a written explanation of your solution
