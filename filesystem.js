const fs = require('fs');
// fs.readFile('file.txt',"utf8",(err,data)=>
// {
//     console.log(err,data)
// })

///intentientialy block 
// const a=fs.readFileSync('file.txt')

//     console.log(a.toString())



// console.log("finished reading buddy")

// fs.writeFile('file2',"this is data written in file 2",()=>
// {
//     console.log("writt in file 2")
// })

b=fs.writeFileSync('file2',"this is data written in file 2 abcd"
)
console.log(b)
console.log("finished reading buddy")

