# Code Review

## Introduction

For this activity, you will perform a code review with a partner. You should
each review the other's code.

- Choose a challenge you have both completed.
- Share the link to your repo with your partner.
- Write the critique and share it with your partner over Slack. Alternatively,
  fork your partner's repo, add your comments to the code or in a new file, and
  then make a Pull Request.

## How to Write a Good Code Review

A good code review is constructive and detailed. It does not use harsh or
derogatory language, nor is it broad in nature. When writing a review, ask
yourself if the critique could actually help your partner become a better coder.

Here are some areas you may wish to comment on:

- Readability: is the code easy to understand as it is written? Are variables
  and functions named appropriately? Is code formatted consistently (spaces/tabs
  and line breaks)? Have appropriate naming conventions been followed for the
  chosen language (e.g. camel case for JS and snake case for Ruby)?
- Separation: were helper functions declared and used where appropriate? Did
  those functions have a single responsibility? Were overly long function bodies
  avoided (e.g. a function containing 20+ lines of code is probably too long and
  a good candidate for being refactored)?
- Syntax: was the correct syntax used? Be sure to point out any syntactical
  errors.
- Redundancies: is there any useless code in the solution, such as unused
  variables or functions? Are there lines of code that could be removed without
  affecting the output? Were unnecessary comments removed?
- Efficacy: does the code achieve the goal? Were any tests cases missed?
- Overall quality: are there areas that could be improved? Could certain lines
  be shortened without reducing readability? Were the appropriate methods used,
  such as Array methods, when applicable? If pseudocode and an explanation were
  included in your partner's repo, were you able to understand it? What did they
  explain well? What could be made clearer and how?

## Example

The following is an example of a review for the below code. Use the example as a
guide for your own reviews and not a required template.

```js
// Challenge: Print each character on a single line in the following format: <index>: <character>
function printCharacters(string) {
  var output = [];

  for (var i = 0; i <= string.length; i++) {
    var outputString = i + ": " + string[i];
    output.push(outputString);
  }

  for (var i = 0; i <= output.length; i++) {
    console.log(output[i]);
  }
}
```

### Review

Hi partner,

I've looked over your solution to the challenge. I'm just going to dive right in
to what I think went well and what can be improved:

What went well:

- Formatting and consistency: The code is formatted well. The same spacing is
  used throughout and so is camelcase. This made it very easy to read.
- Syntax: There are no syntax errors and the code runs without error.
- Naming: Everything is named clearly and easy to understand.
- Separation: The solution was short so I can see why you didn't use helper
  functions. If you wanted to, you could separate each loop and their logic into
  well-named helpers.

What could be improved:

- Syntax: I know it's weird to see this here also, but modern JS prefers let and
  const to var.
- Efficacy: The code doesn't quite achieve the challenge. For example, even if
  the string is empty it prints "0: undefined", which seems strange, and it
  prints that same line but with a different number at the end of any provided
  string. This is because of the terminating condition in the for loops. The
  condition should be < and not <=.
- Overall quality: The challenge could be solved with a single loop that prints
  the string. There's no need to create a new array and push strings to it. Also
  we can loop over a string using a for...of loop, which would be more
  appropriate than using a for loop. Whenever possible we should use the most
  specific method provided by the language, e.g. when looping over an array use
  forEach().

I didn't see an explanation or pseudocode, so I can't comment on that.
