const { Group } = require('./index');

it('adds a value', () => {
  const g = new Group();
  g.add(10);
  expect(g.values).toEqual([10]);
});

it(`doesn't add a value if it already exists`, () => {
  const g = new Group();
  g.add(10);
  g.add(10);
  expect(g.values).toEqual([10]);
});

it(`removes an element by value`, () => {
  const g = new Group();
  g.add(10);
  g.add('hello');
  g.add(14);
  g.add(null);
  g.delete(14)
  expect(g.values).toEqual([10, 'hello', null]);
});

it('returns true if the value exists', () => {
  const g = new Group();
  g.add(10);
  expect(g.has(10)).toEqual(true);
});


it(`returns false if the value doesn't exists`, () => {
  const g = new Group();
  g.add(10);
  expect(g.has(11)).toEqual(false);
});

it(`creates value from iterable`, () => {
  const g = Group.from([1, 2, 3]);
  expect(g.values).toEqual([1, 2, 3]);
});


it(`creates value from iterable`, () => {
  const g = Group.from('asd');
  expect(g.values).toEqual(['a', 's', 'd']);
});