const Consulta = require("../../models/Consulta.js");
require('../../database')

class SequelizeConsultorioRepository{


  async create(){
    const consulta = await Consulta.create({
      cpf,
      data,
      hora_inicio,
      hora_final,
    })

    return consulta

  }

  async findAppointment(data_inicio, data_final){
    const consultaNoMeio = await Consulta.findOne({
      where: {
        [Op.or]: [
          {
            data_hora_inicio: {
              [Op.between]: [data_inicio, data_final],
            },
          },
          {
            data_hora_fim: {
              [Op.between]: [data_final, data_final],
            },
          },
          {
            [Op.and]: [
              {
                data_hora_inicio: {
                  [Op.lte]: data_inicio,
                },
              },
              {
                data_hora_fim: {
                  [Op.gte]: data_final,
                },
              },
            ],
          },
        ],
      },
    });

    return consultaNoMeio
  }

}

module.exports = SequelizeConsultorioRepository