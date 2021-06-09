function findDistance(graph, vertexA, vertexB) {
  const queue = [[0, vertexA]];
  const visited = new Set();

  while (queue.length > 0) {
    const [distance, vertex] = queue.shift();

    if (vertex === vertexB && distance > 0) {
      return distance;
    }

    if (visited.has(vertex)) {
      continue;
    }

    graph[vertex].forEach((adj) => {
      queue.push([distance + 1, adj]);
    });

    visited.add(vertex);
  }

  return -1;
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

  console.log("Expecting: 2");
  console.log(findDistance(graph, "jan", "carl"));

  console.log("");

  console.log("Expecting: -1");
  console.log(findDistance(graph, "dave", "carl"));

  console.log("");

  console.log("Expecting: -1");
  console.log(findDistance(graph, "jan", "jan"));

  console.log("");

  console.log("Expecting: -1");
  console.log(findDistance(graph, "jambaby", "carl"));

  graph = {
    jan: ["cranberry", "jamboree"],
    john: ["jambaby"],
    jambaby: ["jan", "cranberry"],
    carl: [],
    dave: ["john", "carl"],
    cranberry: [],
    hamtaro: ["jambaby", "dave"],
    jamboree: ["carl", "john"]
  };

  console.log("");

  console.log("Expecting: 4");
  console.log(findDistance(graph, "jan", "jan"));

  console.log("");

  console.log("Expecting: 1");
  console.log(findDistance(graph, "dave", "carl"));

  console.log("");

  console.log("Expecting: -1");
  console.log(findDistance(graph, "jamboree", "hamtaro"));
}

module.exports = findDistance;

// Please add your pseudocode to this file
/************************************************************************************ 
 * function find_distance(graph, vertex_a, vertex_b):
 *  initialize an array queue to store the starting vertex with a distance of 0
 *  initialize an empty set to store the visited vertices
 * 
 *  while the queue has vertices:
 *    remove the first vertex from the queue
 * 
 *    if the vertex equals the target vertex_b and the distance is more than 0:
 *      return distance
 * 
 *    if the vertex has not been visited:
 *      iterate over its adjacency list:
 *        add each vertex and distance + 1 to the queue
 * 
 *    add the vertex to visited
 * 
 * return -1
*************************************************************************************/

 // And a written explanation of your solution
/************************************************************************************ 
 * To find the distance from one vertex to another we need to always keep track of
 * which vertices require visitation, which have been visited so we can avoid infinite
 * loops, and the distance of each vertex from the start at any given time. This is why
 * our queue is a 2-dimensional array: it needs to store the vertex and its distance.
 * 
 * At the beginning, we add the starting vertex with a distance of 0 to the queue. Next
 * we enter the loop and remove the first vertex from the queue. We can then check if
 * this vertex is the target vertex and if we've actually traveled the graph by checking
 * that the distance is more than 0. If so, we can return the distance. 
 * 
 * Next, we check if we've already visited this vertex. If we have, it means we've already
 * added its adjacent vertices to the queue at some point, and we should not do that 
 * again so as to avoid infinite loops. If it has been visited, we can just continue
 * on to the next iteration. If it hasn't been visited, we add each adjacent vertex
 * to the queue with the correct distance, which is distance + 1. Lastly, we add the 
 * vertex to visited.
 * 
 * If we visit every reachable vertex without finding the target, we return -1.
*************************************************************************************/