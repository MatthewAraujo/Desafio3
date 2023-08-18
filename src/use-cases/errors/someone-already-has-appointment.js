class someoneAlreadyHasAppointment extends Error {
  constructor () {
    super('Já existe um paciente agendado neste horário')
  }
} 

module.exports = someoneAlreadyHasAppointment