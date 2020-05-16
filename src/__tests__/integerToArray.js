// Take 16 bit unsigned integer and return array of bit values, most significant at the left
const integerToArray = (canvasRowAsInteger, length = 16) => {
  // throwing exception for invalid numbers for now, as it's unclear how they should be handled (fail early)
  // proper handling would probably be too much work for the scope of this exercise
  if (canvasRowAsInteger % 1 !== 0) {
    throw new TypeError(`number ${canvasRowAsInteger} should be an integer`)
  }
  if (canvasRowAsInteger >= Math.pow(2, length) || canvasRowAsInteger < 0) {
    throw new RangeError(`integer ${canvasRowAsInteger} can not be mapped to a bit array of length ${length}`)
  }
  return Array(length).fill(0).map((_, index) => {
    // array are indexed from the left, but we want the least significant bit on the right
    const indexFromRight = length - 1 - index
    const filter = 1 << indexFromRight
    return (canvasRowAsInteger & filter) ? 1 : 0
  })
}

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
