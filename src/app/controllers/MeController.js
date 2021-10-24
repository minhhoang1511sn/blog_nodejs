const Course = require('../models/Courses');
const { multipleMongoosetoObject } = require('../../util/mongoose');

class MeController {

    //[GET] /me/stored/courses
    storedCourses(req, res,next) {
        Course.find({})
        .then(courses =>{res.render('me/stored-courses',{
                courses: multipleMongoosetoObject(courses)
                });
        })
        .catch(next);

   
    }

}
module.exports = new MeController();