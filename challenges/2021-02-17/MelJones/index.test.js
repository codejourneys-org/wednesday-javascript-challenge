const { golf1, golf2, golf3, golf4, golf5, golf6, golf7 } = require('./index')

it('Truthy: car and cat', () => {
  const testArr = ['my car', 'bad cats']
  expect(golf1(testArr)).toBeTruthy()
})

it('Falsy: car and cat', () => {
  const testArr = ['camper', 'high art']
  expect(golf1(testArr)).toBeFalsy()
})

it('Truthy: pop and prop', () => {
  expect(golf2(['pop culture', 'mad props'])).toBeTruthy()
})
it('Falsy: pop and prop', () => {
  expect(golf2(['plop', 'prrrop'])).toBeFalsy()
})

it('Truthy: ferret, ferry, and ferrari', () => {
  expect(golf3(['ferret', 'ferry', 'ferrari'])).toBeTruthy()
})

it('Falsy: ferret, ferry, and ferrari', () => {
  expect(golf3(['ferrum', 'transfer A'])).toBeFalsy()
})

it('Truthy: Any word ending in ious', () => {
  expect(golf4(['how delicious', 'spacious room'])).toBeTruthy()
})

it('Falsy: Any word ending in ious', () => {
  expect(golf4(['ruinous', 'consciousness'])).toBeFalsy()
})

it('Truthy: A whitespace character followed by a period, comma, colon, or semicolon', () => {
  expect(golf5(['bad punctuation .'])).toBeTruthy()
})

it('Falsy: A whitespace character followed by a period, comma, colon, or semicolon', () => {
  expect(golf5(['escape the period'])).toBeFalsy()
})

it('Truthy: A word longer than six letters', () => {
  expect(golf6(['Siebentausenddreihundertzweiundzwanzig'])).toBeTruthy()
})

it('Falsy: A word longer than six letters', () => {
  expect(golf6(['no', 'three small words'])).toBeFalsy()
})

it('Truthy: A word without the letter e (or E)', () => {
  expect(golf7(['red platypus', 'wobbling nest'])).toBeTruthy()
})

it('Falsy: A word without the letter e (or E)', () => {
  expect(golf7(['earth bed', 'learning ape', 'BEET'])).toBeFalsy()
})
