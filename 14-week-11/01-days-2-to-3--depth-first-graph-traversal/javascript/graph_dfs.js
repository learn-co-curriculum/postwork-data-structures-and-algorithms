function isPath(graph, vertexA, vertexB) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  let graph = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby"],
    dave: []
  };

  console.log("Expecting: true");
  console.log(isPath(graph, "jan", "carl"));

  console.log("");

  console.log("Expecting: false");
  console.log(isPath(graph, "jan", "dave"));
}

module.exports = isPath;

// Please add your pseudocode to this file
// And a written explanation of your solution
