const http = require("http");
const userForm = require("./userForm");
const userDataSubmit = require("./userDataSubmit");
const server = http.createServer((req, res) => {
  console.log("Server start...");
  // res.writeHead(200, { "content-type": "text/html" });
  if (req.url == "/") {
    userForm(req, res);
  } else if (req.url == "/submit") {
    userDataSubmit(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h2>Invalid url</h2>");
    res.end("<h2>Invalid URL</h2>");
  }
  // res.end();
});

server.listen(3650);
