class OutsideBussinessHours extends Error {
  constructor () {
    super('Outside business hours')
  }
}

module.exports = OutsideBussinessHours