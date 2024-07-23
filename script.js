const hello=require('./hello')
const fun_val=hello.hello


// const http=require('http')

// const server=http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'html/text'})
//     res.end("<h1>Hello everyone this is yogesh</h1>")
// })

// server.listen(3000)



console.log(fun_val());
