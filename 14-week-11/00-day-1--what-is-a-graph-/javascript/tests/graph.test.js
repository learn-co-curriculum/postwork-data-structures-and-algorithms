const Graph = require("../graph");

describe("Graph", () => {
  const graph = () => new Graph([["a", "b", "c"], ["b", "d"]]);
  const result = () => ({ a: new Set(["b"]), b: new Set(["a", "c", "d"]), c: new Set(["b"]), d: new Set(["b"]) });

  describe("constructor(paths)", () => {
    it("can be initialized with an empty list of paths", () => {
      expect(new Graph([]).graph).toEqual({});
   });

    it("can be initialized with a single vertex in a single path", () => {
      expect(new Graph([["a"]]).graph).toEqual({ a: new Set });
   });

    it("creates a valid graph from a list of paths", () => {
      expect(graph().graph).toEqual(result());
   });
  });

  describe("isAdjacent(vertexA, vertexB)", () => {
    it("returns true when two vertices are adjacent", () => {
      expect(graph().isAdjacent("a", "b")).toBe(true);
   });
    
    it("returns false when two vertices are not adjacent", () => {
      expect(graph().isAdjacent("a", "c")).toBe(false);
   });
 });

 describe("addVertex(vertex, array)", () => {
  it("adds the new vertex to the graph with its adjacency list as a set as its value", () => {
    const myGraph = graph();
    myGraph.addVertex("e", ["a", "d"]);

    expect(myGraph.graph["e"]).toEqual(new Set(["a", "d"]));
  });

  it("updates the existing vertices adjacency lists with the new vertex when adjacent", () => {
    const myGraph = graph();
    myGraph.addVertex("e", ["a", "d"]);

    const myResult = result();
    myResult["a"].add("e");
    myResult["d"].add("e");
    myResult["e"] = new Set(["a", "d"]);

    expect(myGraph.graph).toEqual(myResult);
  });

  it("adds new vertices to the graph when they're present in the adjacency list", () => {
    const adjacency = ["a", "d", "f", "g"];
    const myGraph = graph();

    myGraph.addVertex("e", adjacency);

    const myResult = result();
    myResult["a"].add("e");
    myResult["d"].add("e");
    myResult["f"] = new Set(["e"]);
    myResult["g"] = new Set(["e"]);
    myResult["e"] = new Set(adjacency);

    expect(myGraph.graph).toEqual(myResult);
  });
  });
});
