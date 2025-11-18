const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  listFiles: (dirPath) => ipcRenderer.invoke('list-files', dirPath),
  readFile: (filePath) => ipcRenderer.invoke('read-file', filePath),
  getSystemStats: () => ipcRenderer.invoke('get-system-stats')
});