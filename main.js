const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600})
    win.webContents.openDevTools()
    win.loadURL(url.format ({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    // win.webContents.openDevTools()
    // view.loadFile('index.html')
}
app.on('ready', createWindow)
