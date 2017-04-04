var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.get().collection('pollutions').find().toArray(function (err, docs) {
    console.log(err);
    console.log(docs);
    res.send('respond with a resource');
  });
});

module.exports = router;
