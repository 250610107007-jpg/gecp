@echo off
title CampusCompass GECP - Live Global Tunnel
cd /d "%~dp0"
echo ======================================================================
echo   CampusCompass - Government Engineering College, Palanpur
echo   Starting Local Server and Cloudflare Global Public Tunnel...
echo ======================================================================
echo.

start "CampusCompass Flask" /b python app.py
timeout /t 3 /nobreak >nul

echo.
echo Launching global secure HTTPS tunnel...
echo Look for the link ending in .trycloudflare.com below!
echo.
cloudflared.exe tunnel --url http://127.0.0.1:5000 --protocol http2
pause
