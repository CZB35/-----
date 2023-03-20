import {app,BrowserWindow} from 'electron'
import path from "path"

const createWindow=()=>{
    const win=new BrowserWindow({
        webPreferences:{
            contextIsolation:false,
            nodeIntegration:true
        }
    })
    if(process.env.NODE_ENV==="development"){
        win.loadURL(process.env.VITE_DEV_SERVER_URL)
    }else{
        win.loadFile(path.join(__dirname,"../dist/index.html"))
    }
}
app.whenReady().then(createWindow)