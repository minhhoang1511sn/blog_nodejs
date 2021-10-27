const Course = require('../models/Courses');
const { multipleMongoosetoObject } = require('../../util/mongoose');

class MeController {

    //[GET] /me/stored/courses
    storedCourses(req, res,next) {

        Promise.all([Course.find({ }), Course.countDocumentsDeleted({ })])
        .then(([courses,deletedCount]) =>{
            res.render('me/stored-courses',{
                deletedCount,
                courses: multipleMongoosetoObject(courses)
                })
        })
        .catch(next);
       
    }
    //[GET] /me/trash/courses
    trashCourses(req, res,next) {
        Course.findDeleted({})
        .then(courses =>res.render('me/trash-courses',{
                courses: multipleMongoosetoObject(courses)
                }),
        )
        .catch(next);
    }

}
module.exports = new MeController();