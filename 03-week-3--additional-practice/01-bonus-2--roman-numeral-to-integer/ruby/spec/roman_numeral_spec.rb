require './roman_numeral'

RSpec.describe '#roman_numeral' do
  it 'handles small roman numerals' do
    expect(roman_numeral('I')).to eq(1)
    expect(roman_numeral('III')).to eq(3)
  end

  it 'handles instances where the smaller numeral comes before the larger one' do
    expect(roman_numeral('IX')).to eq(9)
    expect(roman_numeral('MCM')).to eq(1900)
    expect(roman_numeral('MCMXCIX')).to eq(1999)
    expect(roman_numeral('CDII')).to eq(402)
    expect(roman_numeral('XLIV')).to eq(44)
  end

  it 'handles numbers in the hundreds and low thousands' do
    expect(roman_numeral('CCXXIII')).to eq(223)
    expect(roman_numeral('MMMDCCCXLVIII')).to eq(3848)
  end
end
