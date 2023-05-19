const { DataTypes, Model } = require('sequelize');
const sequelize = require('../index');

class Type extends Model {
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
        modelName: 'Type',
      }
    );
  }

  static associate(models) {
    this.hasMany(models.DeviceModel);
  }
}

module.exports = Type;