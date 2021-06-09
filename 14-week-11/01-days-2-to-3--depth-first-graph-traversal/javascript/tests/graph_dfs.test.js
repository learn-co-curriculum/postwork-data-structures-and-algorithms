const isPath = require("../graph_dfs");

const simpleGraph = {
  jan: ["john", "jambaby"],
  john: ["carl"],
  jambaby: [],
  carl: ["jambaby"],
  dave: []
};

const lessSimpleGraph = {
  jan: ["john", "jambaby"],
  john: ["carl"],
  jambaby: [],
  carl: ["jambaby", "dave"],
  dave: ["jan"],
  mittens: []
};

const complexGraph = {
  jan: ["john", "jambaby", "malala"],
  john: ["carl"],
  jambaby: [],
  carl: ["jambaby", "dave", "martin"],
  dave: ["jan"],
  mittens: [],
  martin: ["mittens"],
  malala: ["dave", "carl", "martin", "pirate"],
  pirate: ["shiba", "inu"],
  shiba: [],
  inu: []
};

describe("isPath", () => {
  it("returns true when there is a path between two vertices", () => {
    expect(isPath(simpleGraph, "jan", "carl")).toBe(true);
    expect(isPath(simpleGraph, "jan", "jambaby")).toBe(true);
  });

  it("returns false when there is NO path between two vertices", () => {
    expect(isPath(simpleGraph, "jan", "dave")).toBe(false);
    expect(isPath(simpleGraph, "dave", "jambaby")).toBe(false);
    expect(isPath(simpleGraph, "jan", "jan")).toBe(false);
  });

  it("returns true when there is a path from A to B and A and B are the same vertex", () => {
    expect(isPath(lessSimpleGraph, "jan", "jan")).toBe(true);
  });

  it("returns false when there is NO path from A to B and A and B are the same vertex", () => {
    expect(isPath(simpleGraph, "jan", "jan")).toBe(false);
  });

  it("can handle coming across looping paths", () => {
    expect(isPath(lessSimpleGraph, "jan", "mittens")).toBe(false);
  });

  it("can handle slightly complex paths", () => {
    expect(isPath(complexGraph, "carl", "inu")).toBe(true);
  });
});
