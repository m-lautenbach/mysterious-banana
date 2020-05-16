const bitsToArray = matrix => {
  return matrix
}

describe('conversion of an unsigned integer representing 16 bits to an array', () => {
  test('for 0 is should return an array full of 0s', () => {
    expect(bitsToArray(0)).toEqual(Array(16).fill(0))
  })
})
