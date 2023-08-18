class PacienteUnderAgeError extends Error {
  constructor() {
    super('User already exists')
  }
}

module.exports = PacienteUnderAgeError