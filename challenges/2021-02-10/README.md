# 2021-02-10 Challenge - Week 2

## Groups

### Today's JavaScript Challenge is from [Chapter 6: The Secret Life of Objects](https://eloquentjavascript.net/06_object.html).

[Exercise on Eloquent JavaScript](https://eloquentjavascript.net/06_object.html#i_rpYp9Ou4LG) | [Try to solve it on jsbin](https://jsbin.com/duwowomipo/edit?js,console) | [Link to main GitHub repo](https://github.com/codejourneys-org/wednesday-javascript-challenge)

The standard JavaScript environment provides another data structure called `Set`. Like an instance of `Map`, a set holds a collection of values. Unlike `Map`, it does not associate other values with those—it just tracks which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.

**A)** Write a class called `Group` (since `Set` is already taken). Like `Set`, it has `add`, `delete`, and `has` methods.

- Its constructor creates an empty group,
- `add` adds a value to the group (but only if it isn’t already a member),
- `delete` removes its argument from the group (if it was a member),
- and `has` returns a Boolean value indicating whether its argument is a member of the group.

**B)** Use the `===` operator, or something equivalent such as `indexOf`, to determine whether two values are the same.

**C)** Give the class a static `from` method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.

```js
class Group {
  // Your code here.
}

let group = Group.from([10, 20])

console.log(group.has(10)) // → true
console.log(group.has(30)) // → false

group.add(10)
group.delete(10)

console.log(group.has(10)) // → false
```

### Share

We want to make it as easy as possible to get involved!

- You can participate on GitHub [adding your solution to any "challenge"](https://github.com/codejourneys-org/wednesday-javascript-challenge/blob/main/challenges/how-to.md),
- Use [this jsbin](https://jsbin.com/duwowomipo/edit?js,console) to write & test your solutions then share a link to your copy in this channel.
- Or simply share in a code block, you can write it however you prefer!

**Remember to add notes that explain your coding decisions.**

### Need help?

- Read [Chapter 6: The Secret Life of Objects](https://eloquentjavascript.net/06_object.html),
- Google,
- or, post questions here and we can try and find solutions together. But please try and find the answers on your own first :)

### Deadline

- I will post my solution here tomorrow to give everyone time to work on it.
- Feel free to share your solution or questions before then.
- Good luck and [please shout if you need help](https://twitter.com/_moodybones)!
