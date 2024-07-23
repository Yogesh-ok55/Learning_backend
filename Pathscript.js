const path = require('path')


const myPath='C:\Users\yoges'

//throgh os module we will find path and use in path while downloading the files

const pathInfo = {
    filename: path.basename(myPath),
    folder: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteorNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath)
}

console.log(pathInfo)

console.log(path.join('Folder1','Folder2','Folder','file.txt'))
console.log(path.resolve('Folder1','Folder2','Folder','file.txt'))