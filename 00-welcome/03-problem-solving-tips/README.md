# Problem-Solving Tips

If you’re stuck, ask yourself these questions to see if they help you get
unstuck:

- Have I solved a similar problem before? How can I use that knowledge to solve
  this one?
- Can I break this problem down into smaller problems that are easier to solve?
- Would it help to draw a picture or diagram of the problem?
- Which inputs might this method receive? Do my test cases cover the edge cases?
- Should I draw a table that maps inputs to outputs? Your test cases will then
  mirror that table! The process of drawing the table might also reveal a
  pattern, which you can then use to solve the problem.

  - Example table for a problem where an Array of distinct values must be returned:

    | Input               | Output        |
    | ------------------- | ------------- |
    | [1, 2, 2, 3]        | [1, 2, 3]     |
    | []                  | []            |
    | [4]                 | [4]           |
    | [3, 2, 2, 10, 2, 7] | [3, 2, 10, 7] |

- Do I really understand the problem? You can prove this to yourself by solving
  it on paper without thinking about code.
- Can I talk to someone about this and explain my thinking?
  - Sometimes the act of talking to someone even if they don’t say anything
    helps you get unstuck. It forces you to explain the problem in more
    understandable language.
- What information is available to me in this problem? What additional
  information can I derive?
  - If you have experience writing or deriving mathematical equations, this is a
    similar process: list which variables and mathematical operations are
    available and then the additional information that can be derived from that.
  - If you have experience creating artwork, this is similar to the process of
    understanding what tools you have available to you and how you can use them,
    e.g. what colors are in my palette and how can I mix them? Or I have a
    string, tape, and a pencil, and I need to draw a circle - how do I do that?
  - Example: For a problem where an Array of distinct values must be returned,
    some of the information available includes: the Array itself, each element
    in the Array, its length, and the index of each item. You can find a list of
    Array operations available by looking at the documentation.
- Can or should I create additional data to help me solve the problem? What do I
  need to keep track of for my solution to work?
  - Consider adding variables and ask yourself which data structures are
    required and how they might help.
  - Example: For a problem where an Array of distinct values must be returned,
    you might think about using an additional Array or a Hash (aka POJO/Object
    in JavaScript or Dictionary in Python) or a Set.
- Have I taken care of myself today? Do I need to eat? Am I hydrated? Am I
  rested? Do I need to move my body?
  - You’ll be surprised how much better your brain works after eating a good
    meal, drinking water, resting and/or exercising! Don’t let yourself get
    [hangry](https://www.merriam-webster.com/dictionary/hangry)!
