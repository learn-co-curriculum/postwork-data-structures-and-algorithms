require "./balancing"
require "./spec/validation_methods"

RSpec.describe "balanced BSTs" do
  context "three_to_twenty" do
    it "returns the root node of a valid BST" do
      expect(Validator.bst_to_array(three_to_twenty)).to eq([3, 5, 6, 9, 10, 20])
    end
  
    it "returns the root of a balanced BST" do
      expect(Validator.balanced?(three_to_twenty)).to be true
    end
  end

  context "ten_to_two_hundred" do
    it "returns the root node of a valid BST" do
      expect(Validator.bst_to_array(ten_to_two_hundred)).to eq([10, 11, 30, 100, 200])
    end
  
    it "returns the root of a balanced BST" do
      expect(Validator.balanced?(ten_to_two_hundred)).to be true
    end
  end
end