# Day 2: Introduction to Space Complexity

Space complexity measures how much working memory an algorithm requires. Specifically it measures how the space requirements grow as the input grows. Sound familiar? If this reminds you of time complexity, you're correct! We use the same Big O notation to describe how much space a procedure needs in the worst case.

Just like time complexity, we calculate space complexity when we're considering competing solutions or when we have specific space requirements we must meet. In game development, for example, engineers are often allocated upper limits for how much space each process may use, such as running the audio engine or rendering certain types of effects.

If you're still struggling with the concept of time complexity, you might want to take 15 minutes to research Big O and get more comfortable with it before moving forward. Here are two resources you might wisht to read:
- [Interview Cake: Big O Notation](https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity)
- [Rob Bell: A Beginner's Guide to Big O Notation](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)

## Refresher

The important things to remember when calculating time complexity are the same for space complexity:
- Calculate for the worst case
- Focus on the weakest link (the part that will take up the most space)
- Ignore the other details

### Common Notations

Here are some of the commonly used Big O values, though there are more, in order from most desirable to least desirable:

1. Constant O(1): The amount of space required never changes, regardless of the input
2. Logarithmic O(log n): As the size of the input increases exponentially, the amount of space required grows linearly
3. Linear O(n): The amount of space required is equal to the size of the input
4. Quadratic O(n<sup>2</sup>): The amount of space required is the square of the input

## Calculating Space Complexity

When we calculate space complexity, we consider the size of the input as well as the extra space we're allocating for the algorithm to complete successfully. Let's take a look at some examples to see what this means.

### Constant Space O(1)

```
function add(x, y):
  return x + y
```

This function adds two numbers and returns the result. The inputs will be integers, and the return value will also be an integer. It doesn't matter what those integers are, the space requirements will always be the same for any given inputs.

### Logarithmic Space O(log n)

```
/* for sorted arrays only */

function binary_search(array, target):
  if array is empty:
    return false

  middle = array[array length / 2]

  if middle == target:
    return true
  
  if middle < target:
    return binary_search(left half of array)
  else:
    return binary_search(right half of array)
```

The function above is recursive and requires logarithmic space: as the input size grows exponentially, the space required grows linearly.

Each time it recurses it cuts the input array in half. If you recall from the time complexity reading, an algorithm _might_ take O(log n) runtime if the input is consistently being divided. The same is true for space complexity.

Since the above method is recursive, we can think of the space in terms of the number of stack frames required for any input. If the target value isn't in the input array, the number of frames will be as follows:

| Input Length | Frames |
|--------|--------|
| 1 | 1 |
| 2 | 2 |
| 3 | 2 |
| 4 | 3 |
| 5 | 3 |
| 10 | 4 |

### Linear Space O(n)

```
function sum_array(array):
  sum = 0

  iterate over array:
    sum = sum + array element

  return sum
```

This procedure stores an integer variable and requires an input array to run. If we were to code this fully using a `for` or `while` loop, we'd also have to store another variable for the iteration (the one commonly known as `i`). 

The integer variables, such as `sum` and `i` would require constant space, since they'll only ever store a single integer each. The input array, however, will have varying space requirements because its length is not fixed. The function could be called with an array that's empty or contains 1,000 elements. Therefore, this procedure requires O(n) space: the input array is the weakest link!

### Quadratic Space O(n<sup>2</sup>)

```
/* a really useless function */

function quadratic_recurse(num):
  total_times = num * num

  function recurse(count):
    if count == total_times:
      return
    
    recurse(count + 1)

  recurse(0)
```

This function is recursive and requires quadratic space. Once again, we can think of the required space in terms of total stack frames. If the input number is 1, 1 stack frame is required. If the input is 2, 4 stack frames, and if the input is 4, 16 stack frames are required. 

## Recursive Gotcha

When thinking about the space complexity of a recursive function, we need to consider how deep the recursion will go in the worst case. In other words, we aren't interested in the total number of stack frames over time, but rather, the deepest depth or the largest number of frames that will be on the stack at any given time. Keep in mind that the stack grows and shrinks as recursive calls are made and then begin returning. A recursive call increases the stack, while hitting a return statement reduces its size.

```
function big_sum(array):
  total = 0

  function add(count):
    if count == array length:
      return
    
    iterate over each element in array:
      total = total + element
      add(count + 1)

  add(0)
  return total
```

The above function adds array length number of frames to the stack for every element in the input array. Let's say the input array is `[1, 2]`. `add` will recurse with a `count` of 1, and will then recurse again with a `count` of 2, so two frames are on the stack. At this point the `count` equals the array length, so the frame will be popped from the stack, reducing its size. As it turns out, the largest number of frames on the stack (or the deepest depth), equals O(n) - i.e. the length fo the input array - for this function.

## Conclusion

We can use Big O notation to represent the space complexity of an algorithm, similar to how we use it for time complexity. To calculate the space complexity, we must consider all of the data required for the algorithm to run. We can then pinpoint the weakest link with the worst case in mind and use that to determine Big O. And don't forget, we have to consider how much space the input requires!

## Further Resources

- [Understanding Space Complexity](https://www.baeldung.com/cs/space-complexity)
- [Space Complexity of Algorithms](https://www.studytonight.com/data-structures/space-complexity-of-algorithms#)