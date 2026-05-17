// ! #39:  05:30
import express from "express";
import { handleUser } from "./controllers/user.controllers.js";

const app = express();
app.set("view engine","ejs");
app.get("/users",handleUser);

app.listen(3299);
