class LinkedList {
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
  addFirst(node) {
    node.next = this.head;
    this.head = node;
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {
    if (this.head === null) {
      this.head = node;
      return;
    }

    this.iterate(currNode => {
      if (currNode.next === null) {
        currNode.next = node;
        return true;
      }
    });
  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {
    const oldHead = this.head;

    if (this.head !== null) {
      this.head = this.head.next;
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

        return true;
      }
    });
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

  console.log("Print one to four");
  list.print();
  console.log("-----------------------------");

  console.log("Handle empty list print");
  emptyList.print();
  console.log("-----------------------------");

  console.log("Handle one item list print");
  oneItemList.print();
  console.log("-----------------------------");

  console.log(`Find four`);
  console.log(`${list.find('four').value}`);
  console.log(`Find non-existent value`);
  console.log(`Nothing: ${list.find(50)}`);
  console.log(`Find in empty list: ${emptyList.find(20)}`);
  console.log(`Find just one in one item list: ${oneItemList.find('just one').value}`);
  console.log(`Find nothing in one item list: ${oneItemList.find('nothing')}`);
  console.log("-----------------------------");

  console.log("Add zero as head");
  list.addFirst(new Node('zero'));
  list.print();
  console.log("-----------------------------");

  console.log("Add zero as head to empty list");
  emptyList.addFirst(new Node('zero'));
  emptyList.print();
  emptyList.head = null;
  console.log("-----------------------------");

  console.log("Add zero as head to one item list");
  oneItemList.addFirst(new Node('zero'));
  oneItemList.print();
  oneItemList.head = oneItemList.head.next;
  console.log("-----------------------------");

  console.log("Add five as tail");
  list.addLast(new Node('five'));
  list.print();
  console.log("-----------------------------");

  console.log("Add whaaa as tail to empty list");
  emptyList.addLast(new Node('whaaa'));
  emptyList.print();
  emptyList.head = null;
  console.log("-----------------------------");

  console.log("Add whaaa as tail to one item list");
  oneItemList.addLast(new Node('whaaa'));
  oneItemList.print();
  oneItemList.head.next = null;
  console.log("-----------------------------");

  console.log("Remove first node zero and return it");
  console.log(`${list.removeFirst().value} was removed`);
  list.print();
  console.log("-----------------------------");

  console.log("Remove first node from an empty list");
  console.log(`${emptyList.removeFirst()} was removed`);
  emptyList.print();
  console.log("-----------------------------");

  console.log("Remove first node from one item list");
  console.log(`${oneItemList.removeFirst().value} was removed`);
  oneItemList.print();
  oneItemList.head = new Node('just one');
  console.log("-----------------------------");

  console.log("Remove last node five and return it");
  console.log(`${list.removeLast().value} was removed`);
  list.print();
  console.log("-----------------------------");

  console.log("Remove last node from empty list and return it");
  console.log(`${emptyList.removeLast()} was removed`);
  emptyList.print();
  console.log("-----------------------------");

  console.log("Remove last node from one item list and return it");
  console.log(`${oneItemList.removeLast().value} was removed`);
  oneItemList.print();
  oneItemList.head = new Node('just one');
  console.log("-----------------------------");

  console.log("Replace node at index and return inserted node");
  console.log(`replace middle two with 2: ${list.replace(1, new Node('2')).value}`);
  list.print();
  console.log(`replace zeroth one with 1: ${list.replace(0, new Node('1')).value}`);
  list.print();
  console.log(`replace tail four with 4: ${list.replace(3, new Node('4')).value}`);
  list.print();
  console.log(`replace middle three with 3: ${list.replace(2, new Node('3')).value}`);
  list.print();
  console.log("-----------------------------");

  console.log("Insert node at index");
  console.log("Insert at 0");
  list.insert(0, new Node('zero'));
  list.print();
  list.removeFirst();

  console.log("Insert at 2");
  list.insert(2, new Node('two'));
  list.print();

  console.log("Insert at 4");
  list.insert(4, new Node('four'));
  list.print();

  console.log("Insert at 6");
  list.insert(6, new Node('six'));
  list.print();
  list.removeLast();

  console.log("Insert at 0 in empty list");
  emptyList.insert(0, new Node('zero'));
  emptyList.print();
  emptyList.removeFirst();
  console.log("-----------------------------");

  head = new Node('one', new Node('two', new Node('three', new Node('four'))));
  list = new LinkedList(head);

  console.log("Remove the node at the index and return it");
  console.log(`Remove two: ${list.remove(1).value}`);
  console.log(`Remove tail four: ${list.remove(2).value}`);
  console.log(`Remove three: ${list.remove(1).value}`);
  console.log(`Remove one: ${list.remove(0).value}`);
  list.print();
  console.log("-----------------------------");

  console.log("Clear a list");
  head = new Node('one', new Node('two', new Node('three', new Node('four'))));
  list = new LinkedList(head);
  list.clear();
  list.print();
}

module.exports = {
  Node, LinkedList
};
