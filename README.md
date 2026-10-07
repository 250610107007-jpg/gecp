# 🧭 CampusCompass GECP (2026–27)
**Government Engineering College, Palanpur • Smart Timetable & 3D Campus GPS Navigator**

---

## 💻 How to Run in VS Code (For You & Your Friend)

### Step 1: Open Folder in VS Code
1. Open **Visual Studio Code**.
2. Click **File ➔ Open Folder...**
3. Select this folder (`CampusCompass_GECP` / `m`).

### Step 2: Install Dependencies (Only Once)
Open the terminal in VS Code (`Ctrl + ~` or **Terminal ➔ New Terminal**) and run:
```bash
pip install -r requirements.txt
```

### Step 3: Run the Application (Choose Any Method)

#### ⭐ Method A: 1-Click Run in VS Code (F5)
* Press **`F5`** (or go to the **Run & Debug** tab on the left).
* Select **`1. Run Web Server (app.py)`** and click the green Play button ▶️.
* Open your browser at: **`http://127.0.0.1:5000`**

#### ⭐ Method B: Run via VS Code Terminal
In the terminal, type:
```bash
python app.py
```
Then visit **`http://127.0.0.1:5000`**.

#### ⭐ Method C: 1-Click Double Click (No Terminal Needed)
* Simply double-click **`run_app.bat`** (or **`desktop_app.py`**) to run as a native desktop app window!
* Double-click **`Launch_With_Public_Tunnel.bat`** to start both the local server and the global public HTTPS link for mobile phones!

---

## 📁 Project Structure

```text
├── app.py                      # Flask REST API backend & static file server
├── database.py                 # SQLite database schema, migrations & seeders
├── database.db                 # SQLite database (Timetables, Exams, Users)
├── desktop_app.py              # Native desktop window launcher (pywebview / Edge)
├── index.html                  # Main Web Portal & PWA Frontend
├── styles.css                  # Responsive UI styling (mobile, desktop, dark theme)
├── app.js                      # Dijkstra 3D road navigation, timetable engine, auth
├── manifest.json               # Mobile PWA installation manifest
├── sw.js                       # Service Worker for offline map & timetable caching
├── requirements.txt            # Python dependencies
├── Procfile                    # Cloud hosting profile (Render / Railway)
├── render.yaml                 # 24/7 free cloud deployment config
├── run_app.bat                 # 1-click batch launcher for Windows
├── Launch_With_Public_Tunnel.bat # 1-click launcher with Cloudflare HTTPS tunnel
├── cloudflared.exe             # High-speed HTTPS tunnel gateway
├── maps/                       # High-resolution architectural floor plans (Buildings 1-8)
├── assets/                     # Campus gate image assets
├── app_logo.png                # High-res TimeTable circular logo
├── icon-192.png                # Mobile PWA icon (192x192)
├── icon-512.png                # Mobile PWA icon (512x512)
├── favicon.ico                 # Browser tab favicon
└── .vscode/                    # VS Code launch & task configurations
```

---

## 📱 How to Install on Mobile Phone (PWA)
1. Ensure the server or tunnel is running.
2. Open the link on your mobile phone (Chrome for Android / Safari for iPhone).
3. Tap **"📲 Install App"** on the bottom floating bar, or tap **3 Dots (⋮) ➔ "Install app"** / **"Add to Home screen"**.
4. The app installs as a native, full-screen mobile app with the custom TimeTable icon!

---

## 🛡️ Default Admin Passwords
- **Computer Engineering Admin**: `computer123`
- **Electrical Engineering Admin**: `electrical123`
- **Civil Engineering Admin**: `civil123`
- **Mechanical Engineering Admin**: `mechanical123`
