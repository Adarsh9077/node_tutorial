import express from "express";

const app = express();

function checkRoute(req, res, next) {
  console.log(req.url);
  next();
}

app.use(checkRoute);

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/user", (req, res) => {
  res.send("<h1>User page..........</h1>");
});

app.get("/products", (res, req) => {
  res.send("<h1>Products page...........</h1>");
});

app.listen("3200", (req, res) => {
  console.log("server start...............");
});


//! #31 start