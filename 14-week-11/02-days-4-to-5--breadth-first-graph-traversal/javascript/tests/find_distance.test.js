const findDistance = require("../find_distance");

describe("findDistance", () => {
  const graphSmall = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby"],
    dave: []
  };
  
  const graphMed = {
    jan: ["cranberry", "jamboree"],
    john: ["jambaby"],
    jambaby: ["jan", "cranberry"],
    carl: [],
    dave: ["john", "carl"],
    cranberry: [],
    hamtaro: ["jambaby", "dave"],
    jamboree: ["carl", "john"]
  };

  it("returns the shortest distance between two vertices when there's a path between them", () => {
    expect(findDistance(graphSmall, "jan", "carl")).toEqual(2);
    expect(findDistance(graphMed, "dave", "carl")).toEqual(1);
  }); 
  
  it("returns -1 when there is no path between vertices", () => {
    expect(findDistance(graphSmall, "dave", "carl")).toEqual(-1);
    expect(findDistance(graphSmall, "jambaby", "carl")).toEqual(-1);
    expect(findDistance(graphMed, "jamboree", "hamtaro")).toEqual(-1);
  });
  
  it("returns the correct distance when detecting cycles", () => {
    expect(findDistance(graphSmall, "jan", "jan")).toEqual(-1);
    expect(findDistance(graphMed, "jan", "jan")).toEqual(4);
  });
});
