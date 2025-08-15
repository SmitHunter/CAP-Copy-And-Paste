# CAP — Copy and Paste

A tiny, single-file desktop app for storing customer-response snippets and quickly reusing them.

<img width="1178" height="789" alt="Example" src="https://github.com/user-attachments/assets/0177c8f3-a246-4011-b673-055559e9867e" />


## What it does

- **Create/edit snippets** with title, tags (comma-separated), and content
- **Search by title** + filter by tags with compact dropdown
- **Table view** with Copy / Edit actions per row  
- **Auto-save** to disk on every add/edit/delete, with localStorage backup
- **Customizable accent color** via color picker; persists across restarts
- **Keyboard shortcuts**: Ctrl/Cmd + S to save current snippet

## Features

✅ **Clean, modern UI** with dark theme  
✅ **Compact table design** - fits many snippets on screen  
✅ **Keyboard navigation** - Tab, arrows, Enter/Space, Escape  
✅ **Custom icons** throughout the interface  
✅ **Loading states** and smooth animations  
✅ **Better confirmations** - custom styled dialogs  
✅ **Enhanced empty states** with helpful tips  
✅ **Responsive design** - works on different screen sizes  

## Tech Stack

- **Electron** for desktop packaging
- **Vanilla HTML/CSS/JS** (single page app, no frameworks)
- **IPC bridge** (preload) exposes safe file I/O
- **Local storage** - no cloud, data stays on your machine

## Quick Start

### Development
```bash
npm install
npm start
```

### Build
```bash
npm run build
```

Creates installers in `dist/`:
- **Windows**: `CAP Setup 1.0.0.exe` 
- **Portable**: `dist/win-unpacked/CAP.exe`

## Data Storage

Your snippets are saved locally to:
- **Windows**: `C:\Users\<user>\AppData\Roaming\CAP\cap-data.json`
- **macOS**: `~/Library/Application Support/CAP/cap-data.json`  
- **Linux**: `~/.config/CAP/cap-data.json`

Also mirrored to localStorage as backup.

## Project Structure

```
├── index.html       # Entire UI and app logic (single file)
├── main.js          # Electron bootstrap + IPC handlers
├── preload.js       # Secure IPC bridge
├── package.json     # Dependencies + build config
├── assets/          # App icons
│   ├── icon.png     # Main icon (512x512)
│   └── icon.ico     # Windows icon
└── dist/            # Build outputs
```

## Security

- ✅ `contextIsolation: true`
- ✅ `nodeIntegration: false` 
- ✅ `sandbox: true`
- ✅ File I/O only via secure IPC handlers
- ✅ No remote code or network calls

## License

MIT License - see LICENSE file for details.

## Contributing

This is a personal productivity tool, but feel free to fork and adapt for your needs!
