function binarySearch(arr, target) {
  if (arr.length === 0) {
    return false;
  }

  const middle = Math.floor(arr.length / 2);
  const middleValue = arr[middle];

  if (middleValue === target) {
    return true;
  }

  const searchSide = middleValue > target ? 
    arr.slice(0, middle) : arr.slice(middle + 1);
  
  return binarySearch(searchSide, target);
}

// BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
function binarySearchIndex(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  const middle = Math.floor(arr.length / 2);
  const middleValue = arr[middle];

  if (middleValue === target) {
    return middle;
  }

  if (middleValue > target) {
    return binarySearchIndex(arr.slice(0, middle), target);
  } else {
    const idx = binarySearchIndex(arr.slice(middle + 1), target);

    if (idx === -1) {
      return -1;
    }

    return idx + middle + 1;
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", binarySearch([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", binarySearch([3, 5, 9], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", binarySearch([3, 5, 9, 20], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", binarySearch([3, 5, 9, 20], -10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", binarySearch([3, 5, 9, 20], 9));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", binarySearch([], 9));

  // UNCOMMENT FOR BONUS
  console.log("");
  console.log("Expecting: 0");
  console.log("=>", binarySearchIndex([1, 2, 3], 1));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", binarySearchIndex([4, 7, 20], 100));

  console.log("");

  console.log("Expecting: 6");
  console.log("=>", binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8], 7));

  console.log("");

  console.log("Expecting: 4");
  console.log("=>", binarySearchIndex([4, 7, 20, 30, 40], 40));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8], 3));
}

module.exports = {
  binarySearch,
  binarySearchIndex
};

// Add a written explanation of your solution
/****************************************************************************************
 * Big O time complexity is O(log n) because the input is divided on each recursive call.
 * Let's assume we're searching for a value not in the list. The following number of 
 * recursive calls are made for the following input sizes:
 * Input size 1 => Recursive calls 1
 * Input size 2 => Recursive calls 2
 * Input size 3 => Recursive calls 2
 * Input size 4 => Recursive calls 3
 * Input size 10 => Recursive calls 4
 * 
 * The true/false algorithm is already explained in the README so I'll explain the bonus.
 * To find the index, we have to return the middle index when the target is found, otherwise
 * return -1. This is simple when the function only searches left. We can just return the middle,
 * or rather the result of calling the function on the left side. Things get a little complicated
 * when we search the right side. Since we're always dividing the input into smaller and smaller
 * subsets, it means the middle on each recursive call will no longer reflect the actual location
 * of the target when searching the right side. This is because the input only contains the right
 * half of the previous input. We also need to make sure we return -1 if the target isn't found. 
 * 
 * So for the right side, we store the result of the recursive call in a variable. This will be the 
 * middle idx when the target is found or -1. If it's -1, we need to return that value. Otherwise, 
 * we return the result of adding the idx to the middle value in that frame and then add one. We add
 * one because we removed the middle value from the input when we made the recursive call, and we need
 * to make up for that. Let's take a look at a small example:
 * 
 * arr = [1, 2, 3], target = 3, expected output = 2
 * 
 * If we don't add the middle or 1, we'll get 0 as the result, which is incorrect:
 * Initial call: [1, 2, 3]
 * Middle: 1
 * Middle value: 2
 * Go Right
 * 
 * Recursive call 1: [3]
 * Middle: 0
 * Middle value: 3
 * Found
 * Return Middle up stack: 0
 * 
 * Initial call receives 0
 * Return 0
 * 
 * Now let's see what happens when we add the middle + 1 every time we go right:
 * Initial call: [1, 2, 3]
 * Middle: 1
 * Middle value: 2
 * Go Right
 * 
 * Recursive call 1: [3]
 * Middle: 0
 * Middle value: 3
 * Found
 * Return Middle up stack: 0
 * 
 * Initial call receives 0
 * Adds Middle and 1 to 0: 0 + 1 (<- value of Middle at initial call) + 1
 * Returns 2
 * ****************************************************************************************/