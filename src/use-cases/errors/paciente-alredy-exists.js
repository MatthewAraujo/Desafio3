class PacienteAlreadyExistsError extends Error {
  constructor() {
    super('User already exists')
  }
}

module.exports = PacienteAlreadyExistsError