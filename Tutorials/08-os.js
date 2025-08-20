const os = require('os');

// Information about the current user device
const user = os.userInfo();
console.log(user);

// Method return the system uptime in seconds
function convertTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `Hours: ${hours}, Minutes: ${minutes}, Seconds: ${secs}`;
}

console.log(convertTime(os.uptime()));

// Convert to hours mins and seconds

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  device: os.platform(), //OS: win-32, linux, macosx... etc
  arch: os.arch(), // Architeure: x64, x86, arm64

}

console.log(currentOS);