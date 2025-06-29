#!/usr/bin/env python3
"""
Test Runner for Culinary Creations Project
Runs all tests and generates a comprehensive report
"""

import subprocess
import sys
import os
import json
import datetime
from pathlib import Path

class TestRunner:
    def __init__(self):
        self.test_results = {
            'frontend': {'passed': 0, 'failed': 0, 'total': 0, 'details': []},
            'backend': {'passed': 0, 'failed': 0, 'total': 0, 'details': []},
            'e2e': {'passed': 0, 'failed': 0, 'total': 0, 'details': []},
            'timestamp': datetime.datetime.now().isoformat(),
            'summary': {}
        }
        
    def run_frontend_tests(self):
        """Run Jest frontend tests"""
        print("🧪 Running Frontend Tests...")
        try:
            result = subprocess.run(
                ['npm', 'test', '--', '--json', '--silent'],
                capture_output=True,
                text=True,
                cwd='tests'
            )
            
            if result.returncode == 0:
                # Parse Jest JSON output
                try:
                    jest_output = json.loads(result.stdout)
                    self.test_results['frontend']['total'] = jest_output.get('numTotalTests', 0)
                    self.test_results['frontend']['passed'] = jest_output.get('numPassedTests', 0)
                    self.test_results['frontend']['failed'] = jest_output.get('numFailedTests', 0)
                    
                    # Add test details
                    for test_result in jest_output.get('testResults', []):
                        for assertion_result in test_result.get('assertionResults', []):
                            self.test_results['frontend']['details'].append({
                                'name': assertion_result.get('fullName', ''),
                                'status': assertion_result.get('status', ''),
                                'duration': assertion_result.get('duration', 0)
                            })
                    
                    print(f"✅ Frontend Tests: {self.test_results['frontend']['passed']}/{self.test_results['frontend']['total']} passed")
                except json.JSONDecodeError:
                    print("⚠️  Could not parse Jest output")
            else:
                print(f"❌ Frontend Tests failed: {result.stderr}")
                
        except Exception as e:
            print(f"❌ Error running frontend tests: {e}")
    
    def run_backend_tests(self):
        """Run Pytest backend tests"""
        print("🐍 Running Backend Tests...")
        try:
            result = subprocess.run(
                ['python', '-m', 'pytest', 'api_tests/', '-v', '--json-report'],
                capture_output=True,
                text=True,
                cwd='tests'
            )
            
            # Parse pytest output to count tests
            lines = result.stdout.split('\n')
            passed = sum(1 for line in lines if 'PASSED' in line)
            failed = sum(1 for line in lines if 'FAILED' in line)
            total = passed + failed
            
            self.test_results['backend']['total'] = total
            self.test_results['backend']['passed'] = passed
            self.test_results['backend']['failed'] = failed
            
            # Add test details
            for line in lines:
                if '::' in line and ('PASSED' in line or 'FAILED' in line):
                    parts = line.split('::')
                    if len(parts) >= 2:
                        test_name = parts[-1].split()[0]
                        status = 'PASSED' if 'PASSED' in line else 'FAILED'
                        self.test_results['backend']['details'].append({
                            'name': test_name,
                            'status': status,
                            'duration': 0
                        })
            
            print(f"✅ Backend Tests: {passed}/{total} passed")
            
        except Exception as e:
            print(f"❌ Error running backend tests: {e}")
    
    def run_e2e_tests(self):
        """Run Cypress E2E tests"""
        print("🌐 Running E2E Tests...")
        try:
            result = subprocess.run(
                ['npm', 'run', 'test:e2e'],
                capture_output=True,
                text=True,
                cwd='tests'
            )
            
            # Parse Cypress output
            lines = result.stdout.split('\n')
            passed = sum(1 for line in lines if '✓' in line)
            failed = sum(1 for line in lines if '✗' in line)
            total = passed + failed
            
            self.test_results['e2e']['total'] = total
            self.test_results['e2e']['passed'] = passed
            self.test_results['e2e']['failed'] = failed
            
            print(f"✅ E2E Tests: {passed}/{total} passed")
            
        except Exception as e:
            print(f"❌ Error running E2E tests: {e}")
    
    def generate_summary(self):
        """Generate test summary"""
        total_tests = (
            self.test_results['frontend']['total'] +
            self.test_results['backend']['total'] +
            self.test_results['e2e']['total']
        )
        
        total_passed = (
            self.test_results['frontend']['passed'] +
            self.test_results['backend']['passed'] +
            self.test_results['e2e']['passed']
        )
        
        total_failed = (
            self.test_results['frontend']['failed'] +
            self.test_results['backend']['failed'] +
            self.test_results['e2e']['failed']
        )
        
        self.test_results['summary'] = {
            'total_tests': total_tests,
            'total_passed': total_passed,
            'total_failed': total_failed,
            'success_rate': (total_passed / total_tests * 100) if total_tests > 0 else 0
        }
    
    def save_report(self):
        """Save test results to JSON file"""
        report_file = f"test_report_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        
        with open(report_file, 'w') as f:
            json.dump(self.test_results, f, indent=2)
        
        print(f"📊 Test report saved to: {report_file}")
        return report_file
    
    def print_summary(self):
        """Print test summary to console"""
        print("\n" + "="*50)
        print("📋 TEST SUMMARY")
        print("="*50)
        
        print(f"Frontend Tests:  {self.test_results['frontend']['passed']}/{self.test_results['frontend']['total']} passed")
        print(f"Backend Tests:   {self.test_results['backend']['passed']}/{self.test_results['backend']['total']} passed")
        print(f"E2E Tests:       {self.test_results['e2e']['passed']}/{self.test_results['e2e']['total']} passed")
        print("-"*50)
        print(f"Total:           {self.test_results['summary']['total_passed']}/{self.test_results['summary']['total_tests']} passed")
        print(f"Success Rate:    {self.test_results['summary']['success_rate']:.1f}%")
        print("="*50)
        
        if self.test_results['summary']['total_failed'] > 0:
            print("\n❌ FAILED TESTS:")
            for test_type, results in self.test_results.items():
                if test_type in ['frontend', 'backend', 'e2e']:
                    for detail in results['details']:
                        if detail['status'] == 'FAILED':
                            print(f"  - {test_type.upper()}: {detail['name']}")
    
    def run_all_tests(self):
        """Run all test suites"""
        print("🚀 Starting Comprehensive Test Suite")
        print("="*50)
        
        # Check if we're in the right directory
        if not os.path.exists('tests'):
            print("❌ Error: 'tests' directory not found. Please run from the Website directory.")
            return False
        
        # Run all test suites
        self.run_frontend_tests()
        self.run_backend_tests()
        self.run_e2e_tests()
        
        # Generate summary and save report
        self.generate_summary()
        report_file = self.save_report()
        self.print_summary()
        
        return self.test_results['summary']['total_failed'] == 0

def main():
    """Main function"""
    runner = TestRunner()
    success = runner.run_all_tests()
    
    if success:
        print("\n🎉 All tests passed!")
        sys.exit(0)
    else:
        print("\n💥 Some tests failed!")
        sys.exit(1)

if __name__ == "__main__":
    main() 