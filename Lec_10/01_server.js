const http = require("http");
const age = 25;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
        <head>
        <title>Server Side rendering.....</title>
        </head>
        <body>
        <h1>Hello This is server side...........</h1>
        <p>${age}</p>
        <h6>${new Date()}</h6>
        </body>
        </html>`);
  res.end("Hello..........");
});

server.listen(4800);
//! 11 | completed