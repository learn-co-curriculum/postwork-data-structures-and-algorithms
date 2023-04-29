function recursiveCount(num = 0) {
  if (num <= 9) {
  console.log(num)
  

  recursiveCount(num + 1)
  }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution

//I make an if statement to establish the base count.
//I then console.log(num) to print num as it returns up the stack
//I make the recursive call of recursiveCount(num + 1)
