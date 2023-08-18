const { z } = require('zod')
const makeExcludeUseCase = require('../../../repositories/factories/make-exclude-use-case')


async function exclude(data){
  const excludeBodySchema = z.object({
    cpf: z.string().length(11),
  })
  const { cpf } = excludeBodySchema.parse(data)
  
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