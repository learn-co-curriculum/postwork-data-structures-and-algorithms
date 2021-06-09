class Node {
    constructor(val = null, next = null) {
      this.val = val;
      this.next = next;
    }
}

function addTwoList(l1, l2) {
// type your code here
}

if (require.main === module) {
// add your own tests in here
console.log("Expecting: { val: 0, next: null }");
console.log("=>", addTwoNumbers({ val: 0, next: null }, { val: 0, next: null }));

}

module.exports = {
    Node,
    addTwoList
};

// Please add your pseudocode to this file
// And a written explanation of your solution