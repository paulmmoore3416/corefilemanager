const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.loadFile('dist/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// IPC handlers
ipcMain.handle('list-files', async (event, dirPath) => {
  try {
    const files = fs.readdirSync(dirPath);
    const fileDetails = files.map(file => {
      const fullPath = path.join(dirPath, file);
      const stats = fs.statSync(fullPath);
      return {
        name: file,
        path: fullPath,
        isDirectory: stats.isDirectory(),
        size: stats.size,
        modified: stats.mtime
      };
    });
    return fileDetails;
  } catch (error) {
    throw new Error(`Failed to list files: ${error.message}`);
  }
});

ipcMain.handle('read-file', async (event, filePath) => {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    throw new Error(`Failed to read file: ${error.message}`);
  }
});

ipcMain.handle('get-system-stats', async () => {
  const si = require('systeminformation');
  const cpu = await si.currentLoad();
  const mem = await si.mem();
  return {
    cpu: cpu.currentLoad.toFixed(2),
    memory: ((mem.used / mem.total) * 100).toFixed(2)
  };
});