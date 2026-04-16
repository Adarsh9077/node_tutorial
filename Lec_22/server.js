const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    const filePath = path.join(__dirname, "cavaza-html/index.html");
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        res.writeHead(500, { "content-type": "text/html" });
        res.end("Internal server error");
        return false;
      }
      // res.write(data);
      res.end(data);
    });
    // console.log("object");
    console.log("-----------> "+req.url);
  } else if (req.url == "/assets/css/style.css") {
    console.log(req.url);
    const filePath = path.join(__dirname, "cavaza-html/assets/css/style.css");
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("Css not found");
        return false;
      }
      res.writeHead(200, { "content-type": "text/css" });
      res.end(data);
    });
  } else {
    // 🔥 fallback route (you forgot this)
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Page not found");
  }
  // res.write("Page Check");
});

// server.listen(3200);
server.listen(3200, () => {
  console.log("Server running on http://localhost:3200");
});
// ! 08:50
