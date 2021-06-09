function recursiveCount(num = 0) {
  if (num >= 10) {
    return;
  }

  console.log(num);
  recursiveCount(num + 1);

  // THIS IS ALSO A VALID OPTION INSTEAD OF THE ABOVE
  // recursiveCount(++num);

  // THIS WILL CAUSE A STACK OVERFLOW. WHY?
  // recursiveCount(num++);

  // IF YOU LOG NUM BELOW, THE NUMBERS PRINT BACKWARDS FROM 9 TO 0. WHY?
  // console.log(num);
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
