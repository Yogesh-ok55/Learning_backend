const express = require('express')
const cookieParser = require('cookie-parser')

//cookieParser or bodyparser

const app =express();

app.use(cookieParser())

app.get('/setCookie',(req,res)=>{
    res.cookie('Token name','Encrypted cookie string value',{
        maxAge : 60000,
        secure: true,
        httpOnly: true,
        sameSite: 'strict'
    })
    res.send('Cookie is been set')
})

app.get('/getCookie',(req,res)=>{
    console.log(req.cookies)
    res.send(req.cookies)
})

app.get('/deleteCookie',(req,res)=>{
    res.clearCookie('Token name')
    res.send('cookie deleted')
})

app.listen(3000,()=>{
    console.log("app running on 3000")
})

//Best practise for securing sessions and cookies
// 1) use secure cookies
// 2)implement csrf ProcessingInstruction
// 3)rotate session identifier
// 4)implement content security SecurityPolicyViolationEvent
// 5)encrypt session data