const http=require('http')
const port=process.env.PORT || 3000;

const server=http.createServer((req,res)=>{

    

    res.statusCode=200;
    res.setHeader('Content-type','text/html')
    res.end('<h> this is naman</h> <p>I am here to learn and explore</p>')
    // console.log(req);
    console.log(req.url);
})
server.listen(port ,()=>{
    console.log(`server is listening on port ${port}`)
})