const os = require("os");

// OS Type (Windows, Linux, macOS)
console.log("OS Type:", os.type());

// Platform (win32, linux, darwin)
console.log("Platform:", os.platform());

// CPU Architecture (x64, arm64, etc.)
console.log("Architecture:", os.arch());

//  Total RAM
console.log("Total Memory:", os.totalmem());

//  Free RAM
console.log("Free Memory:", os.freemem());

// Home Directory
console.log("Home Directory:", os.homedir());

//  Temporary Directory
console.log("Temp Directory:", os.tmpdir());

// System Uptime (seconds since boot)
console.log("System Uptime (seconds):", os.uptime());

// Hostname
console.log("Hostname:", os.hostname());

// CPU Details
console.log("CPU Info:", os.cpus());

//  Network Interfaces
console.log("Network Interfaces:", os.networkInterfaces());
