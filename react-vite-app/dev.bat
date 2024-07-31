@echo off
setlocal

REM  Vite і JSON Server паралельно
start "Vite" cmd /c "vite"
start "JSON Server" cmd /c "json-server -w db.json"

REM час для запуску серверів
timeout /t 10 /nobreak >nul

REM відкриття фронтенд у браузері
start "" "http://localhost:5173"

REM відкриття бекенд у браузері
start "" "http://localhost:3000"

REM командний рядок залишається відкритим
pause


