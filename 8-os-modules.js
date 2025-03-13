const os = require('os');

const user = os.userInfo();
// console.log(user);

const sysUpTime = os.uptime();
// console.log(sysUpTime);

// console.log(`System up time is ${os.uptime()}`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
};
console.log(currentOs);