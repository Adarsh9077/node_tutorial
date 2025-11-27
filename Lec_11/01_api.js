const http = require("http");
const { stringify } = require("querystring");
const userData = [
  {
    userName: "Anil",
    age: 28,
    "user-email": "anil@test.com",
  },
  {
    userName: "Anjali",
    age: 25,
    "user-email": "anjali@test.com",
  },
  {
    userName: "John Wick",
    age: 22,
    "user-email": "john@test.com",
  },
  {
    userName: "Peter Parker",
    age: 38,
    "user-email": "peterpaker@test.com",
  },
  {
    userName: "Harry Porter",
    age: 32,
    "user-email": "harryporter@test.com",
  },
  {
    userName: "John Weasley",
    age: 31,
    "user-email": "johnweasley@test.com",
  },
];
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  // res.write(`<html>
  //   <head>
  //   <title>Hello...</title>
  //   </head>
  //   <body>
  //   <h1>Hello From Server side...</h1>
  //   </body>
  //   </html>`);
  res.write(JSON.stringify(userData));

  res.end();
});

server.listen(3800);
