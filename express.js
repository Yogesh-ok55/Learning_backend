const express = require('express')

const app=express();

app.use('/about',function(req,res,next){ //general specific middleware//sequence also matters
     console.log("middleware running");
     next();
})
 
//middleware ---------> route ---------------> response
app.use(function(req,res,next){
     console.log("middleware running1");
     next();
})

app.use(function(req,res,next){
     console.log("middleware running2");
     next();
})

app.get("/",function(req,res){
    res.send("<h1>Hello not world really</h1>")
})

app.get("/contact",function(req,res,next){
    return next(new Error('Something went wrong'));
})

app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500)
    res.send("<h1>Something went wrong</h1>")
})

app.listen(3000,()=>{
    console.log("Your servry is ready and running fine")
})