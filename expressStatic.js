const express = require('express')

const app=express();

//body-parsor not built in but part of express by some medium
//router level 
app.use(express.static('public'))

app.use('/',function(req,res){ //general specific middleware//sequence also matters
     res.send();
})

app.listen(3000,()=>{
    console.log("Your server is ready")
})