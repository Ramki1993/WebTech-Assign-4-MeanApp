var express = require('express');
var router = express.Router();
var Todo = require('../models/todo.js');

/* POST-- /todos */
router.post('/', function(req, res, next) {
  Todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
