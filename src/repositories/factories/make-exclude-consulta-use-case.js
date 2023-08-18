const ExcluirConsultaUseCase = require("../../use-cases/excluir-consulta")
const SequelizeConsultorioRepository = require("../sequelize/sequelize-consultorio-repository")


function makeExcluirConsultaUseCase() {
  const consultorioRepository = new SequelizeConsultorioRepository()
  const excluirConsultaUseCase = new ExcluirConsultaUseCase(consultorioRepository)

  return excluirConsultaUseCase
}

module.exports = makeExcluirConsultaUseCase