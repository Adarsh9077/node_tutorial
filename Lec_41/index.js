import express from "express";
import userData from "./users.json" with { type: "json" };
const app = express();

app.get("/", (req, res) => {
  //   console.log(userData);
  res.send(userData);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  let fillerData = userData.filter((user) => user.id == id);
  res.send(fillerData);
});

app.get("/username/:name", (req, res) => {
  const usernameSearch = req.params.name;
  let username = userData.filter(
    (user) => user.name.toLowerCase() == usernameSearch.toLowerCase(),
  );
  res.send(username);
});

app.listen(3299);

//! #48  00:00
