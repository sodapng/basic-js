const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(
  str,
  {
    repeatTimes,
    separator = '+',
    addition = '',
    additionRepeatTimes,
    additionSeparator = '|',
  }
) {
  addition =
    String(addition) && additionRepeatTimes > 1
      ? Array(additionRepeatTimes)
          .fill(String(addition))
          .join(additionSeparator)
      : addition

  return repeatTimes > 1
    ? Array(repeatTimes)
        .fill(str + addition)
        .join(separator)
    : str + addition
}

module.exports = {
  repeater,
}
