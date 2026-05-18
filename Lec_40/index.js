import express from "express";

const app = express();

app.get("/", async (req, res) => {
  const users = ["anil", "sam", "peter", "sidhu", "sonu"];
  let data = `<ol>`;
  for (let i = 0; i < users.length; i++) {
    data += `<li><a href="user/${users[i]}">${users[i].substring(0, 1).toUpperCase() + users[i].substring(1)}</a></li>`;
    const element = users[i];
  }
  data += `</ol>`;
  res.send(data);
});

app.get("/user/:name", (req, res) => {
  console.log(req.params.name);
  const userName = req.params.name;
  res.send(
    `<h1>Hello, this is ${userName.substring(0, 1).toUpperCase() + userName.substring(1)}</h1>`,
  );
});

app.listen(3999);

// ! #40:  00:00
