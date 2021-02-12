const { it } = require('@jest/globals')
const { sum, range, steps } = require('./index')

// A
it('Returns an array containing all the numbers from start up to (and including) end', () => {
  expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

// B
it('Returns an array of numbers and returns the sum of these numbers', () => {
  expect(sum(range(1, 10))).toEqual(55)
})

// C
it('Returns an array containing all the numbers from start up to end that increment by step', () => {
  expect(steps(1, 10, 2)).toEqual([1, 3, 5, 7, 9])
})

it('Make sure it also works with negative step values', () => {
  expect(steps(5, 2, -1)).toEqual([5, 4, 3, 2])
})

it('If no step is given, the elements go up by increments of one', () => {
  expect(steps(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
