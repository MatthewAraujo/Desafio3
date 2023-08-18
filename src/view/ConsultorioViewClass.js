const agendar  = require("../http/controllers/consultorio/agendar.js")
const exclude = require("../http/controllers/consultorio/exclude.js")
const PromptSync = require('prompt-sync')

const prompt = PromptSync({ sigint: true }); // Permite terminar o programa com CTRL-C

class ConsultorioView{

  async agendarConsulta(){
    const cpf = prompt('Digite o CPF do paciente: ');
    const data = prompt('Digite a data da consulta (DD/MM/AAAA): ');
    const hora_inicio = prompt('Digite a hora inicio do paciente: ');
    const hora_final = prompt('Digite a hora final da consulta ');
  
   try{
      await agendar({
        cpf,
        data,
        hora_inicio,
        hora_final,
      })
      return console.log('Consulta Agendada com sucesso!'	)
    } catch (error ) {
      throw new Error('Consulta já existe')
   }
  }

  async ExcluirConsulta(){
    const cpf = prompt('Digite o CPF do paciente: ');

    try{
      await exclude({
        cpf,
      })
      return console.log('Paciente excluido com sucesso!'	)
    }
    catch (error) {
      throw new Error('Paciente não existe')
    }
  }
}

module.exports = ConsultorioView 