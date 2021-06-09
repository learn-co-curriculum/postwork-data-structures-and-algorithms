function findShortestString(arr) {
  return arr.reduce((shortest, string) =>
    string.length < shortest.length ? string : shortest
  );
}

function findShortestStringRecursive(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const result = findShortestStringRecursive(arr.slice(1));

  return arr[0].length <= result.length ? arr[0] : result;
}

function benchmark(callback) {
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    callback();
  }

  return (Date.now() - startTime) / 1000;
}

console.log('Iterative:', benchmark(() => findShortestString(['cat', 'dogs', '', 'bats', 'flags'])));
console.log('Recursive:', benchmark(() => findShortestStringRecursive(['cat', 'dogs', '', 'bats', 'flags'])));