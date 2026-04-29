import express from "express";

const app = express();

function ageCheck(req, res, next) {
  if (!req.query.age || req.query.age < 18) {
    res.send("<h4>You are not allowed</h4>");
  } else {
    next();
  }
}

app.use(ageCheck);

app.get("/", (req, res) => {
  res.send("<h1>Home screen</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login screen</h1>");
});

app.get("/admin", (req, res) => {
  res.send("<h1>Admin screen</h1>");
});

app.listen("3200", (req, res) => {
  console.log("Server was start............. at 3200");
});


//! #32 start