const express = require('express')
const app = express()
const path =  require('path')
//parse the form//built in middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
//setting ejs view engine

app.set('view engine', 'ejs')



app.get("/",function(req,res){
    res.render('index')
})

app.get("/about",function(req,res){
    res.render('about')
})

app.get("/contact",function(req,res){
    res.render('contact')
})

//Dynamic routes..
app.get("/user/:username/:age",function(req,res){
    res.send(`My name is ${req.params.username} and my age is ${req.params.age}`)
})

app.listen(3000,()=>{
    console.log("server listening at 3000")
})