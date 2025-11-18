const { exec } = require('child_process');

function getDockerContainers() {
  return new Promise((resolve, reject) => {
    exec('docker ps -a', (error, stdout, stderr) => {
      if (error) reject(error);
      else resolve(stdout);
    });
  });
}

function startContainer(containerId) {
  return new Promise((resolve, reject) => {
    exec(`docker start ${containerId}`, (error, stdout, stderr) => {
      if (error) reject(error);
      else resolve(stdout);
    });
  });
}

module.exports = { getDockerContainers, startContainer };