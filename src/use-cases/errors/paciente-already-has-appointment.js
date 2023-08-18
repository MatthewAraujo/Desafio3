class PacienteAlreadyHasApointmentError extends Error {
  constructor() {
    super('User already has an appointment')
  }
}

module.exports = PacienteAlreadyHasApointmentError