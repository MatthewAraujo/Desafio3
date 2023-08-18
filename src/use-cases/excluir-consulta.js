const SequelizeConsultorioRepository = require("../repositories/sequelize/sequelize-consultorio-repository");

class ExcludeConsultaUseCase {
  constructor(){
  }

  async execute({
   cpf,
  }) {
 
    const userHasConsultaCpf = await consultaRepository.findByCpf(cpf)
    
    if (!userHasConsultaCpf) {
      throw new PacienteNotFoundError();
    }

    const consultaRepository = new SequelizeConsultorioRepository()

   

    const paciente = await pacienteRepository.delete({
      cpf,
    })
    console.log(paciente)
    return {
      paciente,
    }
  }
}

module.exports = ExcludeConsultaUseCase