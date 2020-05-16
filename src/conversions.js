import * as _ from 'ramda'

// Take 16 bit unsigned integer and return array of bit values, most significant at the left
export const integerToArray = (canvasRowAsInteger, length = 16) => {
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
    const mask = 1 << indexFromRight
    // if selected bit is not set, the application of the mask will return zero, otherwise > zero
    return (canvasRowAsInteger & mask) ? 1 : 0
  })
}

// Take array of bits and return unsigned integer
export const arrayToInteger = (canvasRowAsArray, length = 16) => {
  if (canvasRowAsArray.length !== length) {
    throw new RangeError(`array ${JSON.stringify(canvasRowAsArray, null, 2)} doesn't have expected length ${length}`)
  }
  if (!_.all(bit => [0, 1].includes(bit), canvasRowAsArray)) {
    throw new TypeError(`array ${JSON.stringify(canvasRowAsArray, null, 2)} contains invalid bit`)
  }
  return canvasRowAsArray.reduce(
    (acc, bit, index) => {
      const indexFromRight = length - 1 - index
      return acc + (bit << indexFromRight)
    },
    0,
  )
}
