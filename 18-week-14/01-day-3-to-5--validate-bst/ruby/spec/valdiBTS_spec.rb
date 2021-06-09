require './validBTS'

RSpec.describe '#validBTS' do

  it "should validate the example-1" do
    def T(v,l,r)
      return Node.new(v, l, r)
    end

    expect(is_valid_bst(T(2, T(1, nil, nil), T(3, nil, nil)))).to eql(true)
  end

  it "should validate the example-2" do
    def T(v,l,r)
      return Node.new(v, l, r)
    end

    expect(is_valid_bst(T(5, T(1, nil, nil), T(4, T(3, nil, nil), T(6, nil, nil))))).to eql(false)
  end

end