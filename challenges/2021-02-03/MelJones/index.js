//////////////////////////////////////////
//////////////////////////////////////////
// A
// My secrets out my favourite Array method is reduce! (which means I sometimes over complicate things, doh!)
// I spread the arguments object into an array, so I could call reduce on it
// I named the accumulator result and set the intial value to be an array with start as the first index and
// then a while loop increments by one and pushes current until current equals end
// result array is then returned

// function range(start, end) {
//   return [...arguments].reduce((result, current) => {
//     while (current < end) {
//       current++
//       result.push(current)
//     }
//     return result
//   }, [start])
// }

// //
// Refactor
// I remembered a much simplier approach is to use Array.from()
// I passed in an array with length of end
// map and store the index in the slot
// remember to add 1 to the index because array indexes are 0 based
const range = (start, end) => Array.from({ length: end }, (_, i) => i + 1)

// console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//////////////////////////////////////////
//////////////////////////////////////////
// B
// Reduce is a nice clean and simple way of summing all nums in array
const sum = (arr) => arr.reduce((a, b) => a + b, 0)

// console.log(sum(range(1, 10)))
// → 55

//////////////////////////////////////////
//////////////////////////////////////////
// C
// I found 2 things tricky
// // decrementing the range and couldn't get my Array.from solution working
// // passing in a negative step - using Math.abs(step) solved this
// //
// I used my first range() reduce solution from question A
// Added a default value of 1 to step
// Added an if statement to check (start < end )
// then incremented or decremented using step depending on what was passed in
// below was my first try
// and below that a refactor

// First Try
//
// function steps(start, end, step = 1) {
//   if (start < end) {
//     return [...arguments].slice(0, 2).reduce(
//       (result, current) => {
//           while (current <= end - Math.abs(step)) {
//             current += Math.abs(step)
//             result.push(current)
//           }
//         return result
//       },
//       [start]
//     )
//   } else {
//     return [...arguments].slice(0, 2).reduce(
//       (result, current) => {
//         while (end <= current - Math.abs(step)) {
//           current -= Math.abs(step)
//           result.push(current)
//         }
//         return result
//       },
//       [start]
//     )
//   }
// }

// //
// Refactor
// I moved the if statement inside the reduce method and
// could then remove a lot of duplicate code

//
function steps(start, end, step = 1) {
  return [...arguments].slice(0, 2).reduce(
    (result, current) => {
      if (start < end) {
        while (current <= end - Math.abs(step)) {
          current += Math.abs(step)
          result.push(current)
        }
      } else {
        while (end <= current - Math.abs(step)) {
          current -= Math.abs(step)
          result.push(current)
        }
      }
      return result
    },
    [start]
  )
}

console.log(steps(5, 2, -1))
console.log(steps(1, 10, 2))
// → [5, 4, 3, 2]

// Thanks to pixari for setting us up on GitHub and writing some tests!
// unfortunately they all failed with my solutions :(
//
// So I wrote a quick set of my own tests based on the text in the exercise
//
// My next step is to dive into pixari's tests & solution and understand them better
// I'm looking forward to seeing everyones solutions!
//
// Thanks to all that shared and participated!
// It's been very fun learning with you!
// Coding is way more fun when we share and work as a team!
//
// What have you learnt/liked/disliked?
// How can we improve for next challenge
//
// Find me on Twitter @_moodybones
// or https://meljones.netlify.app/
// My DM's are always open!

module.exports = {
  steps,
  range,
  sum,
}
