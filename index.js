const express = require('express');
const app = express();

const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');
const instructor = require('./data/course-instructor.json');

app.get('/', (req, res) => {
    res.send(courses);
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const filterCourses = courses.filter(course => parseInt(course.category) === parseInt(id));
    res.send(filterCourses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const findCourse = courses.filter(course => parseInt(course.id) === parseInt(id));
    res.send(findCourse);
});

app.get('/instructor', (req, res) => {
    res.send(instructor);
});

app.get('*', (req, res) => {
    res.send({ status: 'bad', status_code: 404 });
});

app.listen(port, () => {
    console.log('Server is running', port);
});