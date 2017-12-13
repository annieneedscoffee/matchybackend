var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('products').select().then(products => res.json(products))
});

  router.get('/:id', function(req, res){
    knex('products').select().where('id', req.params.id).then(products => res.json(products))
  });

router.post('/', function(req, res){
  knex('products').insert(req.body).then(() =>{
    knex('products').select().then(products => res.json(products))
  });
});

router.patch('/:id', function(req, res){
  knex('products').update(req.body).where('id', req.params.id).then(function(){
    knex('products').select().then(products => res.json(products))
  });
});

/*  Need to do delete slightly differently from example or change what page its on. */

module.exports = router;
