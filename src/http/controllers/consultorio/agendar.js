const makeAgendarUseCase = require("../../../repositories/factories/make-agendar-use-case")


async function agendar(data){
  const agendarBodySchema = z.object({
    cpf: z.string().length(11),
    data: z.string(),
    hora_inicio: z.string(),
    hora_final: z.string(),
  })

  const { cpf, hora_inicio,data, hora_final } = agendarBodySchema.parse(data)
  
  try{
    const agendarUseCase = makeAgendarUseCase()
    await agendarUseCase.execute({
      cpf,
      data,
      hora_inicio,
      hora_final,
    })
  } catch (error) {
    if (error instanceof PacienteAlreadyExistsError) {
      throw new Error('Paciente já possui um agendamento')
    }

    throw error
    
  }
}

module.exports = agendar