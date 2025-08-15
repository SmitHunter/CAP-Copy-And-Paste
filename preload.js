const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  dataLoad: () => ipcRenderer.invoke('data:load'),
  dataSave: (text) => ipcRenderer.invoke('data:save', text)
});
