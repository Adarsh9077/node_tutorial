import express from "express";
import Home from "./pages/home.js"
import Login from "./pages/login.js"
import Submit from "./pages/submit.js"

const app = express();

app.get("/", (req, res) => {
  res.send(Home());
});

app.get("/login", (req, res) => {
  res.send(Login());
});

app.post("/submit", (req, res) => {
  res.send(Submit());
});

app.listen(3250);


//! #28
//! 00:00
