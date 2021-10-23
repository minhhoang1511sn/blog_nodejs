const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Course = new Schema({
    name: {
        type:String,maxlength:255, required: true,
    },
    description: {
        type:String, required: true,
    },
    images: {
        type:String,
    },
    slug: {
        type:String, slug:'name', unique:true,
    },
    videoId: {
        type:String, required: true,
    },

  },{timestamps:true});

  module.exports = mongoose.model('Course', Course);