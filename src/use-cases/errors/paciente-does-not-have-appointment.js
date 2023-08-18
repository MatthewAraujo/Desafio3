class PacienteDoesNotHaveApointment extends Error {
  constructor() {
    super('Paciente não tem consulta')
  }
}

module.exports = PacienteDoesNotHaveApointment