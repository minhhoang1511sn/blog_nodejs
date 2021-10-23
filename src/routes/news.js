const express = require('express');
const route = express.Router();

const NewsController = require('../app/controllers/newController');
route.get('/:slug', NewsController.show);
route.get('/', NewsController.index);

module.exports = route;
