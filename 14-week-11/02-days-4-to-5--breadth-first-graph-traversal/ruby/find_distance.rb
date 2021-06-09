def find_distance(graph, vertex_a, vertex_b)
  # type your code in here
end

if __FILE__ == $PROGRAM_NAME
  graph = {
    jan: [:john, :jambaby],
    john: [:carl],
    jambaby: [],
    carl: [:jambaby],
    dave: []
  }

  puts "Expecting: 2"
  puts find_distance(graph, :jan, :carl)

  puts

  puts "Expecting: -1"
  puts find_distance(graph, :dave, :carl)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
