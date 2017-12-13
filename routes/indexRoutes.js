var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET requests routes page. */
router.get('/requests', function(req, res, next) {
  res.render('requests', { title: 'Express' });
});

/* GET products routes page. */
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Express' });
});

module.exports = router;
