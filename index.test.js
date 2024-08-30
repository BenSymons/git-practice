const { add } = require('.')

describe('Unit tests', () => {
  test('add function adds two numbers', () => {
    expect(add(4, 5)).toBe(9)
  })
})