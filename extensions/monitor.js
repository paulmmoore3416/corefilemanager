const si = require('systeminformation');

async function getSystemInfo() {
  const cpu = await si.currentLoad();
  const mem = await si.mem();
  const disk = await si.fsSize();
  return {
    cpu: cpu.currentLoad,
    memory: mem,
    disk: disk
  };
}

module.exports = { getSystemInfo };