// function reverseString(str) {
//   return str.split()
// //   let answer = str.split()
// // console.log(answer)
  
// }
function reverseString(str) {
  var newString = '';
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString.toString();
}




if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// we want whatever the string inside the argument in reverse
//  My thoughts: .revrse() reverses the string to cause the string to go into revrese order



// And a written explanation of your solution
// My thoughts were since I am dealing with methods that usally works only with arrays I assumed that the arrgument was filled with array of strings.
// So since I know you never want to tamper with the original array, you would have to copy the array
// Once you copy it then you want to apply the .reverse() method to revrse the string and then have the .join() method to join the words togethor