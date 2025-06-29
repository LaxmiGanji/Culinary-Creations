@echo off
echo 🚀 Culinary Creations Test Suite
echo ================================

REM Check if we're in the right directory
if not exist "tests" (
    echo ❌ Error: 'tests' directory not found. Please run from the Website directory.
    pause
    exit /b 1
)

REM Change to tests directory
cd tests

REM Check if dependencies are installed
if not exist "node_modules" (
    echo 📦 Installing Node.js dependencies...
    npm install
    if errorlevel 1 (
        echo ❌ Failed to install Node.js dependencies
        pause
        exit /b 1
    )
)

REM Check if Python dependencies are installed
python -c "import pytest" 2>nul
if errorlevel 1 (
    echo 📦 Installing Python dependencies...
    pip install -r requirements.txt
    if errorlevel 1 (
        echo ❌ Failed to install Python dependencies
        pause
        exit /b 1
    )
)

REM Run all tests
echo 🧪 Running all tests...
python execute_tests.py

REM Check if tests passed
if errorlevel 1 (
    echo.
    echo 💥 Some tests failed. Check the reports for details.
    pause
    exit /b 1
) else (
    echo.
    echo 🎉 All tests passed successfully!
    pause
    exit /b 0
) 