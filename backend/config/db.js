import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected ");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default ConnectDB;
