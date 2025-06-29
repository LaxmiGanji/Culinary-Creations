#!/usr/bin/env python3
"""
Comprehensive Test Executor for Culinary Creations
Runs all test suites and generates detailed reports
"""

import subprocess
import sys
import os
import json
import datetime
import time
from pathlib import Path

class TestExecutor:
    def __init__(self):
        self.results = {
            'frontend': {'status': 'not_run', 'passed': 0, 'failed': 0, 'total': 0, 'duration': 0, 'details': []},
            'backend': {'status': 'not_run', 'passed': 0, 'failed': 0, 'total': 0, 'duration': 0, 'details': []},
            'e2e': {'status': 'not_run', 'passed': 0, 'failed': 0, 'total': 0, 'duration': 0, 'details': []},
            'timestamp': datetime.datetime.now().isoformat(),
            'summary': {}
        }
        
    def run_frontend_tests(self):
        """Run Jest frontend tests with detailed output"""
        print("🧪 Running Frontend Tests (Jest)...")
        start_time = time.time()
        
        try:
            # Run Jest with coverage and JSON output
            result = subprocess.run([
                'npm', 'test', '--', '--json', '--coverage', '--silent'
            ], capture_output=True, text=True, cwd='tests', timeout=300)
            
            duration = time.time() - start_time
            self.results['frontend']['duration'] = round(duration, 2)
            
            if result.returncode == 0:
                try:
                    jest_output = json.loads(result.stdout)
                    self.results['frontend']['status'] = 'passed'
                    self.results['frontend']['total'] = jest_output.get('numTotalTests', 0)
                    self.results['frontend']['passed'] = jest_output.get('numPassedTests', 0)
                    self.results['frontend']['failed'] = jest_output.get('numFailedTests', 0)
                    
                    # Extract test details
                    for test_result in jest_output.get('testResults', []):
                        for assertion_result in test_result.get('assertionResults', []):
                            self.results['frontend']['details'].append({
                                'name': assertion_result.get('fullName', ''),
                                'status': assertion_result.get('status', ''),
                                'duration': assertion_result.get('duration', 0)
                            })
                    
                    print(f"✅ Frontend Tests: {self.results['frontend']['passed']}/{self.results['frontend']['total']} passed ({duration:.2f}s)")
                    
                except json.JSONDecodeError:
                    self.results['frontend']['status'] = 'error'
                    print("⚠️  Could not parse Jest output")
            else:
                self.results['frontend']['status'] = 'failed'
                print(f"❌ Frontend Tests failed: {result.stderr}")
                
        except subprocess.TimeoutExpired:
            self.results['frontend']['status'] = 'timeout'
            print("⏰ Frontend Tests timed out")
        except Exception as e:
            self.results['frontend']['status'] = 'error'
            print(f"❌ Error running frontend tests: {e}")
    
    def run_backend_tests(self):
        """Run Pytest backend tests with detailed output"""
        print("🐍 Running Backend Tests (Pytest)...")
        start_time = time.time()
        
        try:
            # Run pytest with verbose output and coverage
            result = subprocess.run([
                'python', '-m', 'pytest', 'api_tests/', '-v', '--tb=short', '--durations=10'
            ], capture_output=True, text=True, cwd='tests', timeout=300)
            
            duration = time.time() - start_time
            self.results['backend']['duration'] = round(duration, 2)
            
            # Parse pytest output
            lines = result.stdout.split('\n')
            passed = sum(1 for line in lines if 'PASSED' in line)
            failed = sum(1 for line in lines if 'FAILED' in line)
            total = passed + failed
            
            self.results['backend']['total'] = total
            self.results['backend']['passed'] = passed
            self.results['backend']['failed'] = failed
            
            if failed == 0 and total > 0:
                self.results['backend']['status'] = 'passed'
            elif failed > 0:
                self.results['backend']['status'] = 'failed'
            else:
                self.results['backend']['status'] = 'no_tests'
            
            # Extract test details
            for line in lines:
                if '::' in line and ('PASSED' in line or 'FAILED' in line):
                    parts = line.split('::')
                    if len(parts) >= 2:
                        test_name = parts[-1].split()[0]
                        status = 'PASSED' if 'PASSED' in line else 'FAILED'
                        self.results['backend']['details'].append({
                            'name': test_name,
                            'status': status,
                            'duration': 0
                        })
            
            print(f"✅ Backend Tests: {passed}/{total} passed ({duration:.2f}s)")
            
        except subprocess.TimeoutExpired:
            self.results['backend']['status'] = 'timeout'
            print("⏰ Backend Tests timed out")
        except Exception as e:
            self.results['backend']['status'] = 'error'
            print(f"❌ Error running backend tests: {e}")
    
    def run_e2e_tests(self):
        """Run Cypress E2E tests"""
        print("🌐 Running E2E Tests (Cypress)...")
        start_time = time.time()
        
        try:
            # Run Cypress tests
            result = subprocess.run([
                'npm', 'run', 'test:e2e'
            ], capture_output=True, text=True, cwd='tests', timeout=600)
            
            duration = time.time() - start_time
            self.results['e2e']['duration'] = round(duration, 2)
            
            # Parse Cypress output
            lines = result.stdout.split('\n')
            passed = sum(1 for line in lines if '✓' in line)
            failed = sum(1 for line in lines if '✗' in line)
            total = passed + failed
            
            self.results['e2e']['total'] = total
            self.results['e2e']['passed'] = passed
            self.results['e2e']['failed'] = failed
            
            if failed == 0 and total > 0:
                self.results['e2e']['status'] = 'passed'
            elif failed > 0:
                self.results['e2e']['status'] = 'failed'
            else:
                self.results['e2e']['status'] = 'no_tests'
            
            print(f"✅ E2E Tests: {passed}/{total} passed ({duration:.2f}s)")
            
        except subprocess.TimeoutExpired:
            self.results['e2e']['status'] = 'timeout'
            print("⏰ E2E Tests timed out")
        except Exception as e:
            self.results['e2e']['status'] = 'error'
            print(f"❌ Error running E2E tests: {e}")
    
    def generate_summary(self):
        """Generate comprehensive test summary"""
        total_tests = sum(self.results[suite]['total'] for suite in ['frontend', 'backend', 'e2e'])
        total_passed = sum(self.results[suite]['passed'] for suite in ['frontend', 'backend', 'e2e'])
        total_failed = sum(self.results[suite]['failed'] for suite in ['frontend', 'backend', 'e2e'])
        total_duration = sum(self.results[suite]['duration'] for suite in ['frontend', 'backend', 'e2e'])
        
        success_rate = (total_passed / total_tests * 100) if total_tests > 0 else 0
        
        self.results['summary'] = {
            'total_tests': total_tests,
            'total_passed': total_passed,
            'total_failed': total_failed,
            'total_duration': round(total_duration, 2),
            'success_rate': round(success_rate, 1),
            'overall_status': 'passed' if total_failed == 0 else 'failed'
        }
    
    def save_detailed_report(self):
        """Save detailed test results to JSON file"""
        timestamp = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
        report_file = f"test_reports/detailed_report_{timestamp}.json"
        
        os.makedirs('test_reports', exist_ok=True)
        
        with open(report_file, 'w') as f:
            json.dump(self.results, f, indent=2)
        
        print(f"📊 Detailed report saved to: {report_file}")
        return report_file
    
    def generate_html_report(self):
        """Generate HTML report from test results"""
        try:
            # Read the HTML template
            with open('test_report_template.html', 'r') as f:
                template = f.read()
            
            # Create a simple HTML report
            html_content = f"""
            <!DOCTYPE html>
            <html>
            <head>
                <title>Test Report - {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</title>
                <style>
                    body {{ font-family: Arial, sans-serif; margin: 20px; }}
                    .header {{ background: #f0f0f0; padding: 20px; border-radius: 5px; }}
                    .summary {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0; }}
                    .card {{ background: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }}
                    .passed {{ border-left: 4px solid #28a745; }}
                    .failed {{ border-left: 4px solid #dc3545; }}
                    .test-item {{ margin: 10px 0; padding: 10px; border-radius: 3px; }}
                    .test-passed {{ background: #d4edda; }}
                    .test-failed {{ background: #f8d7da; }}
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>🍳 Culinary Creations Test Report</h1>
                    <p>Generated on: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
                </div>
                
                <div class="summary">
                    <div class="card">
                        <h3>Total Tests</h3>
                        <h2>{self.results['summary']['total_tests']}</h2>
                    </div>
                    <div class="card passed">
                        <h3>Passed</h3>
                        <h2>{self.results['summary']['total_passed']}</h2>
                    </div>
                    <div class="card failed">
                        <h3>Failed</h3>
                        <h2>{self.results['summary']['total_failed']}</h2>
                    </div>
                    <div class="card">
                        <h3>Success Rate</h3>
                        <h2>{self.results['summary']['success_rate']}%</h2>
                    </div>
                </div>
                
                <h2>Test Details</h2>
                <div class="card">
                    <h3>Frontend Tests</h3>
                    <p>Status: {self.results['frontend']['status']} | Duration: {self.results['frontend']['duration']}s</p>
                    <p>Passed: {self.results['frontend']['passed']}/{self.results['frontend']['total']}</p>
                </div>
                
                <div class="card">
                    <h3>Backend Tests</h3>
                    <p>Status: {self.results['backend']['status']} | Duration: {self.results['backend']['duration']}s</p>
                    <p>Passed: {self.results['backend']['passed']}/{self.results['backend']['total']}</p>
                </div>
                
                <div class="card">
                    <h3>E2E Tests</h3>
                    <p>Status: {self.results['e2e']['status']} | Duration: {self.results['e2e']['duration']}s</p>
                    <p>Passed: {self.results['e2e']['passed']}/{self.results['e2e']['total']}</p>
                </div>
            </body>
            </html>
            """
            
            timestamp = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
            html_file = f"test_reports/report_{timestamp}.html"
            
            with open(html_file, 'w') as f:
                f.write(html_content)
            
            print(f"📄 HTML report saved to: {html_file}")
            return html_file
            
        except Exception as e:
            print(f"⚠️  Could not generate HTML report: {e}")
            return None
    
    def print_detailed_summary(self):
        """Print detailed test summary to console"""
        print("\n" + "="*60)
        print("📋 DETAILED TEST SUMMARY")
        print("="*60)
        
        for suite in ['frontend', 'backend', 'e2e']:
            results = self.results[suite]
            status_emoji = "✅" if results['status'] == 'passed' else "❌" if results['status'] == 'failed' else "⚠️"
            print(f"{status_emoji} {suite.upper()} Tests:")
            print(f"   Status: {results['status']}")
            print(f"   Passed: {results['passed']}/{results['total']}")
            print(f"   Duration: {results['duration']}s")
            print()
        
        print("-"*60)
        print(f"📊 OVERALL SUMMARY:")
        print(f"   Total Tests: {self.results['summary']['total_tests']}")
        print(f"   Total Passed: {self.results['summary']['total_passed']}")
        print(f"   Total Failed: {self.results['summary']['total_failed']}")
        print(f"   Success Rate: {self.results['summary']['success_rate']}%")
        print(f"   Total Duration: {self.results['summary']['total_duration']}s")
        print(f"   Overall Status: {self.results['summary']['overall_status'].upper()}")
        print("="*60)
        
        if self.results['summary']['total_failed'] > 0:
            print("\n❌ FAILED TESTS:")
            for suite in ['frontend', 'backend', 'e2e']:
                failed_tests = [test for test in self.results[suite]['details'] if test['status'] == 'FAILED']
                if failed_tests:
                    print(f"\n{suite.upper()}:")
                    for test in failed_tests:
                        print(f"  - {test['name']}")
    
    def run_all_tests(self):
        """Run all test suites with comprehensive reporting"""
        print("🚀 Starting Comprehensive Test Execution")
        print("="*60)
        
        # Check if we're in the right directory
        if not os.path.exists('tests'):
            print("❌ Error: 'tests' directory not found. Please run from the Website directory.")
            return False
        
        # Change to tests directory
        os.chdir("tests")
        
        # Run all test suites
        self.run_frontend_tests()
        self.run_backend_tests()
        self.run_e2e_tests()
        
        # Generate reports
        self.generate_summary()
        self.save_detailed_report()
        self.generate_html_report()
        self.print_detailed_summary()
        
        return self.results['summary']['overall_status'] == 'passed'

def main():
    """Main execution function"""
    executor = TestExecutor()
    success = executor.run_all_tests()
    
    if success:
        print("\n🎉 All tests passed successfully!")
        sys.exit(0)
    else:
        print("\n💥 Some tests failed. Check the detailed report for more information.")
        sys.exit(1)

if __name__ == "__main__":
    main() 