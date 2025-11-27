const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.headers.host);
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    res.write(
      `<html>
      <head>
      <title>Home Page</title>
      </head>
      <body><h1>Home Page........</h1>
      </body>
      </html>`
    );
  } else if (req.url == "/login") {
    res.write(
      `<html>
      <head>
      <title>Home Page</title>
      </head>
      <body><h1>Login Page........</h1>
      </body>
      </html>`
    );
  } else {
    res.write(
      `<html>
      <head>
      <title>Home Page</title>
      </head>
      <body><h1>Error 404 ........</h1>
      <p>Page Not found.......</p>
      </body>
      </html>`
    );
  }
  res.end();
});

server.listen(4100);
