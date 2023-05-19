const { Sequelize } = require('sequelize');
const config = require('./config');

// Create a sequelize instance
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
});

// Import the models
const Device = require('./models/device');
const DeviceModel = require('./models/model');
const Type = require('./models/type');

// Initialize the models
const deviceModel = Device.init(sequelize);
const modelModel = DeviceModel.init(sequelize);
const typeModel = Type.init(sequelize);

// Define the associations
Device.associate({ DeviceModel });
DeviceModel.associate({ Type, Device });
Type.associate({ DeviceModel });

// Initialize the database
async function initializeDatabase() {
  try {
    console.log(config.username, config.password);
    // Connect to the database
    await sequelize.authenticate();
    console.log('Connected to the database successfully.');

    // Synchronize the models with the database and create tables if they don't exist
    await sequelize.sync();
    console.log('Database synchronized successfully.');

  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

module.exports = {
  sequelize,
  initializeDatabase,
};