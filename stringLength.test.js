const stringLength = require('./stringLength.js');

test('length of 1234 is 4', () => {
  expect(stringLength("1234")).toBe(4);
});

test('input string length should be less than 10', () => {
  expect(() => stringLength("12345678901")).toThrow();
});

test('input string length should be bigger than 0', () => {
  expect(() => stringLength("")).toThrow();
});