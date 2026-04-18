import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1> Home page</h1>");
});

app.get("/login", (req, res) => {
  res.send(`<h1>This login page...</h1>
    <form action="/submit" method="post">
    <input type="text" placeholder="Enter Name"/>
    <br/>
    <br/>
    <input type="password" placeholder="Enter Password"/>
    <br/>
    <br/>
    <button>Login</button>
    </form>
    `);
});

app.post("/submit", (req, res) => {
  res.send(`<h1>This submit page....</h1>
    <h3>Data Submit</h3>
    `);
});

app.listen(3250);


//! #27
//! 05:25
