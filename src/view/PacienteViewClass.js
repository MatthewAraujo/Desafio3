const register  = require("../http/controllers/user/register")
const exclude = require("../http/controllers/user/exclude")
const PromptSync = require('prompt-sync')

const prompt = PromptSync({ sigint: true }); // Permite terminar o programa com CTRL-C

class PacienteView{


  async CadastrarnovoPaciente(){
    const cpf = prompt('Digite o CPF do paciente: ');
    const nome = prompt('Digite o nome do paciente: ');
    const data_nascimento = prompt('Digite a data de nascimento do paciente (DD/MM/AAAA): ');
  
   try{
      await register({
        nome,
        data_nascimento,
        cpf,
      })
      return console.log('Paciente cadastrado com sucesso!'	)
    } catch (error ) {
      throw new Error('Paciente já existe')
   }
  }

  async ExcluirPaciente(){
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

module.exports = PacienteView 