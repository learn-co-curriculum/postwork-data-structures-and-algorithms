function findDistance(graph, vertexA, vertexB) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  const graph = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby"],
    dave: []
  };

  console.log("Expecting: 2");
  console.log(findDistance(graph, "jan", "carl"));

  console.log("");

  console.log("Expecting: -1");
  console.log(findDistance(graph, "dave", "carl"));
}

module.exports = findDistance;

// Please add your pseudocode to this file
// And a written explanation of your solution
