require 'set'

class Graph
  def initialize(paths)
  end

  def is_adjacent(vertex_a, vertex_b)
  end

  # array is an adjacency list
  def add_vertex(vertex, array)
  end
end

if __FILE__ == $PROGRAM_NAME
  graph = Graph.new([])

  puts "Expecting: {}"
  puts graph.graph

  puts

  graph = Graph.new([["a", "b", "c"], ["b", "d"]])

  puts 'Expecting: { a: { "b" }, b: { "a", "c", "d" }, c: { "b" }, d: { "b" }}'
  puts graph.graph

  puts

  # Don't forget to add your own!

  puts "Expecting: true"
  puts graph.is_adjacent("a", "b")

  puts

  puts "Expecting: false"
  puts graph.is_adjacent("a", "c")

  puts

  graph.add_vertex("e", ["a", "d"])
  puts 'Expecting: { a: { "b", "e" }, b: { "a", "c", "d" }, c: { "b" }, d: { "b", "e" }, e: { "a", "d" } }'
  puts graph.graph
end

# Please add your pseudocode to this file
# And a written explanation of your solution
