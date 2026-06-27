import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  getCommitCount: () => ipcRenderer.invoke("git:getCommitCount"),
});