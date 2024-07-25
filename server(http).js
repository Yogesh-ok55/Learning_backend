const http = require("http")
const fs = require('fs')

const homepage = fs.readFileSync('./public/index.html')
const homepage_css = fs.readFileSync('./public/style.css')

// const server = http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end("<h1>this is home page</h1>");
//     }
//     if(req.url==='/about'){
//         res.end("<h1>this is not home page</h1>");
//     }
// })

// server.listen(3000,()=>{
//  console.log("your server is running  on port number 3000")
// })

//(domain name + route or end point) == url

//modified code -> precvious is very complicated

// const http = require("http")

// const server = http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write("<h1>THis is yogesh</h1>")
//         res.end();
//     }
//     if(req.url==='/about'){
//         res.writeHead(404,{'content-type':'text/html'})
//         res.write("<h1>THis is 404 error</h1>")
//         res.end();
//     }
// })

// server.listen(3000,()=>{
//  console.log("your server is running  on port number 3000")
// })

//sending serving static pages

// const http = require("http")

const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'})//http status codes
        res.write(homepage)
        res.end();
    }
    if(req.url==='/style.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homepage_css)
        res.end();
    }
    if(req.url==='/about'){
        res.writeHead(404,{'content-type':'text/html'})
        res.write("<h1>THis is 404 error</h1>")
        res.end();
    }
    if(req.url==='/contact'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<a href='/'>Home</a>")
        res.end();
    }
})

server.listen(3000,()=>{
 console.log("your server is running  on port number 3000")
})
