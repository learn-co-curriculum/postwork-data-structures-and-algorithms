require "./graph_dfs"

RSpec.describe "is_path" do
  simple_graph = {
    jan: [:john, :jambaby],
    john: [:carl],
    jambaby: [],
    carl: [:jambaby],
    dave: []
  }

  less_simple_graph = {
    jan: [:john, :jambaby],
    john: [:carl],
    jambaby: [],
    carl: [:jambaby, :dave],
    dave: [:jan],
    mittens: []
  }

  complex_graph = {
    jan: [:john, :jambaby, :malala],
    john: [:carl],
    jambaby: [],
    carl: [:jambaby, :dave, :martin],
    dave: [:jan],
    mittens: [],
    martin: [:mittens],
    malala: [:dave, :carl, :martin, :pirate],
    pirate: [:shiba, :inu],
    shiba: [],
    inu: []
  }

  it "returns true when there is a path between two vertices" do
    expect(is_path(simple_graph, :jan, :carl)).to be true
    expect(is_path(simple_graph, :jan, :jambaby)).to be true
  end

  it "returns false when there is NO path between two vertices" do
    expect(is_path(simple_graph, :jan, :dave)).to be false
    expect(is_path(simple_graph, :dave, :jambaby)).to be false
    expect(is_path(simple_graph, :jan, :jan)).to be false
  end

  it "returns true when there is a path from A to B and A and B are the same vertex" do
    expect(is_path(less_simple_graph, :jan, :jan)).to be true
  end

  it "returns false when there is NO path from A to B and A and B are the same vertex" do
    expect(is_path(simple_graph, :jan, :jan)).to be false
  end

  it "can handle coming across looping paths" do
    expect(is_path(less_simple_graph, :jan, :mittens)).to be false
  end

  it "can handle slightly complex paths" do
    expect(is_path(complex_graph, :carl, :inu)).to be true
  end
end