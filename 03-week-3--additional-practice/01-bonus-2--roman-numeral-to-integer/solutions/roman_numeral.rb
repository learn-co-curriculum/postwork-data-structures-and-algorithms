def roman_numeral(string)
  romans = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }
  total = 0
  idx = 0

  while idx < string.length
    twoChar = (string[idx] + (string[idx + 1] || '')).to_sym

    if !romans[twoChar].nil?
      total += romans[twoChar]
      idx += 2
    else
      total += romans[string[idx].to_sym]
      idx += 1
    end
  end

  total
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 1"
  puts roman_numeral('I')

  puts

  puts "Expecting: 9"
  puts roman_numeral('IX')

  puts

  puts "Expecting: 402"
  puts roman_numeral('CDII')

  # Don't forget to add your own!
  puts

  puts "Expecting: 3"
  puts roman_numeral('III')

  puts

  puts "Expecting: 1900"
  puts roman_numeral('MCM')

  puts

  puts "Expecting: 1999"
  puts roman_numeral('MCMXCIX')

  puts

  puts "Expecting: 44"
  puts roman_numeral('XLIV')

  puts

  puts "Expecting: 223"
  puts roman_numeral('CCXXIII')

  puts

  puts "Expecting: 3848"
  puts roman_numeral('MMMDCCCXLVIII')
end

# Please add your pseudocode to this file
#############################################################################################
 # store important roman numerals in an Object called romans
 # initialize total to 0
 # 
 # iterate over string:
 #    if current character + next character is a key in romans:
 #      add that value to total
 #      skip over next character in iteration
 #    else:
 #      get value where current character is a key in romans
 #      add value to total
 # 
 # return total
#############################################################################################

 # And a written explanation of your solution
#############################################################################################
 # We can store the unique Roman numerals in an Object (key-value pairs), including
 # those where the small Roman numeral comes before the larger Roman numeral (e.g. 'IX').
 # When we iterate over the string, we first check if the current character plus the next
 # character is a key in the Object. If it is, we add the value associated with that key
 # to the total. We'll then need to increment our index in the string by 2. This takes care
 # of those numerals where the small number comes before the big one. If the two characters
 # together aren't a key, we add the value at the single-character key to the total and
 # increment the index by one.
#############################################################################################

