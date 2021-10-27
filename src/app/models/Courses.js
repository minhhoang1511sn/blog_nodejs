const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;


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
  //ADD PLUGIN
  mongoose.plugin(slug);
  Course.plugin(mongooseDelete, {
    deletedAt: true,  
    overrideMethods: 'all',
    });
  module.exports = mongoose.model('Course', Course);