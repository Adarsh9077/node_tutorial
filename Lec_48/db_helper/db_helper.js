import mongoose from "mongoose";
import dotenv from "dotenv";

const DBName = "quiz_bank";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DBName}`,
    );
    console.log(
      `\n----->\tMongoDb connected : ${connectionInstance.connection.host}`,
    );
    return connectionInstance;
  } catch (error) {
    console.error(`MongoDB error Not connected \nConnection failed:\n`, error);
    process.exit(1);
  }
};

export { DBName, connectDB };
