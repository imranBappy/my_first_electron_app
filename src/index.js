const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const robot = require('robotjs');
const rob = require('./auto_login');
const data = require('./data.json');


if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);


ipcMain.handle('autoMake:start', (e, value) => {
  console.log({ value });
  // robot.setKeyboardDelay(50);
  // robot.keyTap('command');
  // robot.typeString("chrome");
  // robot.setKeyboardDelay(50);
  // robot.keyTap("enter");
  // robot.setKeyboardDelay(50);
  // robot.keyTap("tab");
  // robot.keyTap("enter");
  // robot.keyTap("tab", "control");
  // robot.typeString("https://www.netflix.com/bd/login");
  // robot.keyTap("enter");
  rob.auto_login(value, data)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
