import { integerToArray } from '../conversions'

describe('conversion of an unsigned integer representing 16 bits to an array', () => {
  test('for 0 it should return an array full of 0s', () => {
    expect(integerToArray(0)).toEqual(Array(16).fill(0))
  })
  test('for 1 (least significant bit set) the output array should have only it\'s rightmost field set to 1', () => {
    const expectation = Array(16).fill(0)
    expectation[15] = 1

    expect(integerToArray(1)).toEqual(expectation)
  })
  test('unsigned integer 8 should only set bit at index 12', () => {
    const expectation = Array(16).fill(0)
    expectation[12] = 1

    expect(integerToArray(8)).toEqual(expectation)
  })
  test('unsigned integer 32768 should only set leftmost bit', () => {
    const expectation = Array(16).fill(0)
    expectation[0] = 1

    expect(integerToArray(32768)).toEqual(expectation)
  })
  test('should set multiple bits', () => {
    const integer = 1 + 8 + 32768
    const expectation = Array(16).fill(0)
    expectation[15] = 1
    expectation[12] = 1
    expectation[0] = 1

    expect(integerToArray(integer)).toEqual(expectation)
  })
  test('should throw on invalid input', () => {
    expect(() => integerToArray(-1)).toThrow(RangeError)
    expect(() => integerToArray(Math.pow(2, 16))).toThrow(RangeError)
    expect(() => integerToArray(1.1)).toThrow(TypeError)
  })
})
