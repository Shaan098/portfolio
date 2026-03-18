@echo off
REM Start both frontend and backend servers

echo.
echo ========================================
echo   Starting Shaan's Portfolio Servers
echo ========================================
echo.

echo [1] Starting Backend (Port 5000)...
start "Backend" cmd /k "cd backend && npm run dev"

timeout /t 3 /nobreak

echo [2] Starting Frontend (Port 3000)...
start "Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ========================================
echo   Servers Starting...
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Close windows to stop servers.
echo.
