const express = require('express');
const router = express.Router();
const todoController = require('../controller/TodoController');

router.get('/todos', todoController.getAllTodos);
router.post('/todos', todoController.createTodo);

module.exports = router;