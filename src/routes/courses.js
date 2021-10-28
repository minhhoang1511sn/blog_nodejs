const express = require('express');
const route = express.Router();

const CourseController = require('../app/controllers/CourseController');
 route.get('/create', CourseController.create);
 route.post('/store', CourseController.store);
 route.post('/handle-form-actions', CourseController.handleFormActions);
route.get('/:id/edit', CourseController.edit);
route.put('/:id/', CourseController.update);
route.patch('/:id/restore', CourseController.restore);
route.delete('/:id', CourseController.delete);
route.delete('/:id/force', CourseController.destroy);
route.get('/:slug', CourseController.show);


module.exports = route;
