const { arrayToInteger } = require('../conversions')

describe('conversion of a bit array to an unsigned integer representing 16 bits', () => {
  test('for an array full of 0s it should return 0', () => {
    expect(arrayToInteger(Array(16).fill(0))).toEqual(0)
  })
  test('for 1 (least significant bit set) the output array should have only it\'s rightmost field set to 1', () => {
    const input = Array(16).fill(0)
    input[15] = 1

    expect(arrayToInteger(input)).toEqual(1)
  })
  test('unsigned integer 8 should only set bit at index 12', () => {
    const input = Array(16).fill(0)
    input[12] = 1

    expect(arrayToInteger(input)).toEqual(8)
  })
  test('unsigned integer 32768 should only set leftmost bit', () => {
    const input = Array(16).fill(0)
    input[0] = 1

    expect(arrayToInteger(input)).toEqual(32768)
  })
  test('should set multiple bits', () => {
    const integer = 1 + 8 + 32768
    const input = Array(16).fill(0)
    input[15] = 1
    input[12] = 1
    input[0] = 1

    expect(arrayToInteger(input)).toEqual(integer)
  })
  test('should throw on invalid input', () => {
    expect(() => arrayToInteger([1, 1, 1])).toThrow(RangeError)
    expect(() => arrayToInteger(Array(23).fill(0))).toThrow(RangeError)
    expect(() => arrayToInteger(Array(16).fill(2))).toThrow(TypeError)
  })
})
