const { add, subtract, multiply, divide, modulo, toPower } = require('.');

describe('Unit tests', () => {
  test('add function adds two numbers', () => {
    expect(add(4, 5)).toBe(9)
  });

  test('subtract function subtracts two numbers', () => {
    expect(subtract(10, 2)).toBe(8);
  });

  test('multiply function multiplies two numbers', () => {
    expect(multiply(7,6)).toBe(42);
  });

  test('divide function divides two numbers', () => {
    expect(divide(45, 9)).toBe(5);
  });

  test('the modulo function returns the remainder of a division', () => {
    expect(modulo(5, 3)).toBe(2);
  });

  test('the toPower function raises a number to a given power', () => {
    expect(toPower(3, 3)).toBe(27);
  });
});