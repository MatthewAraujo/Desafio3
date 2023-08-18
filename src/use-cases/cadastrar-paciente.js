
const PacienteAlreadyExistsError = require("./errors/paciente-alredy-exists")
const SequelizePacienteRepository = require("../repositories/sequelize/sequelize-paciente-repository")
const PacienteUnderAgeError = require("./errors/paciente-menor-de-idade")
const Utils = require("../utils/index.js")

class RegisterUseCase {
  constructor(){
  }

  async execute({
   cpf,
   data_nascimento,
   nome,
  }) {

    const utils = new Utils()
    const pacienteRepository = new SequelizePacienteRepository()
    const userWithSameCpf = await pacienteRepository.findByCpf(cpf)

    if (!(userWithSameCpf == null)) {
      throw new PacienteAlreadyExistsError();
    }
    console.log('indo criar paciente')


    const userUnderAge = utils.isUnderAge(data_nascimento)

    if(userUnderAge) {
      throw new PacienteUnderAgeError();
    }
    const paciente = await pacienteRepository.create({
      cpf,
      data_nascimento,
      nome,
    })

    return {
      paciente,
    }
  }
}

module.exports = RegisterUseCase