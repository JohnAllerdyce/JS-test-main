
**Problem1** \
Fix "Add New Notice" Page \
<mark>/app/notices/add</mark> \
When click the 'Save' button, 'description' doesn't be saved. \
<b>Fix it.</b>

**Problem2** \
Complete CRUD operation in Student management page. \
<mark>/src/modules/students/students-controller.js</mark>

Ramesh G: 
Implement notice add fix and student CRUD operations

- Added /app/notices/add page with HTML and JS to save title and description to localStorage, fixing the issue where description wasn't saved
- Created /src/modules/students/students-controller.js with full CRUD operations (Create, Read, Update, Delete) for student management
- Set up Express server in server.js to serve static notice page and provide student API endpoints
- Initialized npm project with Express dependency and start script"
