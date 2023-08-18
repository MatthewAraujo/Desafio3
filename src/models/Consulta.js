const { Model, DataTypes } = require('sequelize');

class Consulta extends Model {
  static init(sequelize) {
    super.init({
      cpf: DataTypes.STRING,
      data_hora_inicio: DataTypes.DATE,
      data_hora_fim: DataTypes.DATE,
    }, {
      sequelize,
      modelName: 'Consulta', // Certifique-se de usar o mesmo nome definido na migração
     
    });
  }

  static associate(models) {
    this.belongsTo(models.Paciente, { foreignKey: 'cpf', as: 'pacientes' });
  }
}

module.exports = Consulta;
