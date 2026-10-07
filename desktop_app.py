import os
import sys
import threading
import time
import urllib.request
import subprocess
from app import app

def run_flask():
    try:
        app.run(host="0.0.0.0", port=5000, debug=False, use_reloader=False)
    except Exception as e:
        print("Flask server note:", e)

def wait_for_server(url="http://127.0.0.1:5000", timeout=8):
    start = time.time()
    while time.time() - start < timeout:
        try:
            with urllib.request.urlopen(url, timeout=1) as res:
                if res.status == 200:
                    return True
        except Exception:
            time.sleep(0.15)
    return False

def launch_native_app():
    # Start Flask server thread
    server_thread = threading.Thread(target=run_flask, daemon=True)
    server_thread.start()

    url = "http://127.0.0.1:5000"
    wait_for_server(url)

    # Attempt 1: Try pywebview native desktop window
    try:
        import webview
        icon_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "app_icon.ico")
        
        window = webview.create_window(
            title="GECP Timetable Portal (2026-27)",
            url=url,
            width=1280,
            height=820,
            min_size=(920, 600),
            confirm_close=False
        )
        webview.start()
        return
    except Exception as e:
        print("pywebview window note:", e)

    # Attempt 2: Fall back to native Edge/Chrome standalone App window
    edge_paths = [
        os.path.expandvars(r"%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"),
        os.path.expandvars(r"%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"),
        os.path.expandvars(r"%LocalAppData%\Microsoft\Edge\Application\msedge.exe"),
    ]
    for ep in edge_paths:
        if os.path.exists(ep):
            subprocess.run([ep, f"--app={url}"])
            return

    # Attempt 3: Default browser
    import webbrowser
    webbrowser.open(url)
    
    # Keep server alive if launched in browser
    while True:
        time.sleep(1)

if __name__ == "__main__":
    launch_native_app()
