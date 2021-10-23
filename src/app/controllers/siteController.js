const Course = require('../models/Courses');
const { multipleMongoosetoObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /search
    search(req, res) {
        res.render('layouts/search');
    }
    //[GET]/
    index(req, res,next) {
        Course.find({})
        .then(courses=>{
            res.render('home',{
                courses:multipleMongoosetoObject(courses)
            });
        })
        .catch(next);
        // res.render('home');
    }
}
module.exports = new SiteController();
