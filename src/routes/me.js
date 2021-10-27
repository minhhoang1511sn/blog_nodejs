const express = require('express');
const route = express.Router();

const MeController = require('../app/controllers/MeController');
route.get('/stored/courses', MeController.storedCourses);
route.get('/trash/courses', MeController.trashCourses);


module.exports = route;
