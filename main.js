const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs/promises');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'assets', 'icon.png'), // Will fall back to SVG if PNG not available
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  win.removeMenu?.();
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });

// ---------- App-local data file (works in dev & prod)
function dataFilePath() {
  const p = path.join(app.getPath('userData'), 'cap-data.json');
  return p;
}

ipcMain.handle('data:load', async () => {
  try {
    const p = dataFilePath();
    try {
      const text = await fs.readFile(p, 'utf8');
      return { path: p, text };
    } catch {
      // create empty file if not present
      await fs.mkdir(path.dirname(p), { recursive: true });
      await fs.writeFile(p, '[]', 'utf8');
      return { path: p, text: '[]' };
    }
  } catch (err) {
    console.error('data:load error', err);
    return { path: null, text: '[]' };
  }
});

ipcMain.handle('data:save', async (_e, text) => {
  try {
    const p = dataFilePath();
    await fs.mkdir(path.dirname(p), { recursive: true });
    await fs.writeFile(p, String(text ?? '[]'), 'utf8');
    return { path: p };
  } catch (err) {
    console.error('data:save error', err);
    return { path: null };
  }
});
