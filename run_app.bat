@echo off
title GECP Timetable Portal
cd /d "%~dp0"

echo ========================================================
echo   Government Engineering College, Palanpur
echo   Timetable Portal 2026-27 (Odd Semester)
echo ========================================================
echo.
echo Starting backend server and desktop application...
python desktop_app.py

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Desktop window closed or encountered an issue.
    echo Starting fallback web server on http://127.0.0.1:5000 ...
    python app.py
)
pause
