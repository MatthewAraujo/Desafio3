class ConsultorioRepository{

  async apointmentIsOutsideBusinessHours(data_inicio, data_final){
    return data_inicio.getHours() < 8 || data_final.getHours() > 18
  }

  async transformDate(data, hora){
    const [day, month, year] = data.split('/')
    const [hour, minutes] = hora.split(':')
    return new Date(year, month, day, hour, minutes)
  }

}

module.exports = ConsultorioRepository