const os = require('os');
console.log("CPU architecture :" + os.arch());
console.log("Free memory :" + os.freemem());
console.log("Total memory :" + os.totalmem());
console.log('List of network Interfaces: ' + os.networkInterfaces());
console.log("Host Name :" + os.hostname());
console.log("platform Name :" + os.platform());
console.log("System Uptime :" + (os.uptime()/3600).toFixed(2)+"h");
console.log("OS release :" + os.release());
  