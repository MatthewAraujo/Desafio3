const RegisterUseCase = require("../../use-cases/cadastrar-paciente")
const SequelizePacienteRepository = require("../sequelize/sequelize-paciente-repository")

function makeRegisterUseCase() {
  const pacienteRepository = new SequelizePacienteRepository()
  const registerUseCase = new RegisterUseCase(pacienteRepository)

  return registerUseCase
}

module.exports = makeRegisterUseCase