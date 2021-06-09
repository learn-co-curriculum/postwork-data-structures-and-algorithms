require "./graph"

RSpec.describe "Graph" do
  let(:graph) { Graph.new([["a", "b", "c"], ["b", "d"]]) }
  let(:result) { { "a" => Set.new(["b"]), "b" => Set.new(["a", "c", "d"]), "c" => Set.new(["b"]), "d" => Set.new(["b"]) } }

  describe "#initialize(paths)" do
    it "can be initialized with an empty list of paths" do
      expect(Graph.new([]).graph).to eq({})
    end

    it "can be initialized with a single vertex in a single path" do
      expect(Graph.new([["a"]]).graph).to eq({ "a" => Set.new })
    end

    it "creates a valid graph from a list of paths" do
      expect(graph.graph).to eq(result)
    end
  end

  describe "is_adjacent(vertex_a, vertex_b)" do
    it "returns true when two vertices are adjacent" do
      expect(graph.is_adjacent("a", "b")).to be true
    end
    
    it "returns false when two vertices are not adjacent" do
      expect(graph.is_adjacent("a", "c")).to be false
    end
  end

  describe "add_vertex(vertex, array)" do
    it "adds the new vertex to the graph with its adjacency list as a set as its value" do
      graph.add_vertex("e", ["a", "d"])

      expect(graph.graph["e"]).to eq(Set.new(["a", "d"]))
    end

    it "updates the existing vertices adjacency lists with the new vertex when adjacent" do
      graph.add_vertex("e", ["a", "d"])

      result["a"].add("e")
      result["d"].add("e")
      result["e"] = Set.new(["a", "d"])

      expect(graph.graph).to eq(result)
    end

    it "adds new vertices to the graph when they're present in the adjacency list" do
      adjacency = ["a", "d", "f", "g"]
      graph.add_vertex("e", adjacency)
      result["a"].add("e")
      result["d"].add("e")
      result["f"] = Set.new(["e"])
      result["g"] = Set.new(["e"])
      result["e"] = Set.new(adjacency)

      expect(graph.graph).to eq(result)
    end
  end
end