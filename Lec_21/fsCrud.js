const fs = require('fs');

console.log(process.argv);
const operation = process.argv[2];

if(operation == 'write'){
    const fileName = process.argv[3];
    const content = process.argv[4];
    const fullFileName = "file/"+fileName+".txt";
    fs.writeFileSync(fullFileName,content)
}