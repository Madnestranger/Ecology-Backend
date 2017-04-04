var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/', function (req, res, next) {
    db.get().collection('pollutions').find().toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            if (req.query.city) {
                docs = docs.filter(function (item) {
                    return item.mainLocation == req.query.city;
                });
            }
            db.get().collection('substances').find().toArray(function (errSubst, substDocs) {
                docs.forEach(function (item) {
                    var currentSubstance = substDocs.find(function (itemFind) {
                        return itemFind._id == item.substanceId;
                    });
                    item.name = currentSubstance.name;
                    item.gdk = currentSubstance.gdk;
                    item.classOfDangerous = currentSubstance.classOfDangerous;
                });
                res.send(docs);
            });
        }
    })
});

router.post('/', function (req, res) {
    var artist = {
        city: req.body.city,
        averageConcentration: req.body.averageConcentration,
        mainLocation: req.body.mainLocation,
        substanceId: req.body.substanceId
    };
    db.get().collection('pollutions').insert(artist, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            db.get().collection('substances').find().toArray(function (err, docs) {
                var currentSubstance = docs.find(function (item) {
                    return item._id == artist.substanceId;
                });
                artist.name = currentSubstance.name;
                artist.gdk = currentSubstance.gdk;
                artist.classOfDangerous = currentSubstance.classOfDangerous;
                res.send(artist);
            });
        }
    });
});

module.exports = router;
