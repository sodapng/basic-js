const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    let maxDepthArr = 0

    for (let el of arr) {
      if (Array.isArray(el)) {
        let currArrDepth = this.calculateDepth(el)

        if (maxDepthArr <= currArrDepth) {
          maxDepthArr = currArrDepth
        }
      }
    }

    return maxDepthArr + 1
  }
}

module.exports = {
  DepthCalculator,
}
