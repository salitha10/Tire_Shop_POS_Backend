//Item controller
var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    models.Item.findAll({include: [models.Category]}).then(function(items) {
        res.json(items);
    });
});

router.get('/:id', function(req, res) {
    models.Item.findById(req.params.id, {include: [models.Category]}).then(function(item) {
        res.json(item);
    });
});

router.post('/', function(req, res) {
    models.Item.create(req.body).then(function(item) {
        res.json(item);
    });
});

router.put('/:id', function(req, res) {
    models.Item.update(req.body, {where: {id: req.params.id}}).then(function(item) {
        res.json(item);
    });
});


router.delete('/:id', function(req, res) {
    models.Item.destroy({where: {id: req.params.id}}).then(function(item) {
        res.json(item);
    });
});

module.exports = router;