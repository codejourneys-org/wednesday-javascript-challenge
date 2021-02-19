// TODO
// write as tiny a regular expression as possible,
// to match the given pattern
// and only that pattern
//
// for each item write a regexp to test whether any of the give substrings occur in the strings
// The regular expression should match only strings containing one of the substrings described.
// Do not worry about word boundaries unless explicitly mentioned.
// When your expression works, see whether you can make it any smaller.

// 1. car and cat

const golf1 = (arr) => {
  const regex = /ca[tr]/
  return arr.every((str) => regex.test(str))
}
// 2. pop and prop

const golf2 = (arr) => {
  const regex = /REGEX GOES HERE/
  return arr.every((str) => regex.test(str))
}

// 3. ferret, ferry, and ferrari

const golf3 = (arr) => {
  const regex = /REGEX GOES HERE/
  return arr.every((str) => regex.test(str))
}

// 4. Any word ending in ious

const golf4 = (arr) => {
  const regex = /REGEX GOES HERE/
  return arr.every((str) => regex.test(str))
}

// 5. A whitespace character followed by a period, comma, colon, or semicolon

const golf5 = (arr) => {
  const regex = /REGEX GOES HERE/
  return arr.every((str) => regex.test(str))
}

// 6. A word longer than six letters

const golf6 = (arr) => {
  const regex = /REGEX GOES HERE/
  return arr.every((str) => regex.test(str))
}

// 7. A word without the letter e (or E)

const golf7 = (arr) => {
  const regex = /REGEX GOES HERE/
  return arr.every((str) => regex.test(str))
}

// console.log(golf2(['pop culture', 'mad props']))
module.exports = {
  golf1,
  golf2,
  golf3,
  golf4,
  golf5,
  golf6,
  golf7,
}
