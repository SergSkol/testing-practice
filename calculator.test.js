const Calculator = require('./calculator.js');

describe('calculator', () => {
  const calc = new Calculator();

  test('add 1 + 2 = 3', () => {
    expect(calc.add(1,2)).toBe(3);
  });

  test('add 2 + 3 = 5', () => {
    expect(calc.add(2,3)).toBe(5);
  });

  test('add 3 + 4 = 7', () => {
    expect(calc.add(3,4)).toBe(7);
  });

  test('subtract 4 - 3 = 1', () => {
    expect(calc.subtract(4,3)).toBe(1);
  });

  test('subtract 3 - 2 = 1', () => {
    expect(calc.subtract(3,2)).toBe(1);
  });

  test('subtract 2 - 1 = 1', () => {
    expect(calc.subtract(2,1)).toBe(1);
  });

  test('divide 2 / 2 = 1', () => {
    expect(calc.divide(2,2)).toBe(1);
  });

  test('divide 4 / 2 = 2', () => {
    expect(calc.divide(4,2)).toBe(2);
  });

  test('divide 8 / 2 = 4', () => {
    expect(calc.divide(8,2)).toBe(4);
  });

  test('multiply 1 * 2 = 2', () => {
    expect(calc.multiply(1,2)).toBe(2);
  });

  test('multiply 2 * 2 = 4', () => {
    expect(calc.multiply(2,2)).toBe(4);
  });

  test('multiply -1 * 2 = -2', () => {
    expect(calc.multiply(-1,2)).toBe(-2);
  });
});
