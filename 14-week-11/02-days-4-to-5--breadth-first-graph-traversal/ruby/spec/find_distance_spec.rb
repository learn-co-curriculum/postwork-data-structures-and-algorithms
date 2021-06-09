require "./find_distance"

RSpec.describe "find_distance" do
  graph_small = {
    jan: [:john, :jambaby],
    john: [:carl],
    jambaby: [],
    carl: [:jambaby],
    dave: []
  }

  graph_med = {
    jan: [:cranberry, :jamboree],
    john: [:jambaby],
    jambaby: [:jan, :cranberry],
    carl: [],
    dave: [:john, :carl],
    cranberry: [],
    hamtaro: [:jambaby, :dave],
    jamboree: [:carl, :john]
  }
  
  it "returns the shortest distance between two vertices when there's a path between them" do
    expect(find_distance(graph_small, :jan, :carl)).to eq 2
    expect(find_distance(graph_med, :dave, :carl)).to eq 1
  end 

  it "returns -1 when there is no path between vertices" do
    expect(find_distance(graph_small, :dave, :carl)).to eq -1
    expect(find_distance(graph_small, :jambaby, :carl)).to eq -1
    expect(find_distance(graph_med, :jamboree, :hamtaro)).to eq -1
  end

  it "returns the correct distance when detecting cycles" do
    expect(find_distance(graph_small, :jan, :jan)).to eq -1
    expect(find_distance(graph_med, :jan, :jan)).to eq 4
  end
end