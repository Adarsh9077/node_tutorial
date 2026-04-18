const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h1>Hello this from express JS..</h1>");
//   res.end();
});

app.get("/about",(req,res)=>{
res.send("<h1>This is About us page via node express </h1>")
})

app.listen(3200);
