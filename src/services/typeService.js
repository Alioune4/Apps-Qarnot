const Type = require("../database/models/type");

async function createType(name) {
  try {
    const type = await Type.create({ name });
    console.log(`Created type with id ${type.id}`);
  } catch (error) {
    console.error('Error creating type:', error);
  }
}

async function updateType(id, name) {
  try {
    const type = await Type.findByPk(id);
    if (type) {
      await type.update({ name });
      console.log(`Updated type with id ${id}`);
    } else {
      console.log(`Type with id ${id} not found`);
    }
  } catch (error) {
    console.error('Error updating type:', error);
  }
}

async function deleteType(id) {
  try {
    const type = await Type.findByPk(id);
    if (type) {
      await type.destroy();
      console.log(`Deleted type with id ${id}`);
    } else {
      console.log(`Type with id ${id} not found`);
    }
  } catch (error) {
    console.error('Error deleting type:', error);
  }
}

async function listTypes() {
  try {
    const types = await Type.findAll();
    console.log("Device types:");
    types.forEach((type) => {
      console.log(`- ${type.id}: ${type.name}`);
    });
  } catch (error) {
    console.error('Error listing types:', error);
  }
}

async function getType(id) {
  try {
    const type = await Type.findByPk(id);
    if (type) {
      console.log(`Type with id ${type.id}: ${type.name}`);
    } else {
      console.log(`Type with id ${id} not found`);
    }
  } catch (error) {
    console.error('Error getting type:', error);
  }
}

module.exports = {
  createType,
  updateType,
  deleteType,
  listTypes,
  getType,
};