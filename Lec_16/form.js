const http = require("http");
const queryString = require("querystring");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("./html/form.html", "utf-8", (error, data) => {
    if (error) {
      res.writeHead(500, { "content-type": "text/plain" });
      return res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      if (req.url == "/") {
        res.write(data);
        res.end();
      } else if (req.url == "/submit") {
        // res.writeHead(200, { "content-type": "plain/html" });
        let dataBody = [];
        req.on("data", (chunk) => {
          dataBody.push(chunk);
        });
        req.on("end", () => {
          let rawData = Buffer.concat(dataBody).toString();
          let readableData = queryString.parse(rawData);
          console.log(rawData);
          console.log("@@@@@@@\n");
          console.log(readableData["email"]);
          let dataString = `My name is ${readableData["name"]} and email is ${readableData["email"]}`;
          fs.writeFile(
            "text/" + readableData["name"] + ".txt",
            dataString,
            "utf-8",
            (err) => {
              if (err) {
                res.end("Internal Server Error");
                return false;
              } else {
                console.log("File was create.......");
              }
            }
          );
        });
        res.write(`
            <h1>Form Submit Successfully</h1>
            `);
        res.end();
      }
    }
  });
});

server.listen(3600);
