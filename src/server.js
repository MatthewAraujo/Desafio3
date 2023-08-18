// const Consulta = require("./models/Consulta");
// const Paciente = require("./models/Paciente");
// require('./database')
// const Paz = {
//   async store() {
//     const paciente = await Paciente.create({
//       nome: 'João',
//       data_nascimento: '1990-01-01',
//       cpf: '12345678900',
//      });


//     return paciente
//   }
// }



// const Con = {
//   async store() {

//     const user = await Paciente.findOne({
//       where: { cpf: '12345678900' }
//     })

//     if(!user){
//       throw new Error('User not found')
//     }

//     const consulta = await Consulta.create({
//       cpf: '12345678900',
//       data_hora_inicio: new Date('2021-08-10 16:00:00'),
//       data_hora_fim: new Date('2021-08-10 16:30:00'),
//     });
//     return consulta
//   }
// }


// const Paz = {
//   async store() {
//     // const pacientes = await Paciente.destroy({
//     //   where: {
//     //     id:5,
//     //   }
//     // })
//     // return pacientes
//     const paciente  = await Paciente.findAll()
//     return paciente
//   }
// }


// async function main() {
//   const pacientes = await Con.store()
//   console.log(pacientes)
// }

// main()

const Menu = require('./view/menu.js')
const menu = new Menu()
menu.menuPrincipal()
