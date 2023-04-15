const mongoose = require('mongoose');

async function connect() {
  const db = 'bootcamp-testing';
  const url = `mongodb://root:root@127.0.0.1:27017/${db}`;
  try {
    await mongoose.connect(url, { authSource: 'admin' });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
module.exports = connect;
