class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
    this.size = 0;
    // worst case O(n) for setting tail on initializing new list
    this.setTailAndSize();
  }

  // helper method for setting tail when list goes from empty to not empty
  // upon initialization
  // will be O(n) because user could add Node connected to other Nodes
  setTailAndSize() {
    this.size = 0;

    this.iterate((node) => {
      this.tail = node;
      this.updateSize('+');
    });
  }

  // helper method for updating size
  updateSize(operation) {
    operation === '+' ? ++this.size : --this.size;
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
  addFirst(node) {
    // O(1) operation: the tail will only be set if the list is empty
    if (this.head === null) {
      this.tail = node;
    }

    node.next = this.head;
    this.head = node;

    // increase size: O(1)
    this.updateSize('+');
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {
    if (this.head === null) {
      this.addFirst(node);
      return;
    }

    this.tail.next = node;
    // O(1) operation to set tail
    this.tail = node;
    // increase size: O(1)
    this.updateSize('+');

    // if (this.head === null) {
    //   this.head = node;
    // }

    // this.iterate(currNode => {
    //   if (currNode.next === null) {
    //     currNode.next = node;
    //     return true;
    //   }
    // });
  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {
    const oldHead = this.head;

    if (this.head !== null) {
      this.head = this.head.next;
      this.updateSize('-');
    }

    // if list goes from 1 Node to empty, update tail O(1)
    if (this.head === null) {
      this.tail = null;
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

    // Could also set the tail inside iterate above
    // O(n) operation
    this.setTailAndSize();

    return oldTail;
  }

  // replace the node at the given index with the given node
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

        // If tail is being replaced O(1)
        if (node.next === null) {
          this.tail = node;
        }

        return true;
      }
    });

    return node;
  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
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

        // if new node is inserted at the very end, O(1)
        if (oldNext === null) {
          this.tail = node;
        }

        return true;
      }
    });

    this.updateSize('+');
  }

  // remove the node at the given index, and return it
  remove(idx) {
    if (idx === 0) {
      return this.removeFirst();
    }

    let oldNode = null;

    this.iterate((node, count) => {
      if (count === idx - 1) {
        oldNode = node.next;
        node.next = node.next.next;
        // if tail was removed, update tail
        if (node.next === null) {
          this.tail = node;
        }

        return true;
      }
    }); 

    this.updateSize('-');

    return oldNode;
  }

  clear() {
    this.head = null;
    // null tail for empty list
    this.tail = null;
    this.size = 0;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

if (require.main === module) {
  let head = new Node('one', new Node('two', new Node('three', new Node('four'))));
  let list = new LinkedList(head);
  let emptyList = new LinkedList();
  let oneItemList = new LinkedList(new Node('just one'));

  console.log("CHECK FOR CORRECT TAIL ON INIT");
  console.log(`Should be 'four': ${list.tail.value}`);
  console.log(`Should be 'null': ${emptyList.tail}`);
  console.log(`Should be 'just one': ${oneItemList.tail.value}`);
  console.log("---------------------------------------------------");

  console.log("CHECK FOR CORRECT TAIL ON ADD FIRST");
  list.addFirst(new Node('beans'));
  emptyList.addFirst(new Node('beans'));
  oneItemList.addFirst(new Node('beans'));
  console.log(`Should be 'four': ${list.tail.value}`);
  console.log(`Should be 'beans': ${emptyList.tail.value}`);
  console.log(`Should be 'just one': ${oneItemList.tail.value}`);
  [list, emptyList, oneItemList].forEach(l => l.removeFirst());
  console.log("---------------------------------------------------");

  console.log("CHECK FOR CORRECT TAIL ON ADD LAST");
  list.addLast(new Node('beans'));
  emptyList.addLast(new Node('beans'));
  oneItemList.addLast(new Node('beans'));
  console.log(`Should be 'beans': ${list.tail.value}`);
  console.log(`Should be 'beans': ${emptyList.tail.value}`);
  console.log(`Should be 'beans': ${oneItemList.tail.value}`);
  [list, emptyList, oneItemList].forEach(l => {
    l.removeLast();
    l.setTailAndSize();
  });
  console.log("---------------------------------------------------");

  console.log("CHECK FOR CORRECT TAIL ON REMOVE FIRST");
  let removed = list.removeFirst();
  let removedAgain = oneItemList.removeFirst();
  emptyList.removeFirst();
  console.log(`Should be 'four': ${list.tail.value}`);
  console.log(`Should be 'null': ${emptyList.tail}`);
  console.log(`Should be 'null': ${oneItemList.tail}`);
  list.addFirst(removed);
  oneItemList.addFirst(removedAgain);
  console.log("---------------------------------------------------");

  console.log("CHECK FOR CORRECT TAIL ON REMOVE LAST");
  removed = list.removeLast();
  removedAgain = oneItemList.removeLast();
  emptyList.removeLast();
  console.log(`Should be 'three': ${list.tail.value}`);
  console.log(`Should be 'null': ${emptyList.tail}`);
  console.log(`Should be 'null': ${oneItemList.tail}`);
  list.addLast(removed);
  oneItemList.addLast(removedAgain);
  console.log("---------------------------------------------------");

  console.log("CHECK FOR CORRECT TAIL ON REPLACE");
  let nodeTwo = new Node('two');
  let nodeOne = new Node('one', nodeTwo);
  let replaceList = new LinkedList(nodeOne);

  replaceList.replace(0, new Node('hi'));
  console.log(`Should be two: ${replaceList.tail.value}`);
  replaceList.replace(1, new Node('bye'));
  console.log(`Should be bye: ${replaceList.tail.value}`);
  console.log("---------------------------------------------------");

  console.log("CHECK FOR CORRECT TAIL ON INSERT");
  nodeTwo = new Node('two');
  nodeOne = new Node('one', nodeTwo);
  insertList = new LinkedList(nodeOne);

  insertList.insert(0, new Node('hi'));
  // hi -> one -> two
  console.log(`Should be two: ${insertList.tail.value}`);
  insertList.insert(1, new Node('bye'));
  // hi -> bye -> one -> two
  console.log(`Should be two: ${insertList.tail.value}`);
  insertList.insert(4, new Node('last'));
  // hi -> bye -> one -> two -> last
  console.log(`Should be last: ${insertList.tail.value}`);
  console.log("---------------------------------------------------");

  console.log("CHECK FOR CORRECT TAIL ON REMOVE");
  // one -> two -> three -> four
  list.remove(1);
  // one -> three -> four
  console.log(`Should be four: ${list.tail.value}`);
  list.remove(2);
  // one -> three
  console.log(`Should be three: ${list.tail.value}`);
  list.insert(1, new Node('two'));
  list.addLast(new Node('four'));
  console.log("---------------------------------------------------");

  console.log("CHECK FOR CORRECT TAIL ON CLEAR");
  list.clear();
  console.log(`Should be null: ${list.tail}`);
  head = new Node('one', new Node('two', new Node('three', new Node('four'))));
  list = new LinkedList(head);
  console.log("---------------------------------------------------");

  console.log("CHECKING SIZE");
  console.log(`New empty list should be 0: ${new LinkedList().size}`);
  console.log(`New list with one Node should be 1: ${new LinkedList(new Node('hi')).size}`);
  console.log(`New list with 3 nodes should be 3: ${new LinkedList(new Node('hi', new Node('bye', new Node('what')))).size}`);
  list.addFirst(new Node('s'));
  console.log(`On addFirst should be 5: ${list.size}`);
  list.addLast(new Node('b'));
  console.log(`On addLast should be 6: ${list.size}`);
  list.removeFirst();
  console.log(`On removeFirst should be 5: ${list.size}`);
  list.removeLast();
  console.log(`On removeLast should be 4: ${list.size}`);
  list.insert(1, new Node('stuff'));
  console.log(`On insert should be 5: ${list.size}`);
  list.remove(1);
  console.log(`On remove should be 4: ${list.size}`);
  list.clear();
  console.log(`On clear should be 0: ${list.size}`);
}

module.exports = {
  Node, LinkedList
};
