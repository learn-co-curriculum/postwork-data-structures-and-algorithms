function tableToGraph(friends) {
  const dataString = friends.slice(55, -18).replace(/<\/tr><tr>/g, "");
  const data = dataString.split("</td><td>");
  const graph = {};

  for (let idx = 0; idx < data.length; idx += 2) {
    const vertex = data[idx];
    const friendsList = data[idx + 1] !== "" ? data[idx + 1].split(", ") : [];
    
    graph[vertex] = friendsList;

    friendsList.forEach(friend => {
      if (!graph[friend]) {
        graph[friend] = [];
      }

      if(!graph[friend].includes(vertex)) {
        graph[friend].push(vertex);
      }
    });
  }

  return graph;
}

if (require.main === module) {
  function printResults(obj) {
    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
  // add your own tests in here
  let friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Fred</td><td>Jane, Carol, Anesh, Xi</td></tr><tr><td>Carol</td><td>Fred, Anesh, Janelle</td></tr></table>";
  let result = {
    Fred: ["Jane", "Carol", "Anesh", "Xi"],
    Jane: ["Fred"],
    Carol: ["Fred", "Anesh", "Janelle"],
    Anesh: ["Fred", "Carol"],
    Xi: ["Fred"],
    Janelle: ["Carol"]
  };

  console.log("Expecting: ");
  console.log(printResults(result));
  console.log("");
  console.log("Got: ");
  console.log(printResults(tableToGraph(friends)));

  console.log("");

  friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Gremlin</td><td>Jambaby, Carbonara, Hamtaro, Crain</td></tr><tr><td>Bats</td><td>Custard, Colonel</td></tr><tr><td>Malteser</td><td>Jambaby, Hamtaro, Bartelby, Viper</td></tr><tr><td>Viper</td><td>Malteser, Munchkin, Baconini, Bartelby</td></tr></table>"
  result = {
    Gremlin: ["Jambaby", "Carbonara", "Hamtaro", "Crain"],
    Jambaby: ["Gremlin", "Malteser"],
    Carbonara: ["Gremlin"],
    Hamtaro: ["Gremlin", "Malteser"],
    Crain: ["Gremlin"],
    Bats: ["Custard", "Colonel"],
    Custard: ["Bats"],
    Colonel: ["Bats"],
    Malteser: ["Jambaby", "Hamtaro", "Bartelby", "Viper"],
    Bartelby: ["Malteser", "Viper"],
    Viper: ["Malteser", "Munchkin", "Baconini", "Bartelby"],
    Munchkin: ["Viper"],
    Baconini: ["Viper"]
  };

  console.log("Expecting: ");
  console.log(printResults(result));
  console.log("");
  console.log("Got: ");
  console.log(printResults(tableToGraph(friends)));

  console.log("");

  friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Gremlin</td><td>Jambaby</td></tr></table>";
  result = {
    Gremlin: ["Jambaby"],
    Jambaby: ["Gremlin"]
  };

  console.log("Expecting: ");
  console.log(printResults(result));
  console.log("");
  console.log("Got: ");
  console.log(printResults(tableToGraph(friends)));

  console.log("");

  friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Gremlin</td><td></td></tr></table>";
  result = {
    Gremlin: []
  };

  console.log("Expecting: ");
  console.log(printResults(result));
  console.log("");
  console.log("Got: ");
  console.log(printResults(tableToGraph(friends)));

  console.log("");

  friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Gremlin</td><td></td></tr><tr><td>Baconini</td><td></td></tr></table>";
  result = {
    Gremlin: [],
    Baconini: []
  };

  console.log("Expecting: ");
  console.log(printResults(result));
  console.log("");
  console.log("Got: ");
  console.log(printResults(tableToGraph(friends)));

  console.log("");
}

module.exports = tableToGraph;

// Please add your pseudocode to this file
/////////////////////////////////////////////////////////////////////////////////////////////
// initialize a variable, data_string, and store the parts of the string between the TDs
// initialize data and split data_string's cells into an array, so that the left cell always
//     comes just before the right cell
// initialize a Hash/Object called graph
//
// iterate over every other element of data:
//   store the friends in an array (friends are the next element in data)
//   add the current friend as a key in the graph
//   set the value to the friends array
//   set each friend as a key in the graph and add the current friend to their adjacency lists
//     skipping duplicates
//
// return graph
/////////////////////////////////////////////////////////////////////////////////////////////

// And a written explanation of your solution
/////////////////////////////////////////////////////////////////////////////////////////////
// From the prompt I know that there will always be at least one friend in the table. However,
// there is no guarantee that that friend will have any friends :(  I also know that the 
// table will always have the same HTML markup, just with a different number of rows.
//
// I figured that I should first split the table into an array, so that each element of the
// array would hold the friend data in a specific order. For example, for a table with only
// two cells, my array would look like this: ["Jam", "Gran, Minnie, Tabitha"] or [left cell, right cell]
// Now I can iterate over the array and know that every other element is an adjacency list
// for the friend in the element just before it.
//
// When I iterate over the array, I increase the index by 2 each time because of how my
// array is ordered. I set the currently iterated over element as the key in the graph,
// and then split the next element into an array of strings, which then becomes the value
// of the key in the graph (the adjacency list). I then need all of those friends in the 
// adjacency list to point back to the original friend/key, but I have to ensure that if 
// that friend is already a key in the graph that I don't duplicate any data in their adjacency 
// list.
/////////////////////////////////////////////////////////////////////////////////////////////