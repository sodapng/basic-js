const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  return str.replace(/(.)\1+/g, (a, b) => `${a.length}${b}`)
}

module.exports = {
  encodeLine,
}
