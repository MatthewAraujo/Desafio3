const ExcludePacientUseCase = require("../../use-cases/excluir-paciente")
const SequelizePacienteRepository = require("../sequelize/sequelize-paciente-repository")

function makeExcludeUseCase() {
  const pacienteRepository = new SequelizePacienteRepository()
  const excludeUseCase = new ExcludePacientUseCase(pacienteRepository)

  return excludeUseCase
}

module.exports = makeExcludeUseCase