class Node {
    constructor(val = null, next = null) {
      this.val = val;
      this.next = next;
    }
}

function addTwoList(l1, l2) {

let node = null

const carry = arguments[2]
if (l1 || l2) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0
    const next1 = l1 ? l1.next : null
    const next2 = l2 ? l2.next : null
    const val = carry ? val1 + val2 + 1 : val1 + val2
    node = new Node(val % 10)
    node.next = addTwoList(next1, next2, val >= 10)  
} else if (carry) {
    node = new Node(1)
    node.next = null
}
console.log(node)
return node

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

// More details here: https://leetcode.com/problems/add-two-numbers/solution/