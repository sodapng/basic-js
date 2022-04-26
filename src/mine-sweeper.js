const { NotImplementedError } = require('../extensions/index.js')

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const r = []

  for (let i = 0; i < matrix.length; i++) {
    r.push([])
    for (let j = 0; j < matrix[i].length; j++) {
      let sum = -matrix[i][j]
      for (let dx of [-1, 0, 1]) {
        for (let dy of [-1, 0, 1]) {
          let x = i + dx >= 0 && i + dx < matrix.length
          let y = j + dy >= 0 && j + dy < matrix.length
          if (x && y) {
            sum += matrix[i + dx][j + dy]
          }
        }
      }
      r[i].push(sum)
    }
  }

  return r
}

module.exports = {
  minesweeper,
}
