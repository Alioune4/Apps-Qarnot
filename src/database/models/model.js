const { DataTypes, Model } = require('sequelize');
const sequelize = require('../index');

class DeviceModel extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Model',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Type);
    this.hasMany(models.Device);
  }
}

module.exports = DeviceModel;