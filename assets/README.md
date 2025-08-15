# CAP Icons

This folder contains the icon files for the CAP application.

## Current Status
- `icon.png` - ✅ AI-generated icon (512x512) - Beautiful stacked documents design!

## To Complete Setup

You'll need to generate platform-specific icons from the SVG:

### Required Icon Files:
- `icon.png` (512x512) - For Linux and window icon
- `icon.ico` - For Windows builds  
- `icon.icns` - For macOS builds

### Generation Options:

**Option 1: Online Tools**
- Use https://cloudconvert.com/svg-to-ico for .ico
- Use https://cloudconvert.com/svg-to-icns for .icns
- Use any SVG to PNG converter for .png

**Option 2: Command Line Tools**
```bash
# Install imagemagick
npm install -g electron-icon-maker

# Generate all formats
electron-icon-maker --input=assets/icon.svg --output=assets/
```

**Option 3: Manual Export**
- Open icon.svg in design software (Figma, Sketch, etc.)
- Export as PNG (512x512), ICO, and ICNS

The current SVG features:
- 📝 Memo design with folded corner
- Dark theme matching your app
- Text lines representing snippets
- Your accent color highlight
- Scales well to any size