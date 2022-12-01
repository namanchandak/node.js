// const {console}=require('console')
const fs=require('fs')


const http=require('http')
const port=process.env.PORT || 3000;

const server=http.createServer((req,res)=>{


    
    res.setHeader('Content-type','text/html')
    // console.log(req);
    if(req.url =='/')
    {
        res.statusCode=200;
        const data=fs.readFileSync('index.html')
        res.end(data.toString())


        
    }
    else if (req.url =='/about')
    {
        res.statusCode=200;
        res.end('<h>about this is naman</h> <p>about wala I am here to learn and explore</p>')

    }
//////////////
    else if (req.url =='/hello')
    {

        res.statusCode=200;
        res.end('<h> this is naman</h> <p>I am here to learn and explore</p>')

        

    }

    else
    {
        // res.naman()
        res.statusCode=404;

        res.end('<h>not found h re dada</h> <p>not here</p>')

    }

    
    console.log(req.url);
})
server.listen(port ,()=>{
    console.log(`server is listening on port ${port}`)
})