import express from "express";
import dotenv from "dotenv";
import ejs from "ejs";
import { connectDB } from "./db_helper/db_helper.js";

dotenv.config();

const app = express();

app.set("view engine", ejs);

(async () => {
  try {
    console.log("Connecting to DB...........");

    const dbData = await connectDB();

    const users = await dbData.connection.db
      .collection("users")
      .find({})
      .toArray();

    console.log(users);

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();



//! get api making : 