// A) The inverval <from,to> is inclusive on both ends as stated in the readme.
// Hence generator functions are cumbersome in javascript, let just compute how many numbers we have and create array
// and map the numbers according to their 'distance' from start
const range = (from, to, step = 1) =>
    Array.from({length: Math.max(0, (to - from) / step + 1)})
    .map((_, index) => from + (step * index))

const sum = arr => arr.reduce((acc,item) => acc + item, 0)

module.exports = {
    sum,
    range
}