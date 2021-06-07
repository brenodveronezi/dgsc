const { app, globalShortcut, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    width: 1000,
    height: 640,
    minWidth: 1000,
    minHeight: 640,
    maxWidth: 1000,
    maxHeight: 640,
    icon: 'app/public/civilsp.jpg',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    }
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  //mainWindow.webContents.openDevTools();
  mainWindow.on("close", () => {
    mainWindow.webContents.send("stop-server");
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.whenReady().then(() => {
  globalShortcut.register("Alt+CommandOrControl+L", () => {
    mainWindow.webContents.send("show-server-log");
  })
}).then(createWindow);
