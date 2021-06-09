class DoublyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  iterate(callback) {
    let count = 0;
    let temp = this.head;

    while (temp !== null) {
      const result = callback(temp, count);

      if (result === true) {
        return temp;
      }

      ++count;
      temp = temp.next;
    }

    return this.head;
  }

  // print each node's value on its own line
  // use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  print() {
    this.iterate(node => console.log(node.value));
  }

  // find the node with the target value and return it
  // if not found return null, use your iterate method to be DRY!
  find(target) {
    let result = null;

    this.iterate(node => {
      if (node.value === target) {
        result = node;

        return true;
      }
    });

    return result;
  }

  // add the node to the start of the list, no nodes should be removed
  // MODIFY TO UPDATE PREV
  addFirst(node) {
    node.next = this.head;

    if (this.head !== null) {
      this.head.prev = node;
    }
    
    this.head = node;
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  // MODIFY TO UPDATE PREV
  addLast(node) {
    if (this.head === null) {
      this.head = node;
      return;
    }

    this.iterate(currNode => {
      if (currNode.next === null) {
        currNode.next = node;
        node.prev = currNode;
        return true;
      }
    });
  }

  // remove the first Node in the list and update head
  // and return the removed node
  // MODIFY TO UPDATE PREV
  removeFirst() {
    const oldHead = this.head;

    if (this.head !== null) {
      this.head = this.head.next;
    }

    if (this.head !== null) {
      this.head.prev = null;
    }

    return oldHead;
  }

  // remove the tail node, iterate may be helpful
  // return the node you just removed
  removeLast() {
    if (this.head === null || this.head.next === null) {
      return this.removeFirst();
    }

    let oldTail = null;

    this.iterate(node => {
      if (node.next.next === null) {
        oldTail = node.next;
        node.next = null;
        return true;
      }
    });

    return oldTail;
  }

  // replace the node at the given index with the given node
  // MODIFY TO UPDATE PREV
  replace(idx, node) {
    if (idx === 0) {
      this.removeFirst();
      this.addFirst(node);
      return node;
    }

    this.iterate((currNode, count) => {
      if (count === idx - 1) {
        node.next = currNode.next.next;
        currNode.next = node;
        node.prev = currNode;

        if (currNode.next.next !== null) {
          currNode.next.next.prev = node;
        } 

        return true;
      }
    });

    return node;
  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
  // MODIFY TO UPDATE PREV
  insert(idx, node) {
    if (idx === 0) {
      this.addFirst(node);
      return;
    }

    this.iterate((currNode, count) => {
      if (count === idx - 1) {
        const oldNext = currNode.next;
        currNode.next = node;
        node.next = oldNext;
        node.prev = currNode;

        if (oldNext !== null) {
          oldNext.prev = node;
        }

        return true;
      }
    });
  }

  // remove the node at the given index, and return it
  // MODIFY TO UPDATE PREV
  remove(idx) {
    if (idx === 0) {
      return this.removeFirst();
    }

    let oldNode = null;

    this.iterate((node, count) => {
      if (count === idx - 1) {
        oldNode = node.next;
        node.next = node.next.next;

        if (node.next !== null) {
          node.next.prev = node;
        }

        return true;
      }
    }); 

    return oldNode;
  }

  clear() {
    this.head = null;
  }
}

class Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

if (require.main === module) {
  let node = new Node('one');
  node.prev = new Node('zero');

  console.log("NODE TESTING PREV VALUES");
  console.log(`Node prev value is zero: ${node.prev.value}`);
  console.log(`Node prev.prev is null: ${node.prev.prev}`);
  console.log("---------------------------------------------------------");

  node = new Node('one');
  let list = new DoublyLinkedList(node);
  list.addFirst(new Node('zero'));

  console.log("TEST PREV WHEN CALLING ADD FIRST");
  console.log(`Node prev value is zero: ${node.prev.value}`);
  console.log(`Node prev.next value is one: ${node.prev.next.value}`);
  console.log("---------------------------------------------------------");

  let lastNode = new Node('last');
  list.addLast(lastNode);
  console.log("TEST PREV WHEN CALLING ADD LAST");
  console.log(`Last node prev value is one: ${lastNode.prev.value}`);
  console.log("---------------------------------------------------------");

  console.log("TEST PREV WHEN CALLING REMOVE FIRST");
  list.removeFirst();
  console.log(`Head node's prev should be null: ${list.head.prev}`);
  console.log("---------------------------------------------------------");

  // one -> last
  list.replace(0, new Node('zero'));
  console.log("TEST PREV WHEN REPLACING HEAD");
  console.log(`Head node's prev is null: ${list.head.prev}`);

  // zero -> last
  list.replace(1, new Node('one'));
  console.log("TEST PREV WHEN REPLACING TAIL");
  console.log(`Tail node's prev is zero: ${list.head.next.prev.value}`);

  let head = new Node('zero');
  let one = new Node('one');
  let two = new Node('two');
  head.next = one
  one.next = two
  one.prev = head
  two.prev = one
  list = new DoublyLinkedList(head);

  // zero -> one -> two
  replacing = new Node('replacing');
  list.replace(1, replacing)
  // zero -> replacing -> two
  console.log("TEST PREV WHEN REPLACING MIDDLE NODE");
  console.log(`Middle node prev value is zero: ${replacing.prev.value}`);
  console.log(`Last node prev value is replacing: ${two.prev.value}`);
  console.log("---------------------------------------------------------");

  // zero -> replacing -> two
  node = new Node('insert');
  list.insert(0, node);
  // insert -> zero -> replacing -> two
  console.log("TEST PREV WHEN INSERTING 0TH NODE");
  console.log(`Head node prev is null: ${list.head.prev}`);
  console.log(`Head node next.prev value is insert: ${list.head.next.prev.value}`);

  node = new Node('at tail');
  list.insert(4, node);
  // insert -> zero -> replacing -> two -> at tail
  console.log("TEST PREV WHEN INSERTING TAIL NODE");
  console.log(`Tail node prev is two: ${node.prev.value}`);

  node = new Node('in middle');
  list.insert(2, node);
  // insert -> zero -> in middle -> replacing -> two -> at tail
  console.log("TEST PREV WHEN INSERTING IN MIDDLE");
  console.log(`Middle node prev value is zero: ${node.prev.value}`);
  console.log(`Middle node next.prev is in middle: ${node.next.prev.value}`);
  console.log("---------------------------------------------------------");

  // insert -> zero -> in middle -> replacing -> two -> at tail
  list.remove(0);
  // zero -> in middle -> replacing -> two -> at tail
  console.log("TEST PREV WHEN REMOVING 0TH NODE");
  console.log(`Head node's prev value is null: ${list.head.prev}`);

  list.remove(2);
  // zero -> in middle -> two -> at tail
  console.log("TEST PREV WHEN REMOVING IN MIDDLE");
  console.log(`Node at index 2 prev's value is in middle: ${list.head.next.next.prev.value}`);

  list.remove(3);
  // zero -> in middle -> two 
  console.log("TEST PREV WHEN REMOVING TAIL");
  console.log(`Tail node's prev should still point to node with value in middle: ${list.head.next.next.prev.value}`);
  console.log("---------------------------------------------------------");
}

module.exports = {
  Node, DoublyLinkedList
};
