const { add, subtract } = require('.')

describe('Unit tests', () => {
  test('add function adds two numbers', () => {
    expect(add(4, 5)).toBe(9)
  })

  test('subtract function subtracts two numbers', () => {
    expect(subtract(10, 2)).toBe(8);
  })
})