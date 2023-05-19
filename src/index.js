const program = require('commander');
const { initializeDatabase } = require("./database/index");
const { createType, updateType, deleteType, listTypes, getType } = require('./cli/commands/type');
//const { createModel, updateModel, deleteModel, listModels, getModel } = require('./cli/commands/model');
//const { createDevice, updateDevice, deleteDevice, listDevices, getDevice } = require('./cli/commands/device');

// Initialize the database connection
initializeDatabase();


//Type Command
program
  .command('create-type <name>')
  .description('Create a new device type')
  .action(createType);

program
  .command('update-type <id>')
  .description('Update the name of a device type')
  .action(updateType);

program
  .command('delete-type <id>')
  .description('Delete a device type')
  .action(deleteType);

program
  .command('list-types')
  .description('List all device types')
  .action(listTypes);

program
  .command('get-type <id>')
  .description('Get details of a specific device type')
  .action(getType);

// Model command
/*program
  .command('create-model <typeId> <name>')
  .description('Create a new device model')
  .action(createModel);

program
  .command('update-model <id>')
  .description('Update the name and/or type of a device model')
  .action(updateModel);

program
  .command('delete-model <id>')
  .description('Delete a device model')
  .action(deleteModel);

program
  .command('list-models')
  .description('List all device models')
  .action(listModels);

program
  .command('get-model <id>')
  .description('Get details of a specific device model')
  .action(getModel);

// Device command
program
  .command('create-device <modelId> <mac> [state]')
  .description('Create a new device')
  .action(createDevice);

program
  .command('update-device <id>')
  .description('Update the MAC address and/or state of a device')
  .action(updateDevice);

program
  .command('delete-device <id>')
  .description('Delete a device')
  .action(deleteDevice);

program
  .command('list-devices')
  .description('List all devices')
  .action(listDevices);

program
  .command('get-device <id>')
  .description('Get details of a specific device')
  .action(getDevice);*/

// Parse the command line arguments
program.parse(process.argv);