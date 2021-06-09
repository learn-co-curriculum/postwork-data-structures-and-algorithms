const { Node, LinkedList } = require("../linked_list");

describe("Node", () => {
  const makeNode = () => new Node("hi", "there");
  const emptyNode = new Node();

  test("sets an attribute called value to the argument on initialization", () => {
    expect(makeNode().value).toBe("hi");
  });

  test("sets an attribute called next to the argument on initialization", () => {
    expect(makeNode().next).toBe("there");
  });

  test("sets an attribute called value to null on initialization when there is no argument", () => {
    expect(emptyNode.value).toBe(null);
  });

  test("sets an attribute called next to null on initialization when there is no argument", () => {
    expect(emptyNode.next).toBe(null);
  });
});

describe("LinkedList", () => {
  const nodeFour = new Node("four");
  const nodeThree = new Node("three", nodeFour);
  const nodeTwo = new Node("two", nodeThree);
  const nodeOne = new Node("one", nodeTwo);
  const justOne = new Node("just one");

  let emptyList = new LinkedList();
  let oneItemList = new LinkedList(justOne);
  let linkedList = new LinkedList(nodeOne);

  const consoleLog = console.log;
  const LLValues = ["one", "two", "three", "four"];

  beforeEach(() => {
    console.log = consoleLog;

    const values = ["one", "two", "three", "four", "just one"];
    const nodes = [nodeOne, nodeTwo, nodeThree, nodeFour, justOne];

    nodes.forEach((node, i) => {
      node.value = values[i];
    });

    emptyList.head = null;

    oneItemList.head = justOne;
    justOne.next = null;

    linkedList.head = nodeOne;
    nodeOne.next = nodeTwo;
    nodeTwo.next = nodeThree;
    nodeThree.next = nodeFour;
    nodeFour.next = null;
  });

  test("head is null if no argument provided on initialization", () => {
    expect(emptyList.head).toBe(null);
  });

  test("head is set to the argument if provided on initialization", () => {
    expect(oneItemList.head).toBe(justOne);
  });

  describe("iterate()", () => {
    test("iterate() calls the provided callback on every node with the node as an argument to the callback", () => {
      const values = [];
      linkedList.iterate((node) => values.push(node));
  
      expect(values.length).toBe(4);
      expect(values[3]).toBe(nodeFour);
    });
  
    test("iterate() can handle an empty list", () => {
      const values = [];
      emptyList.iterate((node) => values.push(node));
  
      expect(values.length).toBe(0);
    });
  
    test("iterate() can handle a list with one node", () => {
      const values = [];
      oneItemList.iterate((node) => values.push(node));
  
      expect(values.length).toBe(1);
      expect(values[0]).toBe(justOne);
    });
  });

  describe("print()", () => {
    let consoleOutput = [];
    const mockOutput = output => consoleOutput.push(output);
    beforeEach(() => (console.log = mockOutput));
    afterEach(() => (consoleOutput = []));

    test("prints nothing at all when the list is empty", () => {
      emptyList.print();

      expect(consoleOutput.length).toBe(0);
    });

    test("prints a single line for a list with one node", () => {
      oneItemList.print();

      expect(consoleOutput[0]).toBe(justOne.value);
    });

    test("prints all nodes", () => {
      linkedList.print();

      expect(consoleOutput).toEqual(LLValues);
    });
  });

  describe("find()", () => {
    test("returns null when the list is empty", () => {
      expect(emptyList.find(4)).toBe(null);
    });

    test("returns the correct Node when a Node with that value is in the list", () => {
      expect(linkedList.find("two")).toBe(nodeTwo);
    });

    test("returns null when the value is not in the list", () => {
      expect(linkedList.find("nope")).toBe(null);
    });
  });

  describe("addFirst()", () => {
    test("adds the given Node to the beginning of the list without removing any", () => {
      const newNode = new Node("I'm new");
      oneItemList.addFirst(newNode);

      expect(oneItemList.head).toBe(newNode);
      expect(oneItemList.head.next).toBe(justOne);
    });

    test("adds the given node to an empty list", () => {
      const newNode = new Node("I'm new");
      emptyList.addFirst(newNode);

      expect(emptyList.head).toBe(newNode);
      expect(emptyList.head.next).toBe(null);
    });
  });

  describe("addLast()", () => {
    test("adds the given Node to the end of the list without removing any", () => {
      const newNode = new Node("I'm new");
      oneItemList.addLast(newNode);

      expect(oneItemList.head).toBe(justOne);
      expect(oneItemList.head.next).toBe(newNode);
    });

    test("adds the given node to an empty list", () => {
      const newNode = new Node("I'm new");
      emptyList.addLast(newNode);

      expect(emptyList.head).toBe(newNode);
      expect(emptyList.head.next).toBe(null);
    });
  });

  describe("removeFirst()", () => {
    test("removes and returns the head of the list", () => {
      expect(linkedList.removeFirst()).toBe(nodeOne);
    });

    test("updates the head to the correct Node", () => {
      linkedList.removeFirst();

      expect(linkedList.head).toBe(nodeTwo);
      expect(linkedList.head.next).toBe(nodeThree);
    });

    test("does not produce an error when called on an empty list", () => {
      expect(() => emptyList.removeFirst()).not.toThrow(Error);
    });
  });

  describe("removeLast()", () => {
    test("removes and returns the tail of the list", () => {
      expect(linkedList.removeLast()).toBe(nodeFour);
      expect(linkedList.head.next.next.next).toBe(null);
    });

    test("makes the node before the old tail the new tail", () => {
      linkedList.removeLast();

      expect(linkedList.head.next.next).toBe(nodeThree);
    });

    test("does not produce an error when called on an empty list", () => {
      expect(() => emptyList.removeLast()).not.toThrow(Error);
    });
  });

  describe("replace()", () => {
    test("returns the inserted node", () => {
      const newNode = new Node("replacing");

      expect(linkedList.replace(0, newNode)).toBe(newNode);
    });

    test("replaces the correct nodes at the correct indexes", () => {
      const zero = new Node("replace at 0");
      const one = new Node("replace at 1");
      const two = new Node("replace at 2");
      const three = new Node("replace at 3");

      [zero, one, two, three].forEach((node, i) => { linkedList.replace(i, node) });

      expect(linkedList.head).toBe(zero);
      expect(linkedList.head.next).toBe(one);
      expect(linkedList.head.next.next).toBe(two);
      expect(linkedList.head.next.next.next).toBe(three);
      expect(linkedList.head.next.next.next.next).toBe(null);
    });
  });

  describe("insert()", () => {
    test("can insert a node at the beginning of the list", () => {
      const newNode = new Node("hi");
      oneItemList.insert(0, newNode);

      expect(oneItemList.head).toBe(newNode);
      expect(oneItemList.head.next).toBe(justOne);
      expect(oneItemList.head.next.next).toBe(null);
    });
    
    test("can insert a node at the very end of the list (making a new tail)", () => {
      const newNode = new Node("hi");
      oneItemList.insert(1, newNode);

      expect(oneItemList.head).toBe(justOne);
      expect(oneItemList.head.next).toBe(newNode);
      expect(oneItemList.head.next.next).toBe(null);
    });

    test("can insert a node in the middle of a list", () => {
      const newNode = new Node("hi");
      linkedList.insert(2, newNode);

      expect(linkedList.head.next).toBe(nodeTwo);
      expect(linkedList.head.next.next).toBe(newNode);
      expect(linkedList.head.next.next.next).toBe(nodeThree);
    });
  });

  describe("remove()", () => {
    let consoleOutput = [];
    const mockOutput = output => consoleOutput.push(output);
    beforeEach(() => (console.log = mockOutput));
    afterEach(() => (consoleOutput = []));

    test("returns the removed node", () => {
      expect(linkedList.remove(3)).toBe(nodeFour);
    });

    test("removes the correct node", () => {
      const removed = linkedList.remove(1);
      let found = false;

      linkedList.iterate(node => {
        if (node === removed) {
          founds = true;
        }
      });

      expect(found).toBe(false);
    });

    test("keeps the list intact when a node is removed", () => {
      linkedList.remove(2);
      linkedList.print();

      expect(consoleOutput).toEqual(['one', 'two', 'four']);
    });
  });

  describe("clear()", () => {
    test("empties the list", () => {
      linkedList.clear();

      expect(linkedList.head).toBe(null);
    });
  });
});
