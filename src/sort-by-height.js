const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  const filtered = arr
    .map((el, i) => ({ value: el, index: i }))
    .filter((el) => el.value === -1)
  arr = arr.sort((a, b) => a - b).filter((el) => el !== -1)
  filtered.forEach((el) => {
    arr.splice(el.index, 0, el.value)
  })

  return arr
}

module.exports = {
  sortByHeight,
}
