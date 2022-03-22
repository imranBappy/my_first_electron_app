const { contextBridge, ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld('autoMake', {
    start: (value) => ipcRenderer.invoke('autoMake:start', value),
})