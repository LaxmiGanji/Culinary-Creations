#!/usr/bin/env python3
"""
Dependency Installer for Culinary Creations Test Suite
Installs all necessary dependencies for frontend, backend, and E2E testing
"""

import subprocess
import sys
import os
import platform

def run_command(command, description, cwd=None):
    """Run a command and handle errors"""
    print(f"🔧 {description}...")
    try:
        result = subprocess.run(
            command,
            shell=True,
            check=True,
            capture_output=True,
            text=True,
            cwd=cwd
        )
        print(f"✅ {description} completed successfully")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ {description} failed: {e.stderr}")
        return False
    except Exception as e:
        print(f"❌ {description} failed: {e}")
        return False

def check_node_version():
    """Check if Node.js is installed and has correct version"""
    try:
        result = subprocess.run(['node', '--version'], capture_output=True, text=True)
        if result.returncode == 0:
            version = result.stdout.strip()
            print(f"✅ Node.js version: {version}")
            return True
        else:
            print("❌ Node.js not found")
            return False
    except FileNotFoundError:
        print("❌ Node.js not found. Please install Node.js v14 or higher")
        return False

def check_python_version():
    """Check if Python is installed and has correct version"""
    try:
        result = subprocess.run([sys.executable, '--version'], capture_output=True, text=True)
        if result.returncode == 0:
            version = result.stdout.strip()
            print(f"✅ Python version: {version}")
            return True
        else:
            print("❌ Python not found")
            return False
    except Exception:
        print("❌ Python not found. Please install Python v3.8 or higher")
        return False

def install_node_dependencies():
    """Install Node.js dependencies"""
    if not check_node_version():
        return False
    
    return run_command(
        "npm install",
        "Installing Node.js dependencies",
        cwd="tests"
    )

def install_python_dependencies():
    """Install Python dependencies"""
    if not check_python_version():
        return False
    
    return run_command(
        f"{sys.executable} -m pip install -r requirements.txt",
        "Installing Python dependencies",
        cwd="tests"
    )

def install_cypress():
    """Install Cypress for E2E testing"""
    if not check_node_version():
        return False
    
    return run_command(
        "npx cypress install",
        "Installing Cypress",
        cwd="tests"
    )

def create_test_directories():
    """Create necessary test directories"""
    directories = [
        "coverage",
        "htmlcov",
        "cypress/screenshots",
        "cypress/videos",
        "test_reports"
    ]
    
    for directory in directories:
        os.makedirs(directory, exist_ok=True)
        print(f"✅ Created directory: {directory}")

def verify_installation():
    """Verify that all dependencies are properly installed"""
    print("\n🔍 Verifying installation...")
    
    # Check if package.json exists
    if not os.path.exists("tests/package.json"):
        print("❌ package.json not found")
        return False
    
    # Check if node_modules exists
    if not os.path.exists("tests/node_modules"):
        print("❌ node_modules not found")
        return False
    
    # Check if Python packages are installed
    try:
        import pytest
        import requests
        print("✅ Python packages verified")
    except ImportError as e:
        print(f"❌ Python package missing: {e}")
        return False
    
    # Check if Cypress is installed
    if not os.path.exists("tests/node_modules/cypress"):
        print("❌ Cypress not found")
        return False
    
    print("✅ All dependencies verified successfully")
    return True

def main():
    """Main installation function"""
    print("🚀 Installing Culinary Creations Test Suite Dependencies")
    print("=" * 60)
    
    # Check if we're in the right directory
    if not os.path.exists("tests"):
        print("❌ Error: 'tests' directory not found. Please run from the Website directory.")
        return False
    
    # Change to tests directory
    os.chdir("tests")
    
    # Install dependencies
    success = True
    
    success &= install_node_dependencies()
    success &= install_python_dependencies()
    success &= install_cypress()
    
    # Create test directories
    create_test_directories()
    
    # Verify installation
    success &= verify_installation()
    
    if success:
        print("\n🎉 Installation completed successfully!")
        print("\n📋 Next steps:")
        print("1. Start your Flask backend: cd ../api && python app.py")
        print("2. Start your React frontend: cd .. && npm start")
        print("3. Run tests: cd tests && python run_tests.py")
        return True
    else:
        print("\n💥 Installation failed. Please check the errors above.")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1) 