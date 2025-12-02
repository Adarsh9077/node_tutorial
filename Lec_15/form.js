const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  if (req.url == "/") {
    res.write(
      `<div className="container" style="height:500px;display:flex;     
    align-items: center;
    justify-content: center;">
    <form action="/submit" className="formId" method="post">
    <div className="name_input_box">
    <center>
    <input type="text" placeholder="Enter your Name" name='name' />
    </center>
    </div>
    <br>
    <div className="email_input_box">
    <center>
    <input type="email" placeholder="Enter your Email" name='email' />
    </center>
    </div>
    <br>
    <center><button type="submit">Submit</button></center>
    </form>
    </div>`
    );
  } else if (req.url == "/submit") {
    res.write("<h1>Form Submit successful</h1>");
  }
  res.end();
});

server.listen(3650);
