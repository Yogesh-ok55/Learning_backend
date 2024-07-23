const fs = require('fs');

//create directory

// fs.mkdir('./myFolder',function(err){
//     if(err){
//         console.log(err)
//         return ;
//     }
//     else{
//         console.log("file created")
//     }
// })
// const data="My name is yogesh really"





// fs.writeFile("./myFolder/file.txt",data,(err)=>{
//     if(err) console.log(err);
//     else console.log("file created");
// })

//append files

//case 1

// fs.appendFile("./myFolder/file.txt",data,(err)=>{
//     if(err) console.log(err);
//     else console.log("file updated");
// })

//case 2

// fs.writeFile("./myFolder/file.txt",data,{flag:'a'},(err)=>{
//     if(err) console.log(err);
//     else console.log("file created");
// })

// fs.rename("oldpath","newPath","callback")
// fs.rename(".\myFolder\file.txt",".\myFolder\Notes.txt",(err)=>{
//     if(err) console.log(err);
//     else console.log("files name changed");
// })

//copy file

// fs.copyFile("source","destination","error")


// fs.copyFile("./myFolder/Notes.txt","./myFolder/copy.txt",(err)=>{
//     if(err) console.log(err)
//     else console.log("File copied");
// })

//delete file
// fs.unlink("./myFolder/copy.txt",(err)=>{
//     if(err) console.log(err);
//     else console.log("file deleted")
// })

//read directory

// fs.readdir("./myFolder",(err,files)=>{
//     if(err) console.log(err)
//     else {
//          console.log("Here are the files: ");
//          console.log(files)
//     }
// })

//current directory -> G31

// fs.readdir("./",(err,files)=>{
//     if(err) console.log(err)
//     else {
//          console.log("Here are the files: ");
//          console.log(files)
//     }
// })

//delete directory

// fs.rmdir("./Demo_delete",(err)=>{
//     if(err) console.log(err)
//     else console.log("directory deleted")
// })

//deleting non empty dir //gets warning that this commands will be removed in future
// fs.rmdir("./Demo_delete",{recursive:true},(err)=>{
//     if(err) console.log(err)
//     else console.log("directory deleted")
// })

//deleting non empty dir//instead use this rm 
// fs.rm("./Demo_delete",{recursive:true},(err)=>{
//     if(err) console.log(err)
//     else console.log("directory deleted")
// })

// fs.readFile("./myFolder/Notes.txt",(err,data)=>{
//     if(err) console.log(err)
//     else console.log(data);
// })//output -> row buffer memory represention(memory location inhexadecinmal format)


//solving this error

// fs.readFile("./myFolder/Notes.txt",{encoding:'utf-8'},(err,data)=>{
//     if(err) console.log(err)
//     else console.log(data);
// })//converting data to human readable form using utf-8 standard


//different format
fs.readFile("./myFolder/Notes.txt",{encoding:'ascii'},(err,data)=>{
    if(err) console.log(err)
    else console.log(data);
})









