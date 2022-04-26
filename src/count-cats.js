const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(backyard) {
  const result = backyard.reduce((acc, item) => {
    const filtered = item.filter((el) => el === '^^')
    return acc + (filtered ? filtered.length : 0)
  }, 0)

  return result
}

module.exports = {
  countCats,
}
