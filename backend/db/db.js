const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);

    console.log('MongoDB connected successfully');

  } catch (error) {
    console.log("Error Occured", error)
    res.json(error)
  }
};

module.exports = connectDB