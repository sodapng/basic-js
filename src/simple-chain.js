const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  chains: [],

  getLength() {
    return this.chains.length
  },
  addLink(value) {
    this.chains.push(`( ${typeof value !== 'undefined' ? value : ''} )`)
    return this
  },
  removeLink(position) {
    let isFound = this.chains[position - 1]

    if (!isFound) {
      this.chains.splice(0)
      throw new Error("You can't remove incorrect link!")
    }

    this.chains.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chains.reverse()
    return this
  },
  finishChain() {
    let result = this.chains.join('~~')
    this.chains.splice(0)
    return result
  },
}

module.exports = {
  chainMaker,
}
