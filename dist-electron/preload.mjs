"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  getCommitCount: () => electron.ipcRenderer.invoke("git:getCommitCount")
});
