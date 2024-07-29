const express = require('express')
const session= require('express-session')

const app=express()

app.use(session({
    secret: "secret-key",//secret key used to sign tge session id cookie
    resave: 'false',//whether to save the session data if no changes are made
    saveUninitialized: false,//whether to save uninitialized sessions
    cookie : {maxAge:5000}//session timing valid for
}))

app.get('/setSession',(req,res)=>{
    req.session.username='Yogesh'
    res.send('Session data set')
})

app.get('/getSession',(req,res)=>{
    res.send(req.session.username)
})

app.get('/deleteSession',(req,res)=>{
    req.session.destroy();
    res.send("destroyed")
})

app.listen(3000,()=>{
    console.log("server is running on 3000")
})