const SequelizeConsultorioRepository = require("../repositories/sequelize/sequelize-consultorio-repository");

class ExcludePacientUseCase {
  constructor(){
  }

  async execute({
   cpf,
  }) {
 
    const consultaRepository = new SequelizeConsultorioRepository()
    const userHasConsultaCpf = await consultaRepository.findByCpf(formatCpf)
    console.log(userWithSameCpf, 'userWithSameCpf')
    

    if (!userWithSameCpf) {
      throw new PacienteNotFoundError();
    }

    const paciente = await pacienteRepository.delete({
      cpf,
    })
    çonsole.log(paciente)
    return {
      paciente,
    }
  }
}

module.exports = ExcludePacientUseCase