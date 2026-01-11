const sequelize = require('../config/db');
const initModels = require('../models/init-models');
const models = initModels(sequelize);

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await models.todos.findAll();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createTodo = async (req, res) => {
    try {
        const newTodo = await models.todos.create(req.body);
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};