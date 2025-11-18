const { exec } = require('child_process');

function connectSSH(host, user) {
  // This would open an SSH connection, but for demo, just log
  console.log(`Connecting to ${user}@${host}`);
  return new Promise((resolve, reject) => {
    exec(`ssh ${user}@${host}`, (error, stdout, stderr) => {
      if (error) reject(error);
      else resolve(stdout);
    });
  });
}

module.exports = { connectSSH };