const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  let max = Number.MIN_SAFE_INTEGER

  String(n)
    .split('')
    .forEach((el, i, arr) => {
      n = ''

      for (let k = 0; k < arr.length; k++) {
        if (i === k) continue
        n += arr[k]
      }

      if (max <= +n) max = +n
    })

  return max
}

module.exports = {
  deleteDigit,
}
