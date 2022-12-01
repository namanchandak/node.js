const path = require('node:path');

const a=path.basename('C:\\temp\\myfile.html');
const a2=path.dirname('C:\\temp\\myfile.html');
console.log(a2)
const c=path.extname(__filename)

console.log(__filename,c
    )