/** 
* The sort() function sorts the elements of an array in place and returns a cloned and sorted array. 
* The default sort order is ascending. 
* The sign of "direction" parameter represents the direction [positive for "ascending", "negative" for descending]
* An IIFE as been used because there's no need to make ascFn, descFn and sortFn accessible from outside.  
*/
const sort = (() => {
  const ascFn = (a, b) => a - b;
  const descFn = (a, b) => b - a;
  const sortFn = k => Math.sign(k) > 0 ? ascFn : descFn;
  return (direction) => (arr) => arr.sort(sortFn(direction || 1));
})();

/** 
* The step() function returns the number of available steps between "start" and "end", where the steps' length is "step". 
*/
const steps = (start, end, step = 1) => Math.floor((end - start) / Math.abs(step)) + 1;

/** 
* The range() function returns an array containing all the steps, sorted by the given direction. 
* An IIFE as been used because there's no need to make getStepValueByElementId accessible from outside. 
*/
const range = (() => {
  const getStepValueByElementId = (_, idx, step, start) => idx * Math.abs(step) + start;
  return function range (start, end, step = 1) {
    return sort(step)(Array(steps(...arguments)).fill().map((_, idx) => getStepValueByElementId(_, idx, step, start)));
  }
})()

/** 
* The sum() function sums all the values of the given array 
*/
const sum = (arr) => arr.reduce((acc, curr) => curr+acc, 0);

module.exports = {
  steps,
  range,
  sum
}
