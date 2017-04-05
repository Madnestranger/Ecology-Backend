var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/', function (req, res, next) {
    db.get().collection('pollutionsWater').find().toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            if (req.query.city) {
                docs = docs.filter(function (item) {
                    return item.mainLocation == req.query.city;
                });
            }
            db.get().collection('onlyGDKsubstances').find().toArray(function (errSubst, substDocs) {
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
    db.get().collection('pollutionsWater').insert(artist, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            db.get().collection('onlyGDKsubstances').find().toArray(function (err, docs) {
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



router.get('/excessDischarge', function (req, res, next) {
    db.get().collection('pollutionsWaterExcess').find().toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            if (req.query.city) {
                docs = docs.filter(function (item) {
                    return item.city == req.query.city;
                });
            }
            db.get().collection('onlyGDKsubstances').find().toArray(function (errSubst, substDocs) {
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

router.post('/excessDischarge', function (req, res) {
    var pollustion = {
        city: req.body.city,
        mainLocation: req.body.mainLocation,
        v: req.body.v,
        t: req.body.t,
        cc: req.body.cc,
        cd: req.body.cd,
        substanceId: req.body.substanceId,
        h: req.body.h
    };

    db.get().collection('pollutionsWaterExcess').insert(pollustion, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            db.get().collection('onlyGDKsubstances').find().toArray(function (err, docs) {
                var currentSubstance = docs.find(function (item) {
                    return item._id == pollustion.substanceId;
                });
                pollustion.name = currentSubstance.name;
                pollustion.gdk = currentSubstance.gdk;
                pollustion.classOfDangerous = currentSubstance.classOfDangerous;
                res.send(pollustion);
            });
        }
    });
});


router.get('/emergencyDischarge', function (req, res, next) {
    db.get().collection('pollutionsWaterEmergency').find().toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            if (req.query.city) {
                docs = docs.filter(function (item) {
                    return item.city == req.query.city;
                });
            }
            db.get().collection('onlyGDKsubstances').find().toArray(function (errSubst, substDocs) {
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

router.post('/emergencyDischarge', function (req, res) {
    var pollustion = {
        city: req.body.city,
        mainLocation: req.body.mainLocation,
        v: req.body.v,
        t: req.body.t,
        cc: req.body.cc,
        substanceId: req.body.substanceId,
        h: req.body.h
    };

    db.get().collection('pollutionsWaterEmergency').insert(pollustion, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            db.get().collection('onlyGDKsubstances').find().toArray(function (err, docs) {
                var currentSubstance = docs.find(function (item) {
                    return item._id == pollustion.substanceId;
                });
                pollustion.name = currentSubstance.name;
                pollustion.gdk = currentSubstance.gdk;
                pollustion.classOfDangerous = currentSubstance.classOfDangerous;
                res.send(pollustion);
            });
        }
    });
});


router.get('/pureDischarge', function (req, res, next) {
    db.get().collection('pollutionsWaterPure').find().toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            if (req.query.city) {
                docs = docs.filter(function (item) {
                    return item.city == req.query.city;
                });
            }
            db.get().collection('onlyGDKsubstances').find().toArray(function (errSubst, substDocs) {
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

router.post('/pureDischarge', function (req, res) {
    var pollustion = {
        city: req.body.city,
        mainLocation: req.body.mainLocation,
        m: req.body.m,
        substanceId: req.body.substanceId,
        h: req.body.h
    };

    db.get().collection('pollutionsWaterPure').insert(pollustion, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            db.get().collection('onlyGDKsubstances').find().toArray(function (err, docs) {
                var currentSubstance = docs.find(function (item) {
                    return item._id == pollustion.substanceId;
                });
                pollustion.name = currentSubstance.name;
                pollustion.gdk = currentSubstance.gdk;
                pollustion.classOfDangerous = currentSubstance.classOfDangerous;
                res.send(pollustion);
            });
        }
    });
});



router.get('/oil', function (req, res, next) {
    db.get().collection('pollutionsWaterOil').find().toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            if (req.query.city) {
                docs = docs.filter(function (item) {
                    return item.city == req.query.city;
                });
            }

            res.send(docs);

        }
    })
});

router.post('/oil', function (req, res) {
    var pollustion = {
        city: req.body.city,
        mainLocation: req.body.mainLocation,
        y: req.body.y,
        v: req.body.v,
        l: req.body.l
    };

    db.get().collection('pollutionsWaterOil').insert(pollustion, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            res.send(pollustion);
        }
    });
});


module.exports = router;
