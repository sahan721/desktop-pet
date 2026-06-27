import { ipcMain, app, BrowserWindow } from "electron";
import { exec } from "child_process";
import { promisify } from "util";
const execAsync = promisify(exec);
let mainWindow = null;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    frame: false,
    // Removes title bar and borders
    transparent: true,
    // Makes window background transparent
    alwaysOnTop: true,
    // Keeps pet above other windows
    resizable: false,
    // Prevents resizing
    hasShadow: false,
    // Removes window shadow
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  mainWindow.loadURL("http://localhost:5173");
}
ipcMain.handle("git:getCommitCount", async () => {
  try {
    const { stdout } = await execAsync(
      "git rev-list --count HEAD"
    );
    return parseInt(stdout.trim(), 10);
  } catch (error) {
    console.error("Git command failed:", error);
    return 0;
  }
});
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
