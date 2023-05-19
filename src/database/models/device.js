const { DataTypes, Model } = require('sequelize');
const sequelize = require('../index');

class Device extends Model {
  static init(sequelize) {
    return super.init(
      {
        macAddress: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        state: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: 'stock',
        },
      },
      {
        sequelize,
        modelName: 'Device',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.DeviceModel);
  }
}

module.exports = Device;