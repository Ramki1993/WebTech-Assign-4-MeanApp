var express = require('express');
var router = express.Router();
var Todo = require('../models/todo.js');

/* PUT-- /todo/:id */
router.put('/:id', function(req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  module.exports = router;