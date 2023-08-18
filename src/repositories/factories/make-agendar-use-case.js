const AgendarPacienteUseCase = require("../../use-cases/agendar-consulta")
const SequelizeConsultorioRepository = require("../sequelize/sequelize-consultorio-repository")


function makeAgendarUseCase() {
  const consultorioRepository = new SequelizeConsultorioRepository()
  const agendarUseCase = new AgendarPacienteUseCase(consultorioRepository)

  return agendarUseCase
}

module.exports = makeAgendarUseCase