const { exec } = require('child_process');

function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) reject(error);
      else resolve(stdout);
    });
  });
}

async function getDiskUsage() {
  try {
    const output = await runCommand('df -h');
    return output;
  } catch (error) {
    throw error;
  }
}

async function getProcesses() {
  try {
    const output = await runCommand('ps aux');
    return output;
  } catch (error) {
    throw error;
  }
}

module.exports = { runCommand, getDiskUsage, getProcesses };