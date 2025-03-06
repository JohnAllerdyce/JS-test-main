let students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 }
];
let nextId = 3;

const studentsController = {
    createStudent: (name, age) => {
        const newStudent = { id: nextId++, name, age: parseInt(age) };
        students.push(newStudent);
        return newStudent;
    },
    getAllStudents: () => students,
    getStudentById: (id) => students.find(s => s.id === parseInt(id)) || null,
    updateStudent: (id, name, age) => {
        const studentIndex = students.findIndex(s => s.id === parseInt(id));
        if (studentIndex === -1) return null;
        students[studentIndex] = {
            id: parseInt(id),
            name: name || students[studentIndex].name,
            age: age ? parseInt(age) : students[studentIndex].age
        };
        return students[studentIndex];
    },
    deleteStudent: (id) => {
        const studentIndex = students.findIndex(s => s.id === parseInt(id));
        if (studentIndex === -1) return null;
        return students.splice(studentIndex, 1)[0];
    }
};

module.exports = studentsController;