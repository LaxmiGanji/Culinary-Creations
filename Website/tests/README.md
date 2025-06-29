# Culinary Creations Test Suite

This directory contains comprehensive test cases for the Culinary Creations (Homemade Cooking) project, covering frontend, backend API, and end-to-end testing.

## Test Structure

```
tests/
├── frontend_tests/          # React component tests
│   ├── App.test.js
│   ├── SearchComponent.test.js
│   └── Navigation.test.js
├── api_tests/              # Flask API tests
│   └── test_app.py
├── e2e_tests/              # End-to-end tests
│   ├── cypress.config.js
│   └── cypress/
│       └── e2e/
│           ├── homepage.cy.js
│           ├── responsiveness.cy.js
│           └── error-handling.cy.js
├── package.json            # Node.js dependencies
├── requirements.txt        # Python dependencies
├── setupTests.js          # Jest setup
└── __mocks__/             # Mock files
    └── fileMock.js
```

## Test Cases Coverage

### Frontend Tests (TC-FR-001 to TC-FR-007)
- **TC-FR-001**: Homepage UI elements rendering
- **TC-FR-002**: Search functionality with valid keywords
- **TC-FR-003**: Search functionality with invalid keywords
- **TC-FR-004**: Search with empty input
- **TC-FR-005**: Recipe details page viewing
- **TC-FR-006**: Cuisine filtering
- **TC-FR-007**: Navigation functionality

### Backend API Tests (TC-BE-001 to TC-BE-007)
- **TC-BE-001**: Retrieve all recipes
- **TC-BE-002**: Retrieve single recipe by ID
- **TC-BE-003**: Handle non-existent recipe requests
- **TC-BE-004**: Search recipes by keyword
- **TC-BE-005**: Search with non-existent keywords
- **TC-BE-006**: Retrieve available cuisines
- **TC-BE-007**: Filter recipes by cuisine

### General Tests (TC-GEN-001 to TC-GEN-003)
- **TC-GEN-001**: Responsiveness across devices
- **TC-GEN-002**: Data integrity between frontend and backend
- **TC-GEN-003**: Error handling and graceful degradation

## Installation

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- npm or yarn

### Frontend Dependencies
```bash
cd tests
npm install
```

### Backend Dependencies
```bash
cd tests
pip install -r requirements.txt
```

## Running Tests

### Frontend Tests (Jest)
```bash
# Run all frontend tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Backend API Tests (Pytest)
```bash
# Run all API tests
npm run test:api

# Or directly with pytest
python -m pytest api_tests/ -v

# Run with coverage
python -m pytest api_tests/ --cov=../api --cov-report=html
```

### End-to-End Tests (Cypress)
```bash
# Run all E2E tests
npm run test:e2e

# Open Cypress UI
npm run test:e2e:open
```

### Run All Tests
```bash
npm run test:all
```

## Test Configuration

### Jest Configuration
- Test environment: jsdom
- Coverage collection from src directory
- Mock handling for static assets
- Setup file: setupTests.js

### Cypress Configuration
- Base URL: http://localhost:3000
- Viewport: 1280x720
- Screenshots on failure enabled
- Video recording disabled

### Pytest Configuration
- Flask test client setup
- Coverage reporting
- HTML test reports

## Test Data

The tests use mock data and don't require a running application. However, for E2E tests, you need to:

1. Start the Flask backend:
```bash
cd ../api
python app.py
```

2. Start the React frontend:
```bash
cd ..
npm start
```

## Test Reports

### Coverage Reports
- Frontend: Generated in `coverage/` directory
- Backend: Generated in `htmlcov/` directory

### Cypress Reports
- Screenshots: `cypress/screenshots/`
- Videos: `cypress/videos/` (if enabled)

## Adding New Tests

### Frontend Tests
1. Create new test file in `frontend_tests/`
2. Follow naming convention: `ComponentName.test.js`
3. Use React Testing Library for component testing
4. Mock external dependencies

### API Tests
1. Create new test file in `api_tests/`
2. Follow naming convention: `test_feature.py`
3. Use pytest fixtures for setup
4. Test both success and error scenarios

### E2E Tests
1. Create new test file in `e2e_tests/cypress/e2e/`
2. Follow naming convention: `feature.cy.js`
3. Use Cypress commands for browser automation
4. Test user workflows end-to-end

## Troubleshooting

### Common Issues

1. **Import Errors**: Make sure all dependencies are installed
2. **Path Issues**: Check relative paths in test files
3. **Mock Issues**: Verify mock files are properly configured
4. **Environment Issues**: Ensure correct Node.js and Python versions

### Debug Mode
```bash
# Frontend tests with verbose output
npm test -- --verbose

# API tests with verbose output
python -m pytest api_tests/ -v -s

# Cypress tests with browser open
npm run test:e2e:open
```

## Continuous Integration

The test suite is designed to work with CI/CD pipelines. Add these commands to your CI configuration:

```yaml
# Example GitHub Actions workflow
- name: Install dependencies
  run: |
    cd tests
    npm install
    pip install -r requirements.txt

- name: Run tests
  run: |
    cd tests
    npm run test:all
```

## Contributing

When adding new features to the application:

1. Write corresponding tests
2. Ensure all existing tests pass
3. Update this README if needed
4. Follow the existing test patterns and conventions

## Support

For issues with the test suite:
1. Check the troubleshooting section
2. Verify all dependencies are installed
3. Ensure the application is running for E2E tests
4. Check test logs for specific error messages 