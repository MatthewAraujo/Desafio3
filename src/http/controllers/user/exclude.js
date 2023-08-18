const makeRegisterUseCase = require('../../../repositories/factories/make-paciente-use-case')
const { z } = require('zod')
const makeExcludeUseCase = require('../../../repositories/factories/make-exclude-use-case')


async function exclude(data){
  const registerBodySchema = z.object({
    cpf: z.string().length(11),
  })
  const { cpf } = registerBodySchema.parse(data)
  
  try{
    const excludeUseCase = makeExcludeUseCase()
    await excludeUseCase.execute({
      cpf,
    })
  } catch (error) {
    return new Error('Paciente não existe')
  }
}

module.exports = exclude