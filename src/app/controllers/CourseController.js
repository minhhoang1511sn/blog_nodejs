const Course = require('../models/Courses');
const { mongoosetoObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /courses/:slug
    show(req,res,next){
        Course.findOne({ slug: req.params.slug })
        .then(course =>{
               res.render('courses/show',{course: mongoosetoObject(course)});
        })
        .catch(next);
    }
     //[GET] /courses/create
    create(req,res,next){
        res.render('courses/create');
    }
      //[POST] /courses/store
      store(req,res,next){
          const formdata = req.body;
          req.body.images = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formdata);
        course.save()
        .then(()=>res.redirect('/'))
        .catch(err =>{});
    }
}



module.exports = new CourseController();