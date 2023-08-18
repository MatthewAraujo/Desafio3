class PacienteNotFoundError extends Error {
  constructor() {
    super('Paciente not found')
  }
}

module.exports = PacienteNotFoundError