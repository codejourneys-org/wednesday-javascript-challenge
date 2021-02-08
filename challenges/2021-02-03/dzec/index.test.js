const Challange1 = require('./index');
const challange = new Challange1();
it('gets array with steps from 1 to 10 as step default = 1', () => {
  expect(challange.range(1, 10)).toEqual([1,2,3,4,5,6,7,8,9,10]);
});

it('fallsback to negative second value if steps are negative and if to > from', () => {
 expect(challange.range(1, 6, -2)).toEqual([1,-1,-3,-5]);
});

it('fallsback to negative steps if from > to', () => {
 expect(challange.range(8, 2, 2)).toEqual([8,6,4,2]);
});

it('sums all numbers of array', () => {
 expect(challange.sum(challange.range(8, 2, 2))).toEqual(20);
});
