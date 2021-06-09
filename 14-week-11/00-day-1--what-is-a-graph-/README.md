# Day 1: What Is a Graph?

![friends network](./friends.jpg)

If you're familiar with trees, such as the binary tree, then we've got good news for you! You're already familiar with graphs, because they're very similar!

A graph is a data structure that represents how different points or objects are connected to one another. In the image above, we have a graph showing how different people are connected. For example, we see that Anne is connected to Bob, Bob is connected to Carl, and so on. We can also see that Diana is not directly connected to Elisa.

## Why Use Graphs?

Graphs can help us find the shortest distance between two points or determine if two points are even connected. Dijkstra's algorithm, for example, uses a graph to find the shortest distance between two points, and is still used today to figure out how to get from point A to point B on a map. And Facebook uses a graph database instead of a relational database because it performs better for their use case, which is all about representing relationships between people, places, and other things.

There are other use cases for graphs, but we'll let you Google those.

## Key Terms

- Node / vertex: A point on the graph, similar to a node in a tree
- Edge: A connection or path between two points, which we can visualize as a line connecting two nodes, such as the line/edge from Anne to Bob in the image at the top of this README
- Adjacency: Two nodes or vertices are adjacent if they are connected by an edge (e.g. Anne and Bob are adjacent)
- Path: A sequence of edges between two points, similar to plotting a route from your favorite bakery to your home (a path from Anne to Carl: Anne -> Bob -> Carl)

## Types of Graphs

There are several different types of graphs. We'll mention a few here:

- Undirected graph: The edges do not point in any specific direction (e.g. Anne can point to Bob and Bob can point back to Anne)
- Directed graph: Each edge is uni-directional (similar to a Linked List, e.g. Anne can point to Bob, but Bob cannot point back to Anne)
- Weighted graph: Each edge has a cost associated with it (e.g. if Elisa wants to talk to Diana, she can ask Carl or Anne to make that connection, but if Elisa's relationship with Carl is on the rocks, she might weight that more heavily than going through Anne, with whom she is best friends)

You don't need to memorize all of this, nor will we be building all of these graphs. We just want you to be aware of them in case you decide to look further into graphs (there are more though!). For example, if you wanted to learn more about Dijkstra's algorithm, you might want to look into weighted graphs. We'll be focusing on undirected graphs.

## How to Represent a Graph

We can use a number of different underlying data structures to create a graph. For example, we can build a graph from a tree data structure, similar to a Linked List or Binary Tree. Or we can use a hash (object in JS, dictionary in Python...) or a multi-dimensional array as the underlying data structure. In this challenge, we'll be creating our own Graph class using a hash/object as the underlying data structure. The key will be to maintain the rules of the graph, or as we prefer to say its "graphiness".

We suggest you read more about the different methods for representing a graph. Try Googling "adjacency matrix" to get yourself started.

## Our Graph

Today we'll be creating a Graph class that uses a hash/object as the underlying data structure. It'll be an undirected graph consisting of adjacency lists. In other words, each key in the hash/object will have a value that is a set. Each set will be a list of adjacent nodes. Let's take another look at our friends image and then see what it might look like as a graph:

![friends network](./friends.jpg)

```
{
  Anne: [Bob, Elisa, Diana],
  Bob: [Anne, Diana, Carl],
  Elisa: [Anne, Carl],
  Carl: [Bob, Elisa, Diana],
  Diana: [Anne, Bob, Carl]
}
```

## Implement a Graph Class

Let's see if we can gain a better understanding of graphs by building a Graph class.

Before we dive in, let's set up some rules:

- Every vertex in the graph has a corresponding key in the Hash/object being used to store the graph
- All of a vertex's adjacent vertices are listed in an adjacency list stored as the value for that key: `{ a: {"b", "c", "d"} }`
- All values in an adjacency list are unique - there can be no repeats
- The graph consists only of vertices that are connected to other vertices, e.g. there cannot be a key with an empty adjacency list unless there is only one vertex in the entire graph
  - This means we are making a connected graph: one in which there is a path from any vertex to another vertex. Be aware that it is possible to make a disconnected graph.
  - OK: `{ a: {} }` or `{ a: { "b" }, b: { "a" } }`
  - Not OK: `{ a: {}, b: {}, c: {} }` or `{ a: { "c" }, b: {}, c: { "a" } }`

### 1. Initialize a New Object: `initialize(paths)` / `constructor(paths)`

A user should provide an array of paths when instantiating a new object from the Graph class. We'll take care of the array in the next step. For now, simply accept it as an argument and set an instance variable called `graph` to an empty Hash / object. `graph` should be readable on an object instantiated from the class.

```
graph = new Graph(paths)
graph.graph
=> {}
```

### 2. Create the Graph from the Array

When a new Graph object is instantiated, it will be initialized using an array of paths. We need to convert this list of paths to a valid graph. A valid graph contains every vertex as a key, and every adjacent vertex as a value in a set that's associated with that key.

The list of paths is a two-dimensional array, and you may assume that it's always valid. Each path contains a list of connected vertices in the order in which they're connected, i.e. there is an edge between elements that are next to one another in a list:

```
[["a", "b", "c"], ["b", "d"]]
// a is adjacent to b
// b is adjacent to a, c and d
// c is adjacent to b
// d is adjacent to b
```

```
paths = [["a", "b", "c"], ["b", "d"]]
graph = new Graph(paths)
graph.graph
=> {
  a: { "b" },
  b: { "a", "c", "d" },
  c: { "b" },
  d: { "b" }
}
```

_Question: Why do you think we used a set instead of an array to store the adjacency lists?_

Once you've got that working, determine what the worst-case time complexity (Big O) is for converting the array of paths to a graph.

### 3. `is_adjacent(vertex_a, vertex_b)` / `isAdjacent(vertexA, vertexB)`

Returns `true` if two vertices are adjacent, i.e. they're connected by an edge. Otherwise it returns `false`.

```
paths = [["a", "b", "c"], ["b", "d"]]
graph = new Graph(paths)

graph.is_adjacent("a", "b")
=> true

graph.is_adjacent("a", "c")
=> false
```

Once you've got that working, determine the worst-case time complexity (Big O) for determining if two vertices are adjacent.

### 4. `add_vertex(vertex, array)` / `addVertex(vertex, array)`

Add a new vertex to the graph along with its adjacency list. This means that the adjacency lists for existing vertices will also need to be updated.

```
paths = [["a", "b", "c"], ["b", "d"]]
graph = new Graph(paths)

graph.add_vertex("e", ["a", "d"])
graph.graph
=> {
  a: { "b", "e" },
  b: { "a", "c", "d" },
  c: { "b" },
  d: { "b", "e" },
  e: { "a", "d" }
}
```

Once you've got that working, determine the worst-case time complexity (Big O) for adding a vertex.

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
