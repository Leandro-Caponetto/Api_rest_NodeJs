/** @format */

const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const DB_URI = process.env.DB_URI;
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.table({mongodb:` **** THE CONNECTION TO MONGODB IS CORRECT ****`});
  } catch (err) {
    console.error(`**** CONNECTION ERROR: ${err.message} ****`);
  }
};

module.exports = dbConnect;
