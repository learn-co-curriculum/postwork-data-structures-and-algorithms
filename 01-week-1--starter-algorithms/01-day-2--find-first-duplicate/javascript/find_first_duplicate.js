function findFirstDuplicate(arr) {
  let newVar = ""
  for(i = 0; i < arr.length; i++) {
    if( arr[i] == arr[i+1]) {
      newVar = arr[i]
    } }
    if (newVar.length == 0 ) {
      newVar = -1
    }
    return newVar
  

}
  //  arr.forEach( i => { for( i = 0 < arr.length; i++){
  //   if (i === arr.indexOf(); i++ ){
  //     return i
  //   } 
    
   
  
  
    
  
  // )
  
  
// for(let i = 0 < arr.length; i++) {
//   for(let j = 0 < arr.length;i++){
//     if()
//   }
// }
// }
// indexOf()
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;












// Given an Array, find the first duplicate value that occurs. 
// If there are no duplicates, return -1.

///## Before you start coding:

//1. Rewrite the problem in your own words

// In the array find the copied values in the Array
//  if there are no copys return -1

// 2. Validate that you understand the problem


// 3. Write your own test cases

// 4. Pseudocode
 
// filter the array for same numbers

// 5. Code!

// Please add your pseudocode to this file
// And a written explanation of your solution
