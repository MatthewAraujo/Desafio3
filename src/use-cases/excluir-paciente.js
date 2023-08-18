
const SequelizePacienteRepository = require("../repositories/sequelize/sequelize-paciente-repository")
const PacienteNotFoundError = require("./errors/paciente-not-found")

class ExcludePacientUseCase {
  constructor(){
  }

  async execute({
   cpf,
  }) {
 
    const pacienteRepository = new SequelizePacienteRepository()
    const userWithSameCpf = await pacienteRepository.findByCpf(formatCpf)
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