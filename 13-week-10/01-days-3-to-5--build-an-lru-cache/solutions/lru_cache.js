class Node {
  constructor(data = null, key = null, next = null, prev = null) {
    this.data = data;
    this.key = key;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  // ADD THE NODE TO THE HEAD OF THE LIST
  addHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.head.prev = null;
  }

  // REMOVE THE TAIL NODE FROM THE LIST
  // AND RETURN IT
  removeTail() {
    if (!this.tail) {
      return this.tail;
    }

    const oldTail = this.tail;
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = this.tail;
    }

    return oldTail;
  }

  // REMOVE THE GIVEN NODE FROM THE LIST
  // AND THEN RETURN IT
  removeNode(node) {
    switch (node) {
      case this.tail:
        this.removeTail();
        break;
      case this.head:
        // this is a good candidate for a helper method!
        this.head = node.next;

        if (this.head) {
          this.head.prev = null;
        }

        if (!this.head || !this.head.next) {
          this.tail = this.head;
        }

        break;
      default:
        if (node.prev) {
          node.prev.next = node.next;
        }
        
        if (node.next) {
          node.next.prev = node.prev;
        }
    }
    
    return node;
  }

  // MOVE THE GIVEN NODE FROM ITS LOCATION TO THE HEAD
  // OF THE LIST
  moveNodeToHead(node) {
    const removed = this.removeNode(node);

    this.addHead(removed);
  }
}

class LRUCache {
  constructor(limit = 10) {
    this.limit = limit;
    this.size = 0;
    this.hash = {};
    this.list = new DoublyLinkedList();
  }

  // RETRIEVE THE NODE FROM THE CACHE USING THE KEY
  // IF THE NODE IS IN THE CACHE, MOVE IT TO THE HEAD OF THE LIST AND RETURN IT
  // OTHERWISE RETURN -1
  get(key) {
    const found = this.hash[key];

    if (found) {
      this.list.moveNodeToHead(found);
      return found;
    }

    return -1;
  }

  // ADD THE GIVEN KEY AND VALUE TO THE CACHE
  // IF THE CACHE ALREADY CONTAINS THE KEY, UPDATE ITS VALUE AND MOVE IT TO 
  // THE HEAD OF THE LIST
  // IF THE CACHE DOESN'T CONTAIN THE KEY, ADD IT TO THE CACHE AND PLACE IT
  // AT THE HEAD OF THE LIST
  // IF THE CACHE IS FULL, REMOVE THE LEAST RECENTLY USED ITEM BEFORE ADDING
  // THE NEW DATA TO THE CACHE
  put(key, value) {
    const found = this.hash[key];

    if (found) {
      found.data = value;
      this.list.moveNodeToHead(found);
      return;
    }

    if (this.limit === this.size) {
      const tail = this.list.removeTail();
      delete this.hash[tail.key];
      --this.size;
    }

    this._addEntry(key, value);
  }

  _addEntry(key, value) {
    const node = new Node(value, key);
    this.list.addHead(node);
    this.hash[key] = node;
    ++this.size;
  }
}

if (require.main === module) {
  let list = new DoublyLinkedList();
  
  list.addHead(new Node(1));

  console.log("List has same node as head and tail");
  console.log(list.head === list.tail);
  console.log(list.head.data === 1);

  list.removeNode(list.head);

  console.log("List is empty");
  console.log(list.head === null && list.tail === null);

  list.addHead(new Node(1));
  list.addHead(new Node(2));

  console.log("List head is 2 and tail is 1");
  console.log(list.head.data === 2 && list.tail.data === 1);

  list.removeTail();
  console.log("Can remove tail");
  console.log(list.head === list.tail && list.head.data === 2);

  list.moveNodeToHead(list.head);
  console.log("Can move head to head");
  console.log(list.head === list.tail && list.head.data === 2);

  list.addHead(new Node(3));
  list.moveNodeToHead(list.tail);
  console.log("Can move tail to head");
  console.log(list.head.data === 2 && list.tail.data === 3);

  list.addHead(new Node(1));
  list.moveNodeToHead(list.head.next);
  console.log("Can move middle to head");
  console.log(list.head.data === 2 && list.tail.data === 3);
}

module.exports = {
  Node,
  DoublyLinkedList,
  LRUCache
};

// Please add your pseudocode to this file
// And a written explanation of your solution
