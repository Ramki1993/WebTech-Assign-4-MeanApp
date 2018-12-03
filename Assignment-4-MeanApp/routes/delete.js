var express = require('express');
var router = express.Router();
var Todo = require('../models/todo.js');

/* DELETE-- /todo/:id */
router.delete('/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, function (err, post) {
    if (err) return next(err);
    console.log(req.params.id);
    res.json(post);
  });
});

module.exports = router;
