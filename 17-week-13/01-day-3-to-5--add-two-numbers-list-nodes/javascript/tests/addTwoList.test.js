const { Node , addTwoList } = require('../addTwoList');

const n1 = new Node(3)
const n2 = new Node(4, n1)
const l1 = new Node(2, n2)

const n3 = new Node(4)
const n4 = new Node(6, n3)
const l2 = new Node(5, n4)

test('Input: l1 = [2,4,3] & l2 = [5,6,4], Output: [7,0,8]', () => {
  expect(addTwoList(l1,l2)).toEqual({"next": {"next": {"next": null, "val": 8}, "val": 0}, "val": 7});
});

const l3 = new Node(0)
const l4 = new Node(0)

test('Input: l3 = [0] & l4 = [0], Output: [0]', () => {
  expect(addTwoList(l3,l4)).toEqual({"next": null, "val": 0});
});

const l5 = {"val": 9, "next":{"val": 9, "next":{"val": 9, "next":{"val": 9, "next":{"val": 9, "next":{"val": 9, "next":{"val": 9, "next": null}}}}}}}
const l6 = {"val": 9, "next":{"val": 9, "next":{"val": 9, "next":{"val": 9, "next": null}}}}

test('Input: l5 = [9,9,9,9,9,9,9] & l6 = [9,9,9,9], Output: [8,9,9,9,0,0,0,1]', () => {
  expect(addTwoList(l5,l6)).toEqual({"val": 8, "next":{"val": 9, "next":{"val": 9, "next":{"val": 9, "next":{"val": 0, "next":{"val": 0, "next":{"val": 0, "next": {"val": 1, "next": null}}}}}}}});
});