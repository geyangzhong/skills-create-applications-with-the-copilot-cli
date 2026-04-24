const { add, sub, mul, div } = require('../calculator-lib');

describe('calculator-lib basic operations', () => {
  test('add 2 + 3 => 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('sub 10 - 4 => 6', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('mul 45 * 2 => 90', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('div 20 / 5 => 4', () => {
    expect(div(20, 5)).toBe(4);
  });

  test('division by zero should throw', () => {
    expect(() => div(1, 0)).toThrow('Division by zero');
  });

  test('non-numeric operands should throw', () => {
    expect(() => add(NaN, 2)).toThrow('Operands must be numeric');
    expect(() => sub(1, undefined)).toThrow('Operands must be numeric');
  });
});
