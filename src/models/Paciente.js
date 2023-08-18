const {Model, DataTypes} = require('sequelize');

class Paciente extends Model{
  static init(sequelize){
    super.init({
      nome: DataTypes.STRING,
      data_nascimento: DataTypes.DATE,
      cpf: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'Paciente',
    })

  }
}

module.exports= Paciente