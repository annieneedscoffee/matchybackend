var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('requests').select().then(requests => res.json(requests))
});


module.exports = router;
