# Culinary Creations Test Cases Table

## Complete Test Cases Overview

| **Test Case ID** | **Component** | **Feature** | **Test Scenario** | **Test Steps** | **Expected Result** | **Actual Result** | **Status (Pass/Fail)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-FR-001** | Frontend | **Homepage** | Verify all UI elements are visible and correctly rendered. | 1. Open the application.<br>2. Check for the header, navigation bar, recipe search bar, featured recipes, and footer. | All UI elements should be displayed correctly without any alignment or rendering issues. | | |
| **TC-FR-002** | Frontend | **Recipe Search** | Search for a recipe using a valid keyword. | 1. Navigate to the homepage.<br>2. Enter "Chicken" into the search bar.<br>3. Click the "Search" button. | A list of recipes containing the keyword "Chicken" should be displayed. | | |
| **TC-FR-003** | Frontend | **Recipe Search** | Search for a recipe using an invalid/non-existent keyword. | 1. Navigate to the homepage.<br>2. Enter "xyzabc" into the search bar.<br>3. Click the "Search" button. | A "No recipes found" message should be displayed. | | |
| **TC-FR-004** | Frontend | **Recipe Search** | Verify search with an empty input. | 1. Navigate to the homepage.<br>2. Leave the search bar empty.<br>3. Click the "Search" button. | The page should either show an error message or display all recipes. | | |
| **TC-FR-005** | Frontend | **Recipe Viewing** | Click on a recipe to view its details. | 1. Search for a recipe or click on one from the homepage.<br>2. Observe the recipe detail page. | The page should display the recipe's title, image, ingredients, and instructions clearly. | | |
| **TC-FR-006** | Frontend | **Cuisine Filter** | Filter recipes by a specific cuisine. | 1. Go to the recipe listing page.<br>2. Select a cuisine (e.g., "Asian") from a dropdown or filter list. | Only recipes belonging to the "Asian" cuisine should be displayed. | | |
| **TC-FR-007** | Frontend | **Navigation** | Test all navigation links. | 1. Click on every link in the navigation bar (e.g., Home, About, Contact).<br>2. Click on the website logo. | All links should navigate to the correct pages without errors. The logo should link to the homepage. | | |
| **TC-BE-001** | Backend API | **GET /api/recipes** | Retrieve all recipes. | Send a GET request to `/cuisine`. | The API should return a JSON array of all recipes with a 200 OK status code. | | |
| **TC-BE-002** | Backend API | **GET /api/recipes/{id}** | Retrieve a single recipe by its ID. | Send a GET request to `/cuisine/1` (assuming a recipe with ID 1 exists). | The API should return a JSON object for the specified recipe with a 200 OK status code. | | |
| **TC-BE-003** | Backend API | **GET /api/recipes/{id}** | Request a recipe with a non-existent ID. | Send a GET request to `/cuisine/9999`. | The API should return a 404 Not Found error. | | |
| **TC-BE-004** | Backend API | **GET /api/search** | Search for recipes by keyword. | Send a POST request to `/cuisine` with `{"search": "Pasta"}`. | The API should return a JSON array of recipes matching the keyword "Pasta" with a 200 OK status. | | |
| **TC-BE-005** | Backend API | **GET /api/search** | Search with a non-existent keyword. | Send a POST request to `/cuisine` with `{"search": "xyzabc"}`. | The API should return an empty JSON array `[]` with a 200 OK status. | | |
| **TC-BE-006** | Backend API | **GET /api/cuisines** | Retrieve all available cuisines. | Send a GET request to `/cuisine`. | The API should return a JSON array of all cuisine types with a 200 OK status. | | |
| **TC-BE-007** | Backend API | **GET /api/recipes/cuisine/{name}** | Filter recipes by cuisine name. | Send a POST request to `/cuisine` with `{"cuisine": "american"}`. | The API should return a JSON array of recipes belonging to the "american" cuisine with a 200 OK status. | | |
| **TC-GEN-001** | General | **Responsiveness** | Check website layout on different devices. | 1. Open the website on a desktop browser and resize the window.<br>2. Open the website on a mobile phone and a tablet. | The layout should adapt gracefully to different screen sizes without breaking the UI. | | |
| **TC-GEN-002** | General | **Data Integrity** | Verify data consistency between frontend and backend. | 1. View a recipe on the frontend.<br>2. Fetch the same recipe via the API.<br>3. Compare the details. | The recipe details (title, ingredients, etc.) should be identical. | | |
| **TC-GEN-003** | General | **Error Handling** | Check for graceful error handling. | 1. Manually enter an invalid URL.<br>2. Disconnect from the internet and try to use the site. | The application should display a user-friendly "404 Page Not Found" error. An appropriate "No internet connection" message should appear. | | |

