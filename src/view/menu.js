const PromptSync = require('prompt-sync')
const PacienteView = require('./PacienteViewClass');

const prompt = PromptSync({ sigint: true }); // Permite terminar o programa com CTRL-C


class Menu {


   menuPrincipal() {
    let opcao = ''
    do{
      console.log('======= Consultório Médico =======');
      console.log('1. Cadastro de pacientes');
      console.log('2. Agenda');
      console.log('3. Sair');
      console.log('==================================');
      opcao = prompt('Selecione uma opção: ')

      switch (opcao) {
        case '1':
          const user = this.menuCadastroPaciente(opcao)
          return user
        case '2':
          this.menuAgenda(opcao)
          break;
        case '3':
          console.log('Saindo do programa...')
          break;
      }
    }while(opcao !== '3');
    
  }


   async menuCadastroPaciente(opcao) {
    do{
      console.log('==================================');

      console.log('1 - Cadatrar novo paciente');
      console.log('2 - Excluir Paciente');
      console.log('3 - Listar pacientes por CPF');
      console.log('4 - Listar pacientes por nome');
      console.log('5 - Voltar ao menu principal');
      console.log('==================================');

      opcao = prompt('Digite a opção desejada: ');

      switch (opcao) {
        case '1':
          const paciente = new PacienteView()
          const user = await paciente.CadastrarnovoPaciente()
          if(user) {
            console.log(user)
          }
          break;
        case '2':
          const paciente2 = new PacienteView()
          const user2 = await paciente2.ExcluirPaciente()

          if(user2) {
            console.log(user2)
          }
          break;
        case '5':
          break;	
      }

    }while(opcao !== '5')
  }

  menuAgenda(opcao) {
    do{
      console.log('==================================');

      console.log('1 - Agendar consulta');
      console.log('2 - Cancelar agendamento');
      console.log('3 - Listar data agenda escolhida');
      console.log('4 - Listar toda escolhida')
      console.log('5 - Voltar ao menu principal');
      console.log('==================================');

      opcao = prompt('Digite a opção desejada: ');
      switch (opcao) {
        case '5':
          break
      }


    }while(opcao !== '5')
  } 
}

module.exports = Menu 