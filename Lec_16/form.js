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
        var userInfo = {
          userName: "",
          userEmail: "",
        };
        req.on("end", () => {
          let rawData = Buffer.concat(dataBody).toString();
          let readableData = queryString.parse(rawData);
          console.log(rawData);
          console.log("@@@@@@@\n");
          console.log(readableData["email"]);
          userInfo["userName"] = readableData["name"];
          userInfo["userEmail"] = readableData["email"];
        });
        //! below was error(bug) not print in client side data pass
        res.write(`
            <h1>Form Submit Successfully ${userInfo["userName"]}</h1>
            `);
        res.end();
      }
    }
  });
});

server.listen(3600);
