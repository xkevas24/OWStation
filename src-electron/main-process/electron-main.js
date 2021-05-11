import { app, BrowserWindow, nativeTheme,ipcMain,protocol,globalShortcut } from 'electron'

try {
  if (process.platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
    require('fs').unlinkSync(require('path').join(app.getPath('userData'), 'DevTools Extensions'))
  }
} catch (_) { }
ipcMain.on('asynchronous-message', function(event, arg) {
  if(arg==="ready-on"){
    mainWindow.show()
  }
  if(arg==="ready-off"){
    mainWindow.hide()
  }
  if(arg==="replay-on"){
    replayWindow.show()
  }
  if(arg==="replay-off"){
    replayWindow.hide()
  }
  if(arg==="game-on"){
    gameWindow.show()
  }
  if(arg==="game-off"){
    gameWindow.hide()
  }
  // console.log(arg);  // prints "ping"
  event.sender.send('asynchronous-reply', 'pong');
});

ipcMain.on('synchronous-message', function(event, arg) {
  // console.log(arg);  // prints "ping"
  event.returnValue = 'pong';
});

// 通知窗口跳转路由


/**
 * Set `__statics` path to static files in production;
 * The reason we are setting it here is that the path needs to be evaluated at runtime
 */
if (process.env.PROD) {
  global.__statics = __dirname
}

let mainWindow
let replayWindow
let gameWindow

function createWindow () {
  /**
   * Initial window options
   */

/** 准备页 */
mainWindow = new BrowserWindow({
  title:'main',
  width: 375,
  height: 667,
  useContentSize: true,
  frame: false,
  resizable:false,
  webPreferences: {
    // Change from /quasar.conf.js > electron > nodeIntegration;
    // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
    nodeIntegration: process.env.QUASAR_NODE_INTEGRATION,
    nodeIntegrationInWorker: process.env.QUASAR_NODE_INTEGRATION,
    webSecurity: false,
    devTools:true,



    // More info: /quasar-cli/developing-electron-apps/electron-preload-script
    // preload: path.resolve(__dirname, 'electron-preload.js')
  }
})
mainWindow.loadURL(process.env.APP_URL)
mainWindow.windowTag = function (){
  return 'mainWindow'
}
mainWindow.on('closed', () => {
  mainWindow = null
})

/** 视频复盘 */
replayWindow = new BrowserWindow({
  title:'replay',
  width: 960,
  height: 640,
  useContentSize: true,
  frame: false,
  resizable:false,
  fullscreen: false,
  webPreferences: {
    nodeIntegration: process.env.QUASAR_NODE_INTEGRATION,
    nodeIntegrationInWorker: process.env.QUASAR_NODE_INTEGRATION,
    webSecurity: false,
    devTools:false,
  }
})
replayWindow.loadURL(process.env.APP_URL)
replayWindow.windowTag = function (){
  return 'replayWindow'
}
replayWindow.on('close', () => {
  mainWindow.show()
})
  /*
  replayWindow.on('closed', () => {
    // 重建窗口
    replayWindow = new BrowserWindow({
      title:'replay',
      width: 960,
      height: 640,
      useContentSize: true,
      frame: false,
      resizable:false,
      fullscreen: false,
      webPreferences: {
        nodeIntegration: process.env.QUASAR_NODE_INTEGRATION,
        nodeIntegrationInWorker: process.env.QUASAR_NODE_INTEGRATION,
        webSecurity: false,
        devTools:true,
      }
    })
    replayWindow.hide()
    replayWindow.loadURL(process.env.APP_URL)
    replayWindow.windowTag = function (){
      return 'replayWindow'
    }
    replayWindow.on('close', () => {
      mainWindow.show()
    })
  })
  */
/** 游戏复盘 */
gameWindow = new BrowserWindow({
  title:'game',
  width: 1920,
  height: 1080,
  useContentSize: true,
  transparent: true, // 窗口透明
  frame: false,
  resizable:false,
  fullscreen: false,
  movable:true,
  alwaysOnTop: true,
  webPreferences: {
    nodeIntegration: process.env.QUASAR_NODE_INTEGRATION,
    nodeIntegrationInWorker: process.env.QUASAR_NODE_INTEGRATION,
    webSecurity: false,
    devTools:false,
  }
})
gameWindow.loadURL(process.env.APP_URL)
gameWindow.windowTag = function () {
  return 'gameWindow'
}
gameWindow.on('close', () => {
  mainWindow.show()
})
gameWindow.maximize()
/*
gameWindow.on('closed', () => {
  gameWindow = new BrowserWindow({
    title:'game',
    width: 960,
    height: 640,
    useContentSize: true,
    transparent: true, // 窗口透明
    frame: false,
    resizable:false,
    fullscreen: false,
    movable:true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: process.env.QUASAR_NODE_INTEGRATION,
      nodeIntegrationInWorker: process.env.QUASAR_NODE_INTEGRATION,
      webSecurity: false,
      devTools:true,
    }
  })
  gameWindow.hide()
  gameWindow.loadURL(process.env.APP_URL)
  gameWindow.windowTag = function () {
    return 'gameWindow'
  }
  gameWindow.on('close', () => {
    mainWindow.show()
  })
})
*/
protocol.interceptFileProtocol('file', (req, callback) => {
  const url = req.url.substr(8);
  callback(decodeURI(url));
}, (error) => {
  if (error) {
    console.error('Failed to register protocol');
  }
});
replayWindow.hide()
gameWindow.hide()
mainWindow.focus()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
if (process.platform !== 'darwin') {
  app.quit()
}
})

app.on('activate', () => {
if (mainWindow === null) {
  createWindow()
}
})
app.whenReady().then(() => {

})
app.allowRendererProcessReuse = false
app.commandLine.appendSwitch('--ignore-certificate-errors', 'true')
