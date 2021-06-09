require "./table_to_graph"

RSpec.describe "table_to_graph" do
  it "converts an HTML table to a friends graph which is a Hash with array adjacency lists" do
    friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Fred</td><td>Jane, Carol, Anesh, Xi</td></tr><tr><td>Carol</td><td>Fred, Anesh, Janelle</td></tr></table>"
    result = {
      "Fred" => ["Jane", "Carol", "Anesh", "Xi"],
      "Jane" => ["Fred"],
      "Carol" => ["Fred", "Anesh", "Janelle"],
      "Anesh" => ["Fred", "Carol"],
      "Xi" => ["Fred"],
      "Janelle" => ["Carol"]
    }
    graph = table_to_graph(friends)

    expect(graph.keys).to match_array(result.keys)

    result.each do |k, v|
      expect(graph[k]).to match_array(result[k])
    end

    friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Gremlin</td><td>Jambaby</td></tr></table>"
    result = {
      "Gremlin" => ["Jambaby"],
      "Jambaby" => ["Gremlin"]
    }

    graph = table_to_graph(friends)

    expect(graph.keys).to match_array(result.keys)

    result.each do |k, v|
      expect(graph[k]).to match_array(result[k])
    end
  end

  it "returns the correct result when the resulting graph is disconnected" do
    friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Gremlin</td><td>Jambaby, Carbonara, Hamtaro, Crain</td></tr><tr><td>Bats</td><td>Custard, Colonel</td></tr><tr><td>Malteser</td><td>Jambaby, Hamtaro, Bartelby, Viper</td></tr><tr><td>Viper</td><td>Malteser, Munchkin, Baconini, Bartelby</td></tr></table>"
    result = {
      "Gremlin" => ["Jambaby", "Carbonara", "Hamtaro", "Crain"],
      "Jambaby" => ["Gremlin", "Malteser"],
      "Carbonara" => ["Gremlin"],
      "Hamtaro" => ["Gremlin", "Malteser"],
      "Crain" => ["Gremlin"],
      "Bats" => ["Custard", "Colonel"],
      "Custard" => ["Bats"],
      "Colonel" => ["Bats"],
      "Malteser" => ["Jambaby", "Hamtaro", "Bartelby", "Viper"],
      "Bartelby" => ["Malteser", "Viper"],
      "Viper" => ["Malteser", "Munchkin", "Baconini", "Bartelby"],
      "Munchkin" => ["Viper"],
      "Baconini" => ["Viper"]
    }
    graph = table_to_graph(friends)

    expect(graph.keys).to match_array(result.keys)

    result.each do |k, v|
      expect(graph[k]).to match_array(result[k])
    end
  end

  it "returns the correct result when a person has no friends :(" do
    friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Gremlin</td><td></td></tr></table>"
    result = {
      "Gremlin" => []
    }
    graph = table_to_graph(friends)

    expect(graph.keys).to match_array(result.keys)

    result.each do |k, v|
      expect(graph[k]).to match_array(result[k])
    end

    friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Gremlin</td><td></td></tr><tr><td>Baconini</td><td></td></tr></table>"
    result = {
      "Gremlin" => [],
      "Baconini" => []
    }
    graph = table_to_graph(friends)

    expect(graph.keys).to match_array(result.keys)

    result.each do |k, v|
      expect(graph[k]).to match_array(result[k])
    end
  end
end
