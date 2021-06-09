# Hash Table

## Objectives

- Learn the components of a hash table.
- Learn about collisions and how to resolve them.
- Learn the role of a hash function and the attributes of a good hash function.

## Hash Tables

![](https://s3.amazonaws.com/learn-verified/reintroduce-415x400.png)

Now it's time to formally introduce you to the hash. A hash table is where information related to a key is assigned to a specific index.

For a hash to work, we use a **hash function** to determine where exactly to store a information related to that key. Later, use the same hash function to determine where to search for a given key.

## A library as an analogy

One way to think about how hashes relate to hash functions is thinking about how we find a book in a library. We do this by telling a librarian the title and author of a book, and the librarian tells us precisely where to find the book.

![](https://s3-us-west-2.amazonaws.com/curriculum-content/algorithms/dewey-decimal-arrangement.jpg)

So here our key is the title and author of the book, which then responds with a card catalogue id. The cart catalogue id (which comes from the Dewey Decimal System above) tells us exactly where to find the book. If the book is there, we have our book and all of the information inside. If nothing is there, there is no book.

So let's start with inserting some books. We have the following books: _The Bible_, _Alexander Hamilton_, _Introduction to Physics_, and _War and Peace_. Based on our hash function, we store the books in the following locations:

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

You will see that while the Dewey Decimal System assigns us one of a range of numbers, we adapt its formula to store each book at the lowest number possible for each section. So based on that, The Bible is assigned 200, because it falls under religion. Accordingly, we also assign Introduction to Physics number 500, War and Peace 800 and Alexander Hamilton 900.

Because we assigned each of our books according to this formula, when we retrieve a book, we do not need to look through every index to find our books, instead we just look at the place of the book based on the Dewey Decimal System.

![](https://s3.amazonaws.com/learn-verified/geroge-peabody-library-horizontal-large-gallery.jpg)

> A massive library

So we use our formula to tell us both where to insert a book.

And we also use our formula to know if a book exists in our collection. If someone asks us if _Eloquent Javascript_ is in our hash table, we simply visit our index at location 600, see that nothing is there, and can confidently reply that the book is not located there. Because our formula tells us where to retrieve a book we are able to retrieve and insert an element in constant time.

So with a hash table, we look at the data in our key, run it through our hash function to determine where to place the element and associated data. Later, we also use the information in the key, run it through our hash function to tell us where to retrieve this data. With this process we achieve our goal of constant time for inserting and retrieving elements irrespective of the number of elements in our collection.

### The Problem: Collision

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

Now what happens if we need to store another book, this time _Introduction to Biology_. Well, our adapted Dewey Decimal System tells us to store the key at precisely index 500. The only problem is that the slot is already filled. We have just encountered a **collision**. A collision is where our hash function outputs an index that already is assigned to another key in our hash table.

To handle our collision we apply a technique called _separate chaining_. With separate chaining, each index points to a linked list. So in our example above we could place both _Introduction to Physics_ and _Introduction to Biology_ in the place linked list is located at index 500. Applying the separate chaining technique, our hash table looks like the following:

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

Note that in the worse case scenario, all of our inserted elements collide and we have to traverse a linked list of length n to retrieve an element, so we have O(n). However, on average collisions do not occur, so we retrieve constant time for lookup, insertion and deletion _on average_.

## Choosing a good hash function

Going forward, we should choose a hash function that minimizes the chance of a collision occurring. Some properties of a good hash function.

1. Makes use of all information provided by a given key to maximize the number of possible hash values. Note that the real Dewey Decimal System does a better job at this: different titles by different authors map to different values.
2. Maps similar keys to very different values - making collisions much less likely.
3. Also hash function called frequently so should employ simple and quick introductions.

## Summary

In this function we learned about hash tables. Hash tables place the value of an element into a hash function which outputs a hash value. The hash value determines where to place the element. Because a hash function produces the same hash value for a given element, it also gives us fast lookup time to retrieve an element.

When a hash function outputs the same hash value for two different elements we have a collision. We can resolve a collision by employing separate chaining where each hash value points to a linked list, and when there is a collision we attach the element to the linked list.

Because retrieving elements from a linked list is O(n), we try to choose a hash function that avoids collisions. Because we must use our hash function to insert, delete, and retrieve elements we also choose a fast hash function.
