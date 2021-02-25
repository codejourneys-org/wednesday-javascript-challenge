const golf1 = (arr) => {
  const regex = /ca[tr]/;
  return arr.every((str) => regex.test(str));
};

const golf2 = (arr) => {
  const regex = /[pro]{3,4}/;
  return arr.every((str) => regex.test(str));
};

const golf3 = (arr) => {
  const regex = /[fer]{4}(?!u)/;
  return arr.every((str) => regex.test(str));
};

const golf4 = (arr) => {
  const regex = /(ious)\b/;
  return arr.every((str) => regex.test(str));
};

const golf5 = (arr) => {
  const regex = /\s[,.;:]/;
  return arr.every((str) => regex.test(str));
};

const golf6 = (arr) => {
  const regex = /[a-z]{6,}/i;
  return arr.every((str) => regex.test(str));
};

const golf7 = (arr) => {
  const regex = /\b[a-df-zA-DF-Z]+\b/;
  return arr.every((str) => regex.test(str));
};

module.exports = {
  golf1,
  golf2,
  golf3,
  golf4,
  golf5,
  golf6,
  golf7,
};
