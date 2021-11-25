import { app, protocol, BrowserWindow, Main} from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
//import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'

const { ipcMain } = require('electron')
const isDevelopment = process.env.NODE_ENV !== 'production'

 let SplashWindow 




// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])





// ------------------------------------------------- create splash window


 async function createSplashWindow(){

   SplashWindow = new BrowserWindow({
    width:320,
    height:440,
    frame:false,
    resizable:false,
    backgroundColor: 'white',
    alwaysOnTop:true,
    show:false,
 
  })

    
  const url = require('url').format({
    protocol: 'file',
    slashes: true,
    pathname: require('path').resolve('./loading.html')
  })

  SplashWindow.loadURL(url)

  SplashWindow.once('ready-to-show',()=>{
    console.log('chamando Splash Window')
    SplashWindow.show()
    createWindow()
    
  })


 


}


// ------------------------------------------------ Create the browser window.

 async function createWindow() {
  
  var window = new BrowserWindow({
    
    minWidth:1280,
    minHeight:720,
    autoHideMenuBar:true,
    backgroundColor: 'white',
    show:false,
    focusable:true,
    center:true,
    //o frame remove a barra padrão da janela do windows
    frame:false,
    titleBarStyle:'hiddenInset',
    
    
    webPreferences: {
      
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: true,
      contextIsolation: false,
    },
    
  })

  



  

  window.once('ready-to-show',()=>{
    console.log('Chamando Main Window') 
    
   
    
  })

 //- controle da top bar

  ipcMain.on('closeapp', (event, arg) => {
    console.log('fechar app') 
    window.destroy()

  })

  ipcMain.on('minapp', (event, arg) => {
    console.log('min app') 
    window.minimize()

  })

  ipcMain.on('maxapp', (event, arg) => {
    console.log('max app') 
    window.maximize()


  })

  ipcMain.on('resapp', (event, arg) => {
    console.log('res app') 
    window.unmaximize();


  })

// recebe o evento no app vue sobre a splash screen
  ipcMain.on('app-init', event => {
    if (SplashWindow) {
    setTimeout(() => {
    SplashWindow.close()
    }, 800)
    }
    window.show()
   })


   



  

 //----------------

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await window.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    //descomente para ativar o console
    if (!process.env.IS_TEST)
     window.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    window.loadURL('app://./index.html')
  }

  window.maximize()

}





// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0)
  
   createSplashWindow()
   
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.



app.on('ready', createSplashWindow)



// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}