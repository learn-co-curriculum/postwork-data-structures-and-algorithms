# Algorithmic Problem Solving

An algorithm is just a procedure that solves a problem. If you’re wondering if
that’s any different from the work you’ve already been doing, we’ve got good
news: It’s not!

In this reading, we’ll go over the importance of solving such problems and how
to approach coming up with solutions.

## Why Solve Algorithm Problems?

Working through these challenges will not only help you during the technical
interview process, it will also help you become a better programmer. Learning
how to break apart a problem into pieces you can understand and then code a
solution for is a vital skill, as is learning to think about the different types
of inputs - or test cases - your solution must account for.

As you grow as a developer, you’ll find yourself leaning on these skills more
and more, especially as your work becomes more challenging. These skills will
truly help you in any and every project you take on.

## How to Solve a Problem

Two mistakes many programmers make are to jump into code too fast or to start
thinking about code optimization too early. Both of these mistakes can greatly
increase the amount of time it takes to solve a problem and increase
frustration. To avoid this, here are the steps we recommend taking:

### 1. Spend Time Understanding the Problem

Before you dive into solving the problem, take the time to read it and describe
it in your own words. You might find it useful to rewrite the problem before
moving on.

If you have been given test cases, look at each one, apply your understanding of
the problem to them to determine what the answer is, and then check if your
answer matches the actual answer (e.g. work it out on paper or in your head, no
code necessary here). If your answer doesn’t match, you need to spend more time
understanding the problem.

### 2. Write Your Own Test Cases

Now that you understand the problem and why the answers to the test cases are
what they are, you’re ready to write your own test cases! We are not
recommending that you write test suites in Rspec or Jest. Instead, you simply
print the result of calling your solution method and compare it to the answer
you expected.

Be aware that algorithm problem descriptions rarely provide all of the test
cases you need to account for, so it’s incredibly important that you also come
up with your own. This is true when using online platforms, such as Leetcode and
HackerRank, as well as during interviews.

### 3. Pseudocode

Remember how we asked you to check your understanding of the problem by going
through the test cases and then writing your own tests? Congratulations! This
means that on some level, you know how to solve the problem. Before you start
coding, write pseudocode, which is just a plain description of how to solve the
problem. For example, the pseudocode for copying only numbers from one array to
another might look like this:

```
initialize empty array called result

iterate over each item in the input array:
	if element is a number:
		push item onto result

return result
```

Note that different people write pseudocode differently. The key is to make it
easy to understand yourself and explain to others - this is the map to the code
you’re about to write! I often paste my pseudocode into my workspace as
comments, and then code each piece alongside the matching comment.

You can also test this procedure against the test cases before writing any code.
Validating and rewriting pseudocode will likely save you time. You might also
wish to think about additional solutions: there’s always more than one way to
solve a problem.

### 4. Code!

Now that you have a map, convert it to code!

At this point, the goal is to make it work: pass those test cases! If you’re
having a hard time getting all of the test cases working, check that your
pseudocode actually solves for all of those cases and then check that your code
does what the pseudocode says it should.

### 5. Make It Clean and Readable

Once your solution is well, a solution, it’s time to refactor your code so that
it’s easy to read, not just for you but also for others. Use well-named
variables and convert blocks of code to methods when necessary. If you find any
unneeded or redundant code, delete it.

Don’t forget to test your code again!

### 6. Optimize?

Don’t optimize your code for time or space complexity (e.g. how long it takes to
run or how much memory it’s using) unless you absolutely need to. There are
three major situations that call for optimization:

- The solution is hanging on certain test cases, and therefore cannot pass since it’s taking too long
- You were asked to do so
- You think it would be fun to try

### Conclusion

We hope these steps help you solve the problems you’re about to encounter.
Remember, they can be applied to all types of problems, including building web
apps. Don’t be afraid to spend more time thinking and planning than coding. Take
it from those of us who have been coding for years: we often spend more time
thinking, talking, and writing than we do coding.

Before we go, we’d like to leave you with some final tips:

- Talk to yourself while you code: think out loud
- Consider recording your screen and voice as you solve a problem so you can
  review your performance
- Take your time and be patient with yourself!
