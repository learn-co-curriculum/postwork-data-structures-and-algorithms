def is_path(graph, vertex_a, vertex_b)
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
  
  puts "Expecting: true"
  puts is_path(graph, :jan, :carl)

  puts

  puts "Expecting: false"
  puts is_path(graph, :jan, :dave)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
