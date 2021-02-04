
const asc = (a, b) => a - b;
const desc = (a, b) => b - a;
const sortFn = k => Math.sign(k) > 0 ? asc : desc;
const sort = (arr, direction) => arr.sort(sortFn(direction));

const steps = (start, end, step = 1) => Math.floor((end - start) / Math.abs(step)) + 1;
const range = (start, end, step = 1) => sort(Array(steps(start, end, step)).fill().map((_, idx) => idx * Math.abs(step) + start), step);
const sum = (arr) => arr.reduce((acc, curr) => curr+acc, 0);

module.exports = {
  steps,
  range,
  sum
}
