const capitalize = require('./capitalize.js');

test('capitalize of abcd is ABCD', () => {
  expect(capitalize("abcd")).toBe('ABCD');
});
