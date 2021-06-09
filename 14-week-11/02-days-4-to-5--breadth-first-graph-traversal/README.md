# Days 4 to 5: Breadth-first Graph Traversal

![Friends graph](./graph.jpg)

For this challenge we are going to find the length of the shortest distance between two friends (or vertices, rather, which represent friends). To achieve this we'll need to perform a breadth-first search (BFS). Unlike depth-first search (DFS), which travels all the way down a path, a BFS considers all adjacent vertices on each iteration. If we were to do a BFS on the friends graph to find the shortest distance from jan to carl, it might check the friends like so:

1. Is john == carl?
2. Is jambaby == carl?
3. Is carl == carl?

In other words, the algorithm checks the adjacent vertices first (the closest ones to the starting vertex), and then checks the vertices adjacent to those. Since it always checks the closest vertices first, and the furthest last, it's perfect for finding the shortest distance between two vertices!

You should know that this type of search can also help us find the shortest path between two points!

## find_distance(graph, vertex_a, vertex_b) / findDistance(graph, vertexA, vertexB)

Use BFS to return the shortest distance from vertex A to B. If there is no path, return -1. The graph and vertices will always be valid. The graph will always contain vertices and vertices A and B will always be in the graph. We will be using a directed disconnected graph.

If you are asked to find the distance from a vertex back to itself, i.e. a cycle, return the distance of the cycle, rather than 0. Be aware that there might not be a cycle.

```
graph = {
  jan: ["john", "jambaby"],
  john: ["carl"],
  jambaby: [],
  carl: ["jambaby"],
  dave: []
}

find_distance(graph, "jan", "carl")
=> 2

find_distance(graph, "dave", "carl")
=> -1
```

_Hint: A BFS is normally implemented as an iterative algorithm that uses a queue to track which vertices to visit next. Be careful of cycles!_

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
