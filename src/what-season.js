const { NotImplementedError } = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }

  try {
    const month = date
      .toDateString()
      .match(/\s\w+\s/g)[0]
      .trim()
    const day = date
      .toDateString()
      .match(/\s\d+\s/g)[0]
      .trim()

    if (
      ['Dec', 'Jan'].includes(month) ||
      (month === 'Feb' && parseInt(day) <= 29)
    ) {
      return 'winter'
    }

    if (['Mar', 'Apr'].includes(month) || (month === 'May' && day <= 31)) {
      return 'spring'
    }

    if (['Jun', 'Jul'].includes(month) || (month === 'Aug' && day <= 31)) {
      return 'summer'
    }

    if (['Sep', 'Oct'].includes(month) || (month === 'Nov' && day <= 30)) {
      return 'autumn'
    }
  } catch {
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason,
}
