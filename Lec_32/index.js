import express from "express";

const app = express();

function checkAgeRouteMiddleware(req, res, next) {
  if (!req.query.age || req.query.age < 18) {
    res.send("<h1>You are not allowed </h1>");
  } else {
    next();
  }
}

function checkUrlRouteMiddleware(req, res, next) {
  console.log("this is url: ", req.url);

  next();
}

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});
app.get(
  "/login",
  checkAgeRouteMiddleware,
  checkUrlRouteMiddleware,
  (req, res) => {
    res.send("<h2>login page.........</h2>");
  },
);

app.get("/user", checkAgeRouteMiddleware, (req, res) => {
  res.send("<h2>User's page...</h2>");
});
app.get("/products", (req, res) => {
  res.send("<h2>Product Page.......</h2>");
});
app.listen(3200, (req, res) => {
  console.log("Server start...... at 3200");
});
//! #33 start
