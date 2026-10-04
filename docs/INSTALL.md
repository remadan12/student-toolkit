# Installation & Setup Guide

## 🌐 View Online (Easiest)

No installation needed! Just visit:
https://remadan12.github.io/student-toolkit/

## 💻 Run Locally

### Option 1: Use Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: http://localhost:8000

### Option 2: Use Node.js

```bash
# Install http-server globally
npm install -g http-server

# Run in the project folder
http-server

# Open: http://localhost:8080
```

### Option 3: Use VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 4: Direct File

Simply open `index.html` in your browser:
- Windows: Double-click the file
- Mac: Double-click or right-click → Open
- Linux: Double-click or `xdg-open index.html`

## 📦 No Dependencies

Student Toolkit requires **no installation** of packages or dependencies. It's pure HTML, CSS, and JavaScript.

## 🔧 Customization

All styles are in the `<style>` tag in `index.html`. You can:
- Change colors by editing CSS variables in `:root`
- Modify the timer duration (currently 25 minutes)
- Add more study tools
- Adjust layouts for your preference

## ☁️ Deploy to GitHub Pages

1. Go to your repository on GitHub
2. Click Settings
3. Scroll to "Pages"
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click Save
6. Your site will be live at: `https://yourusername.github.io/student-toolkit/`

## 🐛 Troubleshooting

**Data not saving?**
- Make sure your browser allows localStorage
- Clear cache and reload

**Timer not working?**
- Refresh the page
- Try a different browser

**Dark mode not persisting?**
- Check if cookies/storage are enabled

## 📱 Mobile Setup

1. Open on your phone: https://remadan12.github.io/student-toolkit/
2. Add to home screen for quick access (works offline)

---

Questions? Check the README.md or visit the repo!
