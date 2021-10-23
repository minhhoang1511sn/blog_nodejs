const express = require('express');
const route = express.Router();

const SiteController = require('../app/controllers/siteController');
route.get('/search', SiteController.search);

route.get('/', SiteController.index);

module.exports = route;
