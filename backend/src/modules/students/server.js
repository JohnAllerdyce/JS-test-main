const express = require('express');
const path = require('path');
const studentsController = require('./src/modules/students/students-controller');

const app = express();
app.use(express.json()); // Parse JSON bodies
app.use(express.static('app')); // Serve static files from 'app' folder

// Student CRUD Routes
app.post('/api/students', (req, res) => {
    const student = studentsController.createStudent(req.body.name, req.body.age);
    res.status(201).json(student);
});
app.get('/api/students', (req, res) => {
    res.json(studentsController.getAllStudents());
});
app.get('/api/students/:id', (req, res) => {
    const student = studentsController.getStudentById(req.params.id);
    res.json(student || { error: 'Student not found' });
});
app.put('/api/students/:id', (req, res) => {
    const student = studentsController.updateStudent(req.params.id, req.body.name, req.body.age);
    res.json(student || { error: 'Student not found' });
});
app.delete('/api/students/:id', (req, res) => {
    const student = studentsController.deleteStudent(req.params.id);
    res.json(student || { error: 'Student not found' });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});