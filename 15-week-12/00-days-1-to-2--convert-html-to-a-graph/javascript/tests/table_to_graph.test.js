const tableToGraph = require("../table_to_graph");

describe("tableToGraph()", () => {
  test("converts an HTML table to a friends graph which is a Hash with array adjacency lists", () => {
    let friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Fred</td><td>Jane, Carol, Anesh, Xi</td></tr><tr><td>Carol</td><td>Fred, Anesh, Janelle</td></tr></table>";
    let result = {
      "Fred": ["Jane", "Carol", "Anesh", "Xi"],
      "Jane": ["Fred"],
      "Carol": ["Fred", "Anesh", "Janelle"],
      "Anesh": ["Fred", "Carol"],
      "Xi": ["Fred"],
      "Janelle": ["Carol"]
    };
    let graph = tableToGraph(friends);

    expect(Object.keys(graph).sort()).toEqual(Object.keys(result).sort());

    for (const key in result) {
      expect(graph[key].sort()).toEqual(result[key].sort());
    }

    friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Gremlin</td><td>Jambaby</td></tr></table>";
    result = {
      "Gremlin": ["Jambaby"],
      "Jambaby": ["Gremlin"]
    };
    graph = tableToGraph(friends);

    expect(Object.keys(graph).sort()).toEqual(Object.keys(result).sort());

    for (const key in result) {
      expect(graph[key].sort()).toEqual(result[key].sort());
    }
  });

  test("returns the correct result when the resulting graph is disconnected", () => {
    let friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Gremlin</td><td>Jambaby, Carbonara, Hamtaro, Crain</td></tr><tr><td>Bats</td><td>Custard, Colonel</td></tr><tr><td>Malteser</td><td>Jambaby, Hamtaro, Bartelby, Viper</td></tr><tr><td>Viper</td><td>Malteser, Munchkin, Baconini, Bartelby</td></tr></table>";
    let result = {
      "Gremlin": ["Jambaby", "Carbonara", "Hamtaro", "Crain"],
      "Jambaby": ["Gremlin", "Malteser"],
      "Carbonara": ["Gremlin"],
      "Hamtaro": ["Gremlin", "Malteser"],
      "Crain": ["Gremlin"],
      "Bats": ["Custard", "Colonel"],
      "Custard": ["Bats"],
      "Colonel": ["Bats"],
      "Malteser": ["Jambaby", "Hamtaro", "Bartelby", "Viper"],
      "Bartelby": ["Malteser", "Viper"],
      "Viper": ["Malteser", "Munchkin", "Baconini", "Bartelby"],
      "Munchkin": ["Viper"],
      "Baconini": ["Viper"]
    };
    graph = tableToGraph(friends);

    expect(Object.keys(graph).sort()).toEqual(Object.keys(result).sort());

    for (const key in result) {
      expect(graph[key].sort()).toEqual(result[key].sort());
    }
  });

  test("returns the correct result when a person has no friends :(", () => {
    let friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Gremlin</td><td></td></tr></table>";
    let result = {
      "Gremlin": []
    };
    let graph = tableToGraph(friends);

    expect(Object.keys(graph).sort()).toEqual(Object.keys(result).sort());

    for (const key in result) {
      expect(graph[key].sort()).toEqual(result[key].sort());
    }

    friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Gremlin</td><td></td></tr><tr><td>Baconini</td><td></td></tr></table>";
    result = {
      "Gremlin": [],
      "Baconini": []
    };
    graph = tableToGraph(friends);

    expect(Object.keys(graph).sort()).toEqual(Object.keys(result).sort());

    for (const key in result) {
      expect(graph[key].sort()).toEqual(result[key].sort());
    }
  });
});