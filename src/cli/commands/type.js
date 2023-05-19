const { Type } = require('../../database/models/type');

async function createType(name) {
  try {
    const type = await Type.create({ name });
    console.log(`New device type created: ${type.name}`);
  } catch (error) {
    console.error('Error creating device type:', error);
  }
}

async function updateType(id, name) {
  try {
    const type = await Type.findByPk(id);
    if (!type) {
      console.log(`Device type with ID ${id} not found.`);
      return;
    }
    await type.update({ name });
    console.log(`Device type updated: ${type.name}`);
  } catch (error) {
    console.error('Error updating device type:', error);
  }
}

async function deleteType(id) {
  try {
    const type = await Type.findByPk(id);
    if (!type) {
      console.log(`Device type with ID ${id} not found.`);
      return;
    }
    await type.destroy();
    console.log(`Device type deleted: ${type.name}`);
  } catch (error) {
    console.error('Error deleting device type:', error);
  }
}

async function listTypes() {
  try {
    const types = await Type.findAll();
    console.log('Device Types:');
    types.forEach((type) => {
      console.log(`${type.id}: ${type.name}`);
    });
  } catch (error) {
    console.error('Error listing device types:', error);
  }
}

async function getType(id) {
  try {
    const type = await Type.findByPk(id);
    if (!type) {
      console.log(`Device type with ID ${id} not found.`);
      return;
    }
    console.log(`Device Type Details:`);
    console.log(`ID: ${type.id}`);
    console.log(`Name: ${type.name}`);
  } catch (error) {
    console.error('Error getting device type:', error);
  }
}

module.exports = {
  createType,
  updateType,
  deleteType,
  listTypes,
  getType,
};