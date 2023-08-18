const { z } = require('zod')

const makeExcluirConsultaUseCase = require('../../../repositories/factories/make-exclude-consulta-use-case')
async function exclude(data){
  const excludeBodySchema = z.object({
    cpf: z.string().length(11),
  })
  const { cpf } = excludeBodySchema.parse(data)
  
  try{
    const excludeUseCase = makeExcluirConsultaUseCase()
    await excludeUseCase.execute({
      cpf,
    })
  } catch (error) {
    return new Error('Paciente não existe')
  }
}

module.exports = exclude