
const steps = (start, end, step = 1) => Math.floor((end - start) / Math.abs(step)) + 1;
const range = (start, end, step = 1) => Array(steps(start, end, step)).fill().map((e, idx) => idx * Math.abs(step) + start).sort(
  (a, b) => Math.sign(step) > 0 ? a - b : b - a);
const sum = (arr) => arr.reduce((acc, curr) => curr+acc, 0);

module.exports = {
  steps,
  range,
  sum
}

