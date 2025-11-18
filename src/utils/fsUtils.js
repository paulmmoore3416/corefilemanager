const fs = require('fs');
const path = require('path');

function listFiles(dirPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) reject(err);
      else resolve(files);
    });
  });
}

function copyFile(src, dest) {
  return new Promise((resolve, reject) => {
    fs.copyFile(src, dest, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

function moveFile(src, dest) {
  return new Promise((resolve, reject) => {
    fs.rename(src, dest, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

module.exports = { listFiles, copyFile, moveFile };