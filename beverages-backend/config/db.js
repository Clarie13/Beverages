const mongoose = require("mongoose");

const connectDB = async () => {
  try {
      mongoose.connection.on('connected', ()=> console.log('Database connected'))
await mongoose.connect(`${process.env.MONGODB_URI}/beverages`) //add the name of db you've created
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;