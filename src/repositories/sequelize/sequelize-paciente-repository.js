const Paciente = require("../../models/Paciente.js");
require('../../database')
class SequelizePacienteRepository  {
  async create(data) {
   
    const paciente = await Paciente.create({
      nome: data.nome,
      data_nascimento: data.data_nascimento,
      cpf: data.cpf,
    });
    return paciente;
  }


  async findByCpf(cpf){
    const paciente = await Paciente.findOne({
      where: { cpf: cpf }
    })
    return paciente
  }


  async exclude(cpf){
    const paciente = await Paciente.destroy({
      where: {
        cpf:cpf,
      }
    })
    return paciente
  }


  
  
}

module.exports = SequelizePacienteRepository