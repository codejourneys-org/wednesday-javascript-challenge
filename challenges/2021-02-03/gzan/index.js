
// i am writing here with good, old for loop, because i like how readable it is.  
function range(start, end) {
  const numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
}



function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}


//i give default value to step so that we can use this function instead of the first one too
function rangePremium(start, end, step = 1) {
  const numbers = [];
  const min = start < end ? start : end
  const max = start < end ? end : start
  for (let i = min; i <= max; i += Math.abs(step)) {
    numbers.push(i);
  }
  return step > 0 ? numbers : numbers.reverse();
}

module.exports = { range, sum, rangePremium }