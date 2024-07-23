const os=require('os')

console.log(os.uptime())
console.log(os.userInfo())
console.log(os.cpus())

const otherInfo = {
    cpu: os.arch(),
    name: os.type(),
    platform: os.platform(),
    release: os.release(),
    hostname: os.hostname(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    network: os.networkInterfaces()
}

console.log(otherInfo)