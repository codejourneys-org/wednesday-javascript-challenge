const { sum, range, steps } = require('./index');

it('returns 10 steps, using step=1 by default', () => {
  expect(steps(0, 10)).toEqual(11);
});

it('returns 12 steps, using a positive step', () => {
  expect(steps(0, 50, 4)).toEqual(13);
});

it('returns 12 steps, using a negative step', () => {
  expect(steps(0, 50, -4)).toEqual(13);
});

it('returns an array with length=10, using step=1 by default', () => {
  expect(range(0, 10).length).toEqual(11);
});

it('returns an array with length=12, using a positive step', () => {
  expect(range(0, 50, 4).length).toEqual(13);
});

it('returns an array with length=12, using a negative step', () => {
  expect(range(0, 50, -4).length).toEqual(13);
});

it('returns a range from 0 to 5 with step = 1', () => {
  expect(range(0, 5, 1)).toEqual([0, 1, 2, 3, 4, 5]);
});

it('returns a range from 1 to 10 with step = 2', () => {
  expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
});

it('returns a range from 5 to 0 with step = -1', () => {
  expect(range(0, 5, -1)).toEqual([5, 4, 3, 2, 1, 0]);
});

it('returns a range from 10 to 1 with step = -2', () => {
  expect(range(1, 10, -2)).toEqual([9, 7, 5, 3, 1]);
});