const { golf1, golf2, golf3, golf4, golf5, golf6, golf7 } = require("./index");

// car and cat
it("Truthy: car and cat", () => {
  const testArray = ["my car", "bad cats"];
  expect(golf1(testArray)).toBeTruthy();
});
it("Falsy: camper and high art", () => {
  const testArray = ["camper", "high art"];
  expect(golf1(testArray)).toBeFalsy();
});
// pop and prop
it("Truthy: pop culture and mad props", () => {
  const testArray = ["pop culture", "mad props"];
  expect(golf2(testArray)).toBeTruthy();
});
it("Falsy: plop and prrrop", () => {
  const testArray = ["plop", "prrrop"];
  expect(golf2(testArray)).toBeFalsy();
});
// ferret, ferry, ferrari
it("Truthy: ferret, ferry and ferrari", () => {
  const testArray = ["ferret", "ferry", "ferrari"];
  expect(golf3(testArray)).toBeTruthy();
});
it("Falsy: ferrum and Transfer A", () => {
  const testArray = ["ferrum", "TransferA"];
  expect(golf3(testArray)).toBeFalsy();
});

// all words ending in ious
it("Truthy: how delicious, spacious room", () => {
  const testArray = ["delicious", "spacious room"];
  expect(golf4(testArray)).toBeTruthy();
});
it("Falsy: ruinous and consciousness", () => {
  const testArray = ["ruinous", "consciousness"];
  expect(golf4(testArray)).toBeFalsy();
});
// A whitespace character followed by a period, comma, colon, or semicolon
it("Truthy: bad punctuation .", () => {
  const testArray = ["bad punctuation ."];
  expect(golf5(testArray)).toBeTruthy();
});
it("Falsy: escape the period", () => {
  const testArray = ["escape the period"];
  expect(golf5(testArray)).toBeFalsy();
});

// A word longer than six letters
it("Truthy: Siebentausenddreihundertzweiundzwanzig", () => {
  const testArray = ["Siebentausenddreihundertzweiundzwanzig"];
  expect(golf6(testArray)).toBeTruthy();
});

it("Falsy: escape the period", () => {
  const testArray = ["no", "three small words"];
  expect(golf6(testArray)).toBeFalsy();
});

// One word not containing the letter e / E
it("Truthy: words not containing e/E", () => {
  const testArray = ["red platypuss", "wobbling nest"];
  expect(golf7(testArray)).toBeTruthy();
});

it("Falsy: words containing e/E", () => {
  const testArray = ["earth bed", "learning ape", "BEET"];
  expect(golf7(testArray)).toBeFalsy();
});
