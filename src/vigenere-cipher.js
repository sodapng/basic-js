const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  alphabet = 'abcdefghijklmnopqrstuvwxyz'
  encryptMsg = ''
  decryptMsg = ''

  constructor(isNotReverse = true) {
    this.isNotReverse = isNotReverse
  }

  checkArgs(msg, key) {
    if (!msg || !key) throw new Error('Incorrect arguments!')
  }

  encrypt(msg, key) {
    this.checkArgs(msg, key)
    msg = msg.toLowerCase()
    key = key.toLowerCase()
    this.encryptMsg = ''

    for (let i = 0, j = 0; i < msg.length; i++, j++) {
      if (!this.alphabet.includes(msg[i])) {
        this.encryptMsg += msg[i]
        j--
        continue
      }

      let m = this.alphabet.indexOf(msg[i])
      let k = this.alphabet.indexOf(key[j % key.length])
      let c = (m + k) % 26
      this.encryptMsg += this.alphabet[c]
    }

    this.encryptMsg = this.isNotReverse
      ? this.encryptMsg.toUpperCase()
      : this.encryptMsg.split('').reverse().join('').toUpperCase()

    return this.encryptMsg
  }

  decrypt(msg, key) {
    this.checkArgs(msg, key)
    msg = msg.toLowerCase()
    key = key.toLowerCase()
    this.decryptMsg = ''

    for (let i = 0, j = 0; i < msg.length; i++, j++) {
      if (!this.alphabet.includes(msg[i])) {
        this.decryptMsg += msg[i]
        j--
        continue
      }

      let c = this.alphabet.indexOf(msg[i])
      let k = this.alphabet.indexOf(key[j % key.length])
      let m = (c - k + 26) % 26
      this.decryptMsg += this.alphabet[m]
    }

    this.decryptMsg = this.isNotReverse
      ? this.decryptMsg.toUpperCase()
      : this.decryptMsg.split('').reverse().join('').toUpperCase()

    return this.decryptMsg
  }
}

module.exports = {
  VigenereCipheringMachine,
}
