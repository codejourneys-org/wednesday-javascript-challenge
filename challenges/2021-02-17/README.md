# 2021-02-17 Challenge - Week 3

## Regex Golf

### Today's JavaScript Challenge is from [Chapter 9: Regular Expressions](<[https://eloquentjavascript.net/06_object.html](https://eloquentjavascript.net/09_regexp.html)>).

[Exercise on Eloquent JavaScript](<[https://eloquentjavascript.net/06_object.html#i_rpYp9Ou4LG](https://eloquentjavascript.net/09_regexp.html#h_TcUD2vzyMe)>) | [Try to solve it on jsbin](<[https://jsbin.com/reposozima/edit?js,console](https://jsbin.com/reposozima/edit?js,console)>) | [Link to main GitHub repo](https://github.com/codejourneys-org/wednesday-javascript-challenge)

*Code golf* is a term used for the game of trying to express a particular program in as few characters as possible. Similarly, *regexp golf* is the practice of writing as tiny a regular expression as possible to match a given pattern, and *only* that pattern.

For each of the following items, write a regular expression to test whether any of the given substrings occur in a string. The regular expression should match only strings containing one of the substrings described. Do not worry about word boundaries unless explicitly mentioned. **When your expression works, see whether you can make it any smaller.**

1. *car* and *cat*
2. *pop* and *prop*
3. _ferret_, *ferry*, and *ferrari*
4. Any word ending in *ious*
5. A whitespace character followed by a period, comma, colon, or semicolon
6. A word longer than six letters
7. A word without the letter *e* (or *E*)

Refer to the table in the [chapter summary](https://eloquentjavascript.net/09_regexp.html#summary_regexp) for help. Test each solution with a few test strings.

```js
verify(/.../, ['my car', 'bad cats'], ['camper', 'high art'])

verify(/.../, ['pop culture', 'mad props'], ['plop', 'prrrop'])

verify(/.../, ['ferret', 'ferry', 'ferrari'], ['ferrum', 'transfer A'])

verify(/.../, ['how delicious', 'spacious room'], ['ruinous', 'consciousness'])

verify(/.../, ['bad punctuation .'], ['escape the period'])

verify(
  /.../,
  ['Siebentausenddreihundertzweiundzwanzig'],
  ['no', 'three small words']
)

verify(
  /.../,
  ['red platypus', 'wobbling nest'],
  ['earth bed', 'learning ape', 'BEET']
)

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == '...') return
  for (let str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`)
    }
  for (let str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`)
    }
}
```

### Share

We want to make it as easy as possible to get involved!

- You can participate on GitHub [adding your solution to any "challenge"](https://github.com/codejourneys-org/wednesday-javascript-challenge/blob/main/challenges/how-to.md). Jest is setup for writing tests,
- Use [this jsbin](<[https://jsbin.com/reposozima/edit?js,console](https://jsbin.com/reposozima/edit?js,console)>) to write & test your solutions then share a link to your copy in this channel.
- Or simply share in a code block, please write it however you prefer!
- **_Remember to add notes that explain your coding decisions._**

### Need help?

- Read [Chapter 9: Regular Expressions](<[https://eloquentjavascript.net/06_object.html](https://eloquentjavascript.net/09_regexp.html)>) - the [chapter summary](https://eloquentjavascript.net/09_regexp.html#h_ErccPg/l98) has a great overview & reference table,
- Beau Carnes from [freeCodeCamp](https://www.freecodecamp.org/) has an awesome [RegEx course on Scrimba](https://scrimba.com/learn/regularexpressions). Scrimba has a super chill screencast platform where you get to code along with your Teacher.
- It is almost unavoidable that, in the course of working on these exercises, you will get confused and frustrated by some regular expression’s inexplicable behavior. Sometimes it helps to enter your expression into an online tool like [https://debuggex.com](https://debuggex.com/) to see whether its visualization corresponds to what you intended and to experiment with the way it responds to various input strings.
- Google,
- or, post questions here and we can try and find solutions together. But please try and find the answers on your own first :)

### Deadline

- I will post my solution here tomorrow to give everyone time to work on it.
- Feel free to share your solution or questions before then.
- Good luck and [please shout if you need help](https://twitter.com/_moodybones)!
