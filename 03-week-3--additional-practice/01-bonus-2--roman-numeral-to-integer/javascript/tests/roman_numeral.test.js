const romanNumeral = require('../roman_numeral');

test('handles small roman numerals', () => {
  expect(romanNumeral('I')).toBe(1);
  expect(romanNumeral('III')).toBe(3);
});

test('handles instances where the smaller numeral comes before the larger one', () => {
    expect(romanNumeral('IX')).toBe(9);
    expect(romanNumeral('MCM')).toBe(1900);
    expect(romanNumeral('MCMXCIX')).toBe(1999);
    expect(romanNumeral('CDII')).toBe(402);
    expect(romanNumeral('XLIV')).toBe(44);
});

test('handles numbers in the hundreds and low thousands', () => {
  expect(romanNumeral('CCXXIII')).toBe(223);
  expect(romanNumeral('MMMDCCCXLVIII')).toBe(3848);
});
