var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.get().collection('cities').find().toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

router.post('/', function (req, res) {
    var artist = {
        name: req.body.name,
        id: req.body.id
    };
    db.get().collection('cities').insert(artist, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(artist);
    });
});

module.exports = router;
