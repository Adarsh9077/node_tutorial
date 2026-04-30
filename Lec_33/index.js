import express from "express";
import path from "path";
const app = express();

const publicPath = path.resolve("view");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"))
app.get("/", (req, res) => {
  //   res.send("<h1>Home page</h1>");
  console.log(publicPath);
  res.sendFile(publicPath + "/home.html");
});

app.get("/login", (req, res) => {
  res.send(`<form action="/submit" method="post">
    <input type="text" placeholder="Enter your email" name="Email">
    <input type="text" placeholder="enter your password" name="password">
    <button>Submit</button>
    </form>`);
});
app.post("/submit", (req, res) => {
  console.log("user login details are: ", req.body);
  res.send("<h1>submit page</h1>");
});

app.listen(3200, (req, res) => {
  console.log("server start at 3200");
});
