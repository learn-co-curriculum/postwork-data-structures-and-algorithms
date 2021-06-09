# Days 3-5: Merge Sort

Merge sort is an efficient sorting algorithm that uses a divide and conquer approach to sorting elements. In other words, it sorts small subsets of the list, merges those subsets, sorts those, and carries on until the whole list has been sorted. It is commonly implemented as a recursive algorithm.

![Merge Sort animation](./merge_sort.gif)

## How Does Merge Sort Work?

![Merge Sort image](./merge_sort.png)

Let's say we have an Array consisting of four elements. First, we divide that into two Arrays of two elements each. Since this is not the smallest possible division, we then divide those into four Arrays total consisting of one element each:

```
[4, 3, 2, 1]
[4, 3] [2, 1]
[4] [3] [2] [1]
```

Next, we sort and combine those elements until we have a merged and sorted list:

```
Sort [4] with [3] => [3, 4]
Sort [2] with [1] => [1, 2]
Sort [3, 4] with [1, 2] => [1, 2, 3, 4]
```

It is common to declare two functions (or more) when implementing a merge sort. The main function is recursive: it divides the list and merges the sorted pieces. It calls a helper function, which might be recursive or iterative. The helper function merges the pieces of the list into a sorted list, and returns it.

Use the language of your choosing. We've included starter files for some languages where you can pseudocode, explain your solution and code.

You should also think of what the time complexity is for this algorithm. This is a tough one because you have to think about both the recursive process and the iterative process to come up with an answer for Big O. You might want to search the web for this one. Check out this [StackExchange discussion](https://softwareengineering.stackexchange.com/questions/297160/why-is-mergesort-olog-n).

## 1. Implement the Helper Function `merge`

`merge` takes two arguments, both of which are Arrays. **Each of those Arrays will already be sorted.** It then merges those Arrays into one sorted Array and returns it. It merges and sorts them by comparing the first element of each Array. The smallest one is removed and pushed onto a new result Array. It does this until one of the Arrays is empty, and then pushes any remaining values onto the result.

Here is an example of what happens during this process:

```
input 1 = [1, 2]
input 2 = [0, 6]
result = []

Is 1 < 0?
  No. Remove 0 and push onto result.

input 1 = [1, 2]
input 2 = [6]
result = [0]

Is 1 < 6?
  Yes. Remove 1 and push onto result.

input 1 = [2]
input 2 = [6]
result = [0, 1]

Is 2 < 6?
  Yes. Remove 2 and push onto result.

input 1 = []
input 2 = [6]
result = [0, 1, 2]

input 1 is empty, add remainder of input 2 to result:
result = [0, 1, 2, 6]
```

Be sure to test your `merge` method with Arrays of different sizes to ensure it's working. What sizes might those Arrays be? Will both inputs always be the same size? If your `merge` method is working, it'll return a sorted list:

```
merge([0, 1], [-2, 4])
=> [-2, 0, 1, 4]
```

And remember, each argument Array to `merge` will already be sorted:

```
// Valid inputs
merge([2, 10], [9, 10, 12])

// Invalid inputs
merge([10, 3], [10, 9, 2])
```

Do not worry about invalid inputs! Just ensure your method works for valid inputs before moving on. You'll need to rely on your own testing skills here! You've got this!

## 2. Implement the Main Function `merge_sort`/`mergeSort`

The main function recursively divides the unsorted input array into pieces until those pieces are as small as possible. It then feeds those pieces to the `merge` helper method. It then combines the results from calling `merge` into one final sorted list that is returned.

Let's take this step by step by breaking this process down into chunks we can test. Keep in mind that you'll be responsible for testing each step. Our tests will only check the final result of calling the main method.

**1. Add the base case**

We want to divide the input into its smallest possible subsets. What length or lengths might the smallest possible subset be? You can also ask yourself: "What might the smallest possible input be?" or "When do I want to stop dividing the Array and return it?" or "What inputs would already be considered sorted no matter what their contents are?"

If you're feeling rusty on recursion: the base case, often an `if` statement, is responsible for stopping the recursive calls.

Test your code. If it's working you'll get the following result:

```
Input []
Output: []

Input: [1]
Output: [1]

Input: [1, 2]
Output: undefined or nil (i.e. default return value for the language you're using)
```

**2. Find the middle**

Store the middle index of the input Array in a variable. Print or return it to check that it's correct. Make sure it's an integer!

```
Input: []
Output: [] // never reaches the middle calculation

Input: [1]
Output: [1] // never reaches the middle calculation

Input: [1, 2]
Output: 1

Input: [1, 2, 3]
Output: 1
```

Once that's working, be sure to remove any print or return statements you used to test your code.

**3. Divide the Array**

Divide the Array into two parts: one part stores all the values up to the middle, and the other part stores all the values from the middle onwards. These are often called `left` and `right`.

Test your work by printing or returning the two parts. Make sure all of the values from the input are present.

```
Input: [1, 2, 3, 4]
Left: [1, 2]
Right: [3, 4]

Input: [1, 2, 3]
Left: [1]
Right: [2, 3]
// Left [1, 2] and Right [3] is also valid
```

Once that's working, be sure to remove any print or return statements you used to test your code.

**4. Divide more!**

Earlier, we said that we need to keep dividing the input until it is divided into the smallest possible pieces. Another way of thinking of this is that we need to keep dividing the input until we hit the base case we declared earlier.

Right now, we are only dividing the list into a `left` side and a `right` side once. How can we keep dividing the list until it's as small as possible? What do we need to do?

You can test your code by printing the values stored in left and right. If the print statement/s are the very last line/s in your code, you should see the following print out:

```
merge_sort([1, 2, 3, 4])
=> [1]
=> [2]
=> [3]
=> [4]
```

Once that's working, be sure to remove any print or return statements you used to test your code.

**5. Sort and merge**

We still haven't called our helper method `merge`, and it's getting lonely. If you recall from earlier in this README, `merge` takes two sorted lists and sorts and merges them into one list. What might we do with this method? What might we provide to it as arguments?

At the end of this step, you should be done!

```
merge_sort([1, 2, 3])
=> [1, 2, 3]

merge_sort([-10, 5, 100, -100])
=> [-100, -10, 5, 100]
```

**6. Take some time to think**

Take some time to understand what's happening as the algorithm recurses. What does the stack look like? What's in each frame? Can you plot it out on paper for small inputs? Try plotting it out when the input Array has 2 elements, 3 elements, or 4 elements. You can also watch your solution in action using this [tool](http://pythontutor.com/visualize.html#mode=edit): don't forget to choose the right language, and then call your function with an argument!

Also think about the problem solving techniques you used. How can you use what you've learned to solve other problems? What did you learn about recursion/recursive programming?

## Before you start coding:

1. Rewrite the problem in your own words
2. Validate that you understand the problem
3. Write your own test cases
4. Pseudocode
5. Code!

**_And remember, don't run our tests until you've passed your own!_**

## How to run your own tests

### Ruby

1. `cd` into the ruby folder
2. `ruby <filename>.rb`

### JavaScript

1. `cd` into the javascript folder
2. `node <filename>.js`

## How to run our tests

### Ruby

1. `cd` into the ruby folder
2. `bundle install`
3. `rspec`

### JavaScript

1. `cd` into the javascript folder
2. `npm i`
3. `npm test`
