const MySet = require('../my_set');

let emptySet = new MySet();
let dataSet = new MySet('hello');

test('initialize(iterator = nil) raises an exception if the argument is not nothing, an array, or a string', () => {
  expect(() => {
    new MySet(1);
  }).toThrow(Error);
});

test('initialize(iterator = nil) populates @data with keys when given an Array or String', () => {
  const arraySet = new MySet([1, 2, 1, 3]);
  const sortedArraySet = Object.keys(arraySet.data).sort();
  const sortedDataSet = Object.keys(dataSet.data).sort();
  
  expect(sortedArraySet).toEqual(["1", "2", "3"]);
  expect(sortedDataSet.join('')).toBe('ehlo');
});

test('size() returns the number of items in the set', () => {
  expect(emptySet.size()).toBe(0);
  expect(dataSet.size()).toBe(4);
});

test('add(item) adds the item to the set', () => {
  emptySet.add('cat');

  expect(emptySet.data['cat']).toBe(true);
});

test('add(item) returns the instance of MySet', () => {
  expect(emptySet.add('cat')).toBe(emptySet);
});

test('has(item) returns true if the item is in the set', () => {
  expect(dataSet.has('h')).toBe(true);
});

test('has(item) returns false if the item is not in the set', () => {
  expect(dataSet.has('z')).toBe(false);
});

test('delete(item) returns true upon successful deletion', () => {
  expect(dataSet.delete('h')).toBe(true);
});

test('delete(item) returns false if item was not found', () => {
  expect(dataSet.delete('iiii')).toBe(false);
});

test('entries() returns an array of all of the unique keys in data', () => {
  const test = new MySet('aaabb');
  const letters = Object.keys(test.data).sort();

  expect(letters.join('')).toBe('ab');
});
