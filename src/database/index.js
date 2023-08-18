const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Paciente = require('../models/Paciente');
const Consulta = require('../models/Consulta');
const connection = new Sequelize(dbConfig);

Paciente.init(connection);
Consulta.init(connection);
Consulta.associate(connection.models);
module.exports = connection;