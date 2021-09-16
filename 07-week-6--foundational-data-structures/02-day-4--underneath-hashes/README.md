# Day 4: Underneath Hashes

## Learning Goals

- Explain how programming languages implement hashes
- Identify the runtime complexity of common hash methods in Big O notation

## Introduction

Now it's time to formally introduce you to the hash. When we talk about hashes
in this lesson, we're referring to the general data structure known as a `Hash`
in Ruby, as an `Object` in JavaScript, a `Dictionary` in Python, and so on.
Just about every language has an implementation of this data structure!

Hashes are used for storing key-value pairs. This allows for quick retrieval of
data — the Big O for accessing a value in a hash is constant time: O(n). But how
does it work under the hood?

## Hash Functions

For a hash to work, we use a **hash function** to determine where in memory to
store information related to that key. Later, we use the same hash function to
determine where to search for a given key.

One way to think about how hashes relate to hash functions is thinking about how
we find a book in a library. We do this by telling a librarian the title and
author of a book, and the librarian tells us precisely where to find the book.

![library book example](https://s3-us-west-2.amazonaws.com/curriculum-content/algorithms/dewey-decimal-arrangement.jpg)

In this analogy, our **key** is the title and author of the book, which we can
use to determine the appropriate card catalog id. The card catalog id (which
comes from the Dewey Decimal System above — think of that as our **hash
function**) tells us exactly where to find the book. If the book is there, we
have our book and all of the information inside. If nothing is there, there is
no book.

Let's start by inserting some books into a hash table structure. We have the
following books: _The Bible_, _Alexander Hamilton_, _Introduction to Physics_,
and _War and Peace_. Based on our hash function, we store the books in the
following locations:

| Index |           Book            |
| ----- | :-----------------------: |
| 000   |                           |
| 100   |                           |
| 200   |        _The Bible_        |
| 300   |                           |
| 400   |                           |
| 500   | _Introduction to Physics_ |
| 600   |                           |
| 700   |                           |
| 800   |      _War and Peace_      |
| 900   |   _Alexander Hamilton_    |

You will see that while the Dewey Decimal System assigns us one of a range of
numbers, we adapt its formula to store each book at the lowest number possible
for each section. So based on that, The Bible is assigned 200, because it falls
under religion. Accordingly, we also assign Introduction to Physics number 500,
War and Peace 800 and Alexander Hamilton 900.

Because we assigned each of our books according to this formula, when we
retrieve a book, we do not need to look through every index to find our books.
Instead, we just look at the place of the book based on the Dewey Decimal
System.

![A massive library](https://s3.amazonaws.com/learn-verified/geroge-peabody-library-horizontal-large-gallery.jpg)

We can _also_ use our formula to tell us both where to insert a book, as well as
to know if a book exists in our collection. If someone asks us if _Eloquent
Javascript_ is in our hash table, we simply visit our index at location 600, see
that nothing is there, and can confidently reply that the book is not located
there.

With a hash table, we look at the data in our key, run it through our hash
function to determine where to place the element and associated data. Later, we
also use the information in the key, run it through our hash function to tell us
where to retrieve this data. With this process, we achieve our goal of **O(n)**
(constant time) for inserting and retrieving elements, irrespective of the
number of elements in our collection.

### Hash Table Collisions

Our hash table currently looks like the following:

| Index |           Book            |
| ----- | :-----------------------: |
| 000   |                           |
| 100   |                           |
| 200   |        _The Bible_        |
| 300   |                           |
| 400   |                           |
| 500   | _Introduction to Physics_ |
| 600   |                           |
| 700   |                           |
| 800   |      _War and Peace_      |
| 900   |   _Alexander Hamilton_    |

What happens if we need to store another book, this time _Introduction to
Biology_? Well, our adapted Dewey Decimal System tells us to store the key at
precisely index 500. The only problem is that the slot is already filled. We
have just encountered a **collision**. A collision is where our hash function
outputs an index that already is assigned to another key in our hash table.

To handle our collision, we apply a technique called _separate chaining_. With
separate chaining, each index points to a linked list. So in our example above
we could place both _Introduction to Physics_ and _Introduction to Biology_ in
the place linked list is located at index 500. Applying the separate chaining
technique, our hash table looks like the following:

| Index |                             Book                             |
| ----- | :----------------------------------------------------------: |
| 000   |                                                              |
| 100   |                                                              |
| 200   |                      [ "*The Bible*" ]                       |
| 300   |                                                              |
| 400   |                                                              |
| 500   | [ "*Introduction to Physics*", "*Introduction to Biology*" ] |
| 600   |                                                              |
| 700   |                                                              |
| 800   |                    [ "*War and Peace*" ]                     |
| 900   |                  [ "*Alexander Hamilton*" ]                  |

In the worst case scenario, all of our inserted elements collide, and we have to
traverse a linked list of length `n` to retrieve an element, so we have **O(n)**
runtime. However, on average collisions do not occur, so we achieve constant
time for lookup, insertion and deletion _on average_.

### Identifying Good Hash Functions

Programming languages that implement hashes use a hash function that minimizes
the chance of a collision occurring. Some properties of a good hash function are:

1. Makes use of all information provided by a given key to maximize the number
   of possible hash values. Note that the real Dewey Decimal System does a
   better job at this: different titles by different authors map to different
   values.
2. Maps similar keys to very different values - making collisions much less likely.

## Conclusion

In this lesson, we learned about **hash tables**. Hash tables use a **hash
function** to output a **hash value**. The hash value determines where to place
the element in memory. Because a hash function produces the same hash value for
a given element, it also gives us fast lookup time to retrieve an element.

When a hash function outputs the same hash value for two different elements we
have a collision. We can resolve a collision by employing separate chaining
where each hash value points to a linked list, and when there is a collision we
attach the element to the linked list.

Because retrieving elements from a linked list is O(n), programming languages
use hash functions that avoid collisions as much as possible.

When you use a hash to solve an algorithm problem, it's useful to know how
hashes work under the hood in order to understand their runtime. Here's a
summary of the Big O of common hash methods. While collisions can occur that may
result in worse performance than listed below, we can generalize the runtime as
follows:

| Method                                           | Big O |
| ------------------------------------------------ | ----- |
| Access (looking for a value with a known key)    | O(1)  |
| Search (looking for a value without a known key) | O(n)  |
| Insertion                                        | O(1)  |
| Deletion                                         | O(1)  |
