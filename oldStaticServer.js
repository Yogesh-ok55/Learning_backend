const http = require('http')
const fs = require('fs')
const path = require('path')


const server= http.createServer(function(req,res){
     console.log(req.url)
    if(req.url==='/'){
        fs.readFile('./public/index.html',{encoding:'utf-8'},function(err,data){
            res.writeHead(200,{'content-type':'text/html'})
            res.end(data);
        })
    }
    else if(req.url.match("\.css$")){
        const cssPath = path.join(__dirname,'public',req.url);
        const fileStream = fs.createReadStream(cssPath ,'utf-8')
        console.log(cssPath);
        res.writeHead(200,{'content-type':'text/css'})
        fileStream.pipe(res)
    }
    else if(req.url.match("\.png$")){
        const cssPath = path.join(__dirname,'public',req.url);
        const fileStream = fs.createReadStream(cssPath ,'utf-8')
        console.log(cssPath);
        res.writeHead(200,{'content-type':'text/png'})
        fileStream.pipe(res)//for sending images
    }
})

server.listen(3000,()=>{console.log("server is running on port numer 3000")})