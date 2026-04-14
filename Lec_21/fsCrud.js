const fs = require("fs");

console.log(` ----------------> ${process.argv[2]}`);
const operation = process.argv[2];

if (operation == "write") {
  const fileName = process.argv[3];
  const content = process.argv[4];
  const fullFileName = "file/" + fileName + ".txt";
  fs.writeFileSync(fullFileName, content);
} else if (operation == "read") {
  const fileName = process.argv[3];
  // const content = process.argv[4];
  const fullFileName = "file/" + fileName + ".txt";
  const fileContent = fs.readFileSync(fullFileName, "utf-8");
  console.log(fileContent);
}


//! start->  Node JS Tutorial in Hindi #22 Make Simple and Basic Website


