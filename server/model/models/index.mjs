import sequelizePackage from 'sequelize';
import allConfig from '../config/config.js';

import initChoiceModel from './Choice.mjs';
import initQuestionModel from './Question.mjs';

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Choice = initChoiceModel(sequelize, Sequelize.DataTypes);
db.Question = initQuestionModel(sequelize, Sequelize.DataTypes);

// The following 2 lines enable Sequelize to recognise the 1-M relationship
// between Item and Category models, providing the mixin association methods.
db.Choice.belongsTo(db.Question);
db.Question.hasMany(db.Choice);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;