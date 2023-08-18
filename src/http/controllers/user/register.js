const makeRegisterUseCase = require('../../../repositories/factories/make-paciente-use-case')
const { z } = require('zod')
const PacienteAlreadyExistsError = require('../../../use-cases/errors/paciente-alredy-exists.js')
const PacienteUnderAgeError = require('../../../use-cases/errors/paciente-menor-de-idade')


async function register(data){
  const registerBodySchema = z.object({
    nome: z.string().min(3).max(255),
    data_nascimento: z.string().min(3).max(255),
    cpf: z.string().length(11),
  })
  const { nome, data_nascimento , cpf } = registerBodySchema.parse(data)
  
  try{
    const registerUseCase = makeRegisterUseCase()
    await registerUseCase.execute({
      nome,
      cpf,
      data_nascimento,
    })
  } catch (error) {
    if (error instanceof PacienteAlreadyExistsError) {
      throw new Error('Paciente já existe')
    }
    
    if(error instanceof PacienteUnderAgeError){
      throw new Error('Paciente menor de idade')
    }
  }
}

module.exports = register