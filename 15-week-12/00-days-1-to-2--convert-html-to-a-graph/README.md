# Days 1 to 2: Convert an HTML Table to a Graph

For this challenge, you'll be provided with a string of HTML representing a table of friends. You'll need to convert the table to an undirected graph. The final graph may be disconnected, i.e. there might not be a path from each person to every other person. The string will always contain a valid HTML table with entries in it, and the table will always have the same format: a header row followed by rows which contain the friends data, with two cells per row.

Note that the returned graph is a Hash/Object and the adjacency lists are arrays. Also, although the table stored in the string in the example below is spaced with carriage returns, the string provided to your function will not be. Instead, it'll always be a continuous string like so: `"<table><tr>..."`. Spacing is shown below to help you understand how the data is represented in the table.

```
friends = "<table>
  <tr>
    <th>Person</th>
    <th>Friends</th>
  </tr>
  <tr>
    <td>Fred</td>
    <td>Jane, Carol, Anesh, Xi</td>
  </tr>
  <tr>
    <td>Carol</td>
    <td>Fred, Anesh, Janelle</td>
  </tr>
</table>"

table_to_graph(friends)
=> {
  "Fred": ["Jane", "Carol", "Anesh", "Xi"],
  "Jane": ["Fred"],
  "Carol": ["Fred", "Anesh", "Janelle"],
  "Anesh": ["Fred", "Carol"],
  "Xi": ["Fred"],
  "Janelle": ["Carol"]
}
```

Use the language of your choosing. We've included starter files for some languages where you can pseudocode, explain your solution and code.

## Before you start coding:

1. Rewrite the problem in your own words
2. Validate that you understand the problem
3. Write your own test cases
4. Pseudocode
5. Code!

**_And remember, don't run our tests until you've passed your own!_**

## How to run your own tests

### Ruby

1. `cd` into the ruby folder
2. `ruby <filename>.rb`

### JavaScript

1. `cd` into the javascript folder
2. `node <filename>.js`

## How to run our tests

### Ruby

1. `cd` into the ruby folder
2. `bundle install`
3. `rspec`

### JavaScript

1. `cd` into the javascript folder
2. `npm i`
3. `npm test`
