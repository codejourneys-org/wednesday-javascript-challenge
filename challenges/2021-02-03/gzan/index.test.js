const range = require('./index').range
const sum = require('./index').sum
const rangePremium = require('./index').rangePremium


describe('Type', function () {
  it('should give function as type', () => {
    expect(typeof range).toEqual('function');
    expect(typeof sum).toEqual('function');
    expect(typeof rangePremium).toEqual('function');
  });
});

describe('Logic', function () {
  it('should return an array of the numbers in the given range', () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(range(3, 12)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(range(96, 98)).toEqual([96, 97, 98]);
  });
});

describe('Logic', function () {
  it('return the sum of the numbers between the given range', () => {
    expect(sum(range(0, 5))).toEqual(15);
    expect(sum([0, 1, 2, 3, 4, 5])).toEqual(15);
    expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(55);
  });
});

describe('Logic', function () {
  it('should return an array of the numbers in the given range with a difference of given step value between every 2 numbers', () => {
    expect(rangePremium(0, 5)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(rangePremium(3, 12, 3)).toEqual([3, 6, 9, 12]);
    expect(rangePremium(45, 10, -5)).toEqual([45, 40, 35, 30, 25, 20, 15, 10]);
  });
});