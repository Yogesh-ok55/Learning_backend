// Blocking code -> Sync code

// const fs = require('fs')

// const data = fs.readFileSync('./Demo_delete/abc.txt','utf-8');

// console.log(data);

// let sum=0;

// for(let i=0;i<=10;i++){
//      sum=sum+i;
// }

// console.log('sum: ',sum);

//Non-Bloacking code -> Async code

// how we achieve concurrency in code -> by writing Async code

//js is multi-threaded language

const fs = require('fs')

const data = fs.readFile('./Demo_delete/abc.txt','utf-8',(err,data)=>{
    console.log(data)
});


let sum=0;

for(let i=0;i<=10;i++){
     sum=sum+i;
}

console.log('sum: ',sum); // order will be reversed

