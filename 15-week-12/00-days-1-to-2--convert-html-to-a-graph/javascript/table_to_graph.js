function tableToGraph(friends) {
  // type your code here
}

if (require.main === module) {
  function printResults(obj) {
    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }

  // add your own tests in here
  const friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Fred</td><td>Jane, Carol, Anesh, Xi</td></tr><tr><td>Carol</td><td>Fred, Anesh, Janelle</td></tr></table>";
  const result = {
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
}

module.exports = tableToGraph;

// Please add your pseudocode to this file
// And a written explanation of your solution
