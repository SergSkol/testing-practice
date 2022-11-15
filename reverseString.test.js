const reverseString = require('./reverseString.js');

test('reverse of 1234 is 4321', () => {
  expect(reverseString("1234")).toBe('4321');
});