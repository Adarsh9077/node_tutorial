const queryString = require("querystring");

function userDataSubmit(req, res) {
  let dataBody = [];
  let readableData;
  req.on("data", (chunk) => {
    dataBody.push(chunk);
  });
  req.on("end", () => {
    let rawData = Buffer.concat(dataBody).toString();
    readableData = queryString.parse(rawData);
    console.log(readableData);
  });
  res.write(`    <div className="container" style="
    height:500px;
    display:flex;     
    align-items: center;
    justify-content: center;">
       <h2>Form Submit Successfully</h2>
       <p>.</p>
    </div>`);
}

module.exports = userDataSubmit;
