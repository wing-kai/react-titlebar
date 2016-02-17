const electron = require('electron');

const { app, BrowserWindow, ipcMain, dialog } = electron;

let mainWindow;

const openMainWindow = () => {
    mainWindow = new BrowserWindow({
        center: true,
        frame: false,
        titleBarStyle: 'hidden'
    });

    mainWindow.webContents.openDevTools();
    mainWindow.loadURL(`file://${__dirname}/../index.html`);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // mainWindow.on('closed', () => {
    //     mainWindow = null;
    // });

    // mainWindow.on('closed', () => {
    //     mainWindow = null;
    // });
}

app.on('ready', openMainWindow);