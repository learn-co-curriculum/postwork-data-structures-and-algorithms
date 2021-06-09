class Graph {
  constructor(paths) {
    this.graph = paths.reduce((graph, path) => this.constructor.populate(graph, path), {});
  }

  isAdjacent(vertexA, vertexB) {
    return this.graph[vertexA].has(vertexB);
  }

  addVertex(vertex, array) {
    this.graph[vertex] = new Set(array);

    array.forEach((adjacency) => {
      if (this.graph[adjacency] === undefined) {
        this.graph[adjacency] = new Set();
      }

      this.graph[adjacency].add(vertex);
    });
  }

  // helper function for building graph from a path
  static populate(graph, path) {
    return path.reduce((graph, vertex, idx) => {
      graph[vertex] = graph[vertex] || new Set();
      const nextVertex = path[idx + 1];

      if (nextVertex !== undefined) {
        graph[vertex].add(nextVertex);
        graph[nextVertex] = graph[nextVertex] || new Set();
        graph[nextVertex].add(vertex);
      }

      return graph;
    }, graph);
  }
}

if (require.main === module) {
  // add your own tests in here
  let graph = new Graph([]);

  console.log("Expecting: {}");
  console.log(graph.graph);

  console.log("");

  graph = new Graph([["a", "b", "c"], ["b", "d"]]);

  console.log('Expecting: { a: { "b" }, b: { "a", "c", "d" }, c: { "b" }, d: { "b" }}');
  console.log(graph.graph);

  console.log("");

  console.log("Expecting: true");
  console.log(graph.isAdjacent("a", "b"));

  console.log("");

  console.log("Expecting: false");
  console.log(graph.isAdjacent("a", "c"));

  console.log("");

  graph.addVertex("e", ["a", "d"]);
  console.log('Expecting: { a: { "b", "e" }, b: { "a", "c", "d" }, c: { "b" }, d: { "b", "e" }, e: { "a", "d" } }');
  console.log(graph.graph);
  
  console.log("")

  graph = new Graph([["a"]]);

  console.log("Expecting: { a: {} }");
  console.log(graph.graph);

  console.log("");

  graph.addVertex("d", ["a", "b", "c"]);
  console.log("Expecting: { a: { 'd' }, b: { 'd' }, c: { 'd' }, d: { 'a', 'b', 'c' } }");
  console.log(graph.graph);
}

module.exports = Graph;

// Please add your pseudocode to this file
/*******************************************************************************************
 * // this method converts a single path into a graph
 * function populate(graph, path):
 *  iterate over the path with its index and element included:
 *    if element is not a key in graph:
 *      add element as key and initialize value to empty set
 *  
 *    if next element exists:
 *      add the next element to the element's set
 * 
 *      if next element isn't a key in graph:
 *        add next element as key in graph and initialize value to empty set
 * 
 *      add element to next element's set
 * 
 *  return graph
 * 
 * 
 * function isAdjacent(vertex_a, vertex_b):
 *  get set from graph associated with key vertex_a
 *  return true if vertex_b is in set, else false
 * 
 * function add_vertex(vertex, array):
 *  add vertex as key in graph with value initialized to a set made from array
 * 
 *  iterate over each element in array:
 *    if element is not in graph:
 *      add element as key with value initialized to an empty set
 *    add vertex to each element's set in graph
 * ******************************************************************************************/

 // And a written explanation of your solution
/******************************************************************************************** 
 * I can create the graph from an array of paths by creating a key in the graph object for every
 * element in a path. If the element, or vertex, is not in the graph, I initialize it to an empty
 * set. Since the next vertex in the path is adjacent to the current vertex, I can have them both
 * point to each other, or rather put each vertex in the other's adjacency list. 
 * 
 * To check if two vertices are adjacent, I just need to grab one of their sets (values in the graph),
 * and check if the other vertex is in its adjacency list. If it is return true, otherwise false.
 * 
 * To add a vertex, I add it as a key to the graph and set its value to a new set made from the array
 * (adjacency list) that's passed into the method. Next, I iterate over the array to ensure each vertex
 * is added to the graph as a key if it's not already in there. I also need to ensure that each vertex
 * in the adjacency list points back to the added vertex.
 * *********************************************************************************************/

 // Time complexity for: 
 // creating a new graph: O(n) since we must iterate over the entire paths array
 // checking if adjacent: O(1) accessing an element in a set is constant time as is accessing a key in a hash
 // adding a vertex: O(n) since we must iterate over the entire adjacency list