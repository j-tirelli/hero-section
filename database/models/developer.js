'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Developer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Developer.hasMany(models.Game, { foreignKey: 'developer_id' });
    }
  };
  Developer.init({
    developerName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Developer',
    underscored: true,
    timestamps: true,
    tableName: 'developers'
  });
  return Developer;
};