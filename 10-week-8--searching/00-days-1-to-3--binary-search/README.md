# Days 1-3: Binary Search

Binary search is a recursive algorithm that searches a sorted list for a target value. For a sorted list, it is faster than iterating over the entire list until the target is found, since a binary search will not visit every single element in the list. Keep in mind that we perform binary searches on sorted datasets only!

## How Does It Work?

Hopefully, you are old enough to remember the phone book (a large alphabetically-ordered directory of businesses and residents of a county or town and their phone numbers) because we're about to dive deep into its pages!

![Phone Book](./phone_book.jpeg)

Let's imagine we're searching for Deirdre Xanadu and we're trying to find the page with the "X" names (let's pretend there's only one page of them). Since Deirdre's last name starts with an "X", she'll probably be close to the end of the phonebook. With our good ol' iterative search, we can start at page 1 or the last page, and look at every page until we find our Xanadacious friend. Starting at page 1 will be quick if there are barely any people whose last names start with the letters "A" through "X", and starting at the last page will only be quick if barely any residents' last names start with letters "Z" through "X". In the worst case, Deirdre will be on the last page or first page, depending on where we start our search, and we will have visited every page.

![Binary Search](./binary_search.gif)

Now let's use a binary search. Instead of starting on the first or last page, we start in the middle of the book. Let's say the last names on this page start with "M". "M" comes before "X", so we take the second half of the book in our hands, locate the middle page of that portion, and go straight there. Let's say we land on the page of "Y" names. "X" comes before "Y", so we take the part of the book with "M" names up to the part with the "Y" names in our hands, find the middle and go there. Let's say we land on "X": we can check that page for Deirdre Xanadu. We found our friend without going to every page!

Here's a summary of the process we just used to find Xanadu:

```
Go to middle of phone book
Last names start with "M"
Is "M" == "X":
  No.
Is "M" < "X":
  Yes. Need to search half going from "M" to "Z".

Go to middle of portion of phone book ("M" to "Z"):
Last names start with "Y"
Is "Y" == "X":
  No.
Is "Y" < "X":
  No. Need to search first half of portion from "M" to "Y"

Go to middle of portion of phone book ("M" to "Y")
Last names start with "X"
Is "X" == "X"
  Yes! Find Xanadu's entry!
```

From the above example, you may notice that we keep dividing the input into two parts: a left side containing everything that comes before the middle, and a right side containing everything after the middle. We then check if the target value we're searching for is less or more than the middle. If the target is less than the middle value, we search the left side. If it's more than the middle, we search the right side. As we search, our input gets smaller and smaller until we either find the target or there is nothing left to search.

Let's take a look at another example:

```
List: [1, 2, 3, 4, 5]
Target: 1

Middle: 3
Is Middle == Target:
  No.
Is Middle < Target:
  No.
Left: [1, 2]
Search Left for Target

Middle: 2
Is Middle == Target:
  No.
Is Middle < Target:
  No.
Left: [1]
Search Left for Target

Middle: 1
Is Middle == Target:
  Yes! Return true
```

## Implement a Binary Search That Returns True or False

Let's try something different today. Below you'll find pseudocode for binary search. Your job is to remove the pseudo part! Assume we're only searching for integers.

```
function binary_search(array, target):
  return false if array is empty

  initialize integer variable middle with middle index of input array
  initialize integer variable middle_value with middle value from array

  return true if middle_value == target

  if middle_value > target:
    return binary_search(left half of input, target)
  else:
    return binary_search(right half of input, target)
```

And here are some test cases to consider:

```
Input: arr = [1, 2, 3], target = 3
Output: true

Input: arr = [3, 5, 9], target = 10
Output: false
```

Once you've got that working, take a moment to think. What is the worst-case time complexity for this algorithm? How does that compare to an iterative search. Why does this only work with sorted inputs?

Also take some time to plot out what's happening on paper using a small input as an example. Maybe try to plot the following:

- Input: arr = [-10, 4, 9, 30, 31], target: 30
- Input: arr = [1, 2, 3], target: 5

## Bonus: Return the Index of the Target

Can you modify the algorithm to return the index of the target? If the target isn't in the input Array, return -1. For the bonus, copy your code from earlier into the function called `binary_search_index`/`binarySearchIndex`, and then modify it. That way all of the tests will run correctly.

```
Input: arr = [1, 2, 3], target = 1
Output: 0

Input: arr = [4, 7, 20], target = 100
Output: -1
```

Use the language of your choosing. We've included starter files for some languages where you can pseudocode, explain your solution and code.

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