## Additional Test Cases

### User Authentication Tests
| **Test Case ID** | **Component** | **Feature** | **Test Scenario** | **Test Steps** | **Expected Result** | **Actual Result** | **Status (Pass/Fail)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-AUTH-001** | Backend API | **User Registration** | Register a new user with valid data. | Send a POST request to `/register` with valid user data. | User should be registered successfully with a 200 OK status. | | |
| **TC-AUTH-002** | Backend API | **User Login** | Login with valid credentials. | Send a POST request to `/login` with valid username and password. | User should be logged in successfully with a 200 OK status. | | |
| **TC-AUTH-003** | Backend API | **User Login** | Login with invalid credentials. | Send a POST request to `/login` with invalid username or password. | Should return a 401 Unauthorized error. | | |

### Recipe Generation Tests
| **Test Case ID** | **Component** | **Feature** | **Test Scenario** | **Test Steps** | **Expected Result** | **Actual Result** | **Status (Pass/Fail)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-RECIPE-001** | Backend API | **Ingredient to Recipe** | Generate recipe from ingredients. | Send a POST request to `/ingredient` with ingredient list. | Should return a generated recipe with a 200 OK status. | | |
| **TC-RECIPE-002** | Backend API | **Image to Recipe** | Generate recipe from uploaded image. | Send a POST request to `/image` with image file. | Should return a generated recipe with a 200 OK status. | | |

### Performance Tests
| **Test Case ID** | **Component** | **Feature** | **Test Scenario** | **Test Steps** | **Expected Result** | **Actual Result** | **Status (Pass/Fail)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-PERF-001** | General | **Page Load Time** | Measure homepage load time. | 1. Open browser developer tools.<br>2. Navigate to homepage.<br>3. Record load time. | Page should load within 3 seconds. | | |
| **TC-PERF-002** | General | **Search Response Time** | Measure search response time. | 1. Perform a search operation.<br>2. Record response time. | Search results should appear within 2 seconds. | | |

### Security Tests
| **Test Case ID** | **Component** | **Feature** | **Test Scenario** | **Test Steps** | **Expected Result** | **Actual Result** | **Status (Pass/Fail)** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-SEC-001** | Backend API | **Input Validation** | Test SQL injection prevention. | Send malicious input in search queries. | Should handle input safely without errors. | | |
| **TC-SEC-002** | Backend API | **File Upload Security** | Test file upload restrictions. | Try to upload non-image files. | Should reject invalid file types. | | |

## Test Execution Instructions

### Prerequisites
1. Ensure the Flask backend is running (`python app.py` in the `api` directory)
2. Ensure the React frontend is running (`npm start` in the root directory)
3. Install test dependencies (see README.md)

### Running Tests
1. **Frontend Tests**: `npm test` (in tests directory)
2. **Backend Tests**: `python -m pytest api_tests/` (in tests directory)
3. **E2E Tests**: `npm run test:e2e` (in tests directory)
4. **All Tests**: `python execute_tests.py` (in tests directory)

### Test Reports
- **JSON Report**: `test_reports/detailed_report_YYYYMMDD_HHMMSS.json`
- **HTML Report**: `test_reports/report_YYYYMMDD_HHMMSS.html`
- **Coverage Report**: `coverage/` directory (frontend) and `htmlcov/` directory (backend)

## Notes
- Update the "Actual Result" and "Status" columns as you run the tests
- Some tests may need adjustment based on your specific implementation
- E2E tests require both frontend and backend to be running
- Performance tests may vary based on system specifications 