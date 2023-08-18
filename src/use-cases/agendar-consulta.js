const ConsultorioRepository = require("../repositories/consultorio-repository")
const SequelizePacienteRepository = require("../repositories/sequelize/sequelize-paciente-repository")
const SequelizeConsultorioRepository = require("../repositories/sequelize/sequelize-consultorio-repository")

class AgendarPacienteUseCase {
  constructor(){
  }

  async execute({
   cpf,
   data,
   hora_inicio,
   hora_final,
  }) { 

    const consultorioRepository = new ConsultorioRepository()

    const apointmentIsOutsideBusinessHours = consultorioRepository.apointmentIsOutsideBusinessHours(hora_inicio, hora_final)

    if(apointmentIsOutsideBusinessHours){
      throw new OutsideBussinessHours()
    }


    const pacienteRepository = new SequelizePacienteRepository()
    const userWithSameCpf = await pacienteRepository.findByCpf(cpf)
    
    if (userWithSameCpf) {
      throw new PacienteNotFoundError();
    }
    
    const consultorioSequelizeRepository = new SequelizeConsultorioRepository
    const data_inicio = consultorioRepository.transformDate(data, hora_inicio)
    const data_final = consultorioRepository.transformDate(data, hora_final)
    const someoneAlreadyHasAppointment = await consultorioSequelizeRepository.findAppointment(data_inicio, data_final)

    if(someoneAlreadyHasAppointment){
      throw new someoneAlreadyHasAppointment()
    }



    const paciente = await pacienteRepository.create({
      cpf,
      data,
      hora_inicio,
      hora_final,
    })

    return {
      paciente,
    }
  }
}

module.exports = AgendarPacienteUseCase