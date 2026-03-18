@echo off
REM Shaan Saurav Portfolio - Auto Setup Script for Windows
REM This script automatically sets up the project

setlocal enabledelayedexpansion

echo.
echo ===================================================
echo   Shaan Saurav Portfolio - Auto Setup
echo ===================================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js is not installed or not in PATH
    echo Please download and install from: https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo [OK] Node.js detected: %NODE_VERSION%
echo.

REM Install root dependencies
echo [INSTALLING] Root dependencies...
call npm install
if errorlevel 1 (
    echo [ERROR] Failed to install root dependencies
    pause
    exit /b 1
)
echo.

REM Install frontend dependencies
echo [INSTALLING] Frontend dependencies...
cd frontend
call npm install
if errorlevel 1 (
    echo [ERROR] Failed to install frontend dependencies
    cd ..
    pause
    exit /b 1
)
cd ..
echo.

REM Install backend dependencies
echo [INSTALLING] Backend dependencies...
cd backend
call npm install
if errorlevel 1 (
    echo [ERROR] Failed to install backend dependencies
    cd ..
    pause
    exit /b 1
)
cd ..
echo.

REM Create .env file if it doesn't exist
if not exist "backend\.env" (
    echo [CREATING] .env file...
    (
        echo MONGODB_URI=mongodb://localhost:27017/shaan-portfolio
        echo PORT=5000
        echo EMAIL_USER=your-email@gmail.com
        echo EMAIL_PASS=your-app-password
        echo NODE_ENV=development
    ) > backend\.env
    echo [OK] .env file created
    echo [WARNING] Please update backend\.env with your credentials
)
echo.

echo ===================================================
echo   Setup Complete!
echo ===================================================
echo.
echo Next Steps:
echo.
echo 1. Update backend\.env with your credentials:
echo    - MONGODB_URI: Your MongoDB connection string
echo    - EMAIL_USER: Your Gmail address
echo    - EMAIL_PASS: Your Gmail app password
echo.
echo 2. Start the backend (Terminal 1):
echo    cd backend
echo    npm run dev
echo.
echo 3. Start the frontend (Terminal 2):
echo    cd frontend
echo    npm start
echo.
echo 4. Open http://localhost:3000 in your browser
echo.
echo Read SETUP_GUIDE.md for detailed instructions
echo.
pause
