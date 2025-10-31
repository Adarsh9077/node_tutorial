const http = require("http");
const server = http.createServer((req, res) => {
    res.write("<h1>Hello ! I'm Learning fullstack.....</h1>")
  res.end("Hello....");
});
server.listen(4800);