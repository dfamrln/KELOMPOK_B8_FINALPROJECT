var DataTypes = require("sequelize").DataTypes;
var _todos = require("./todos");
var _users = require("./users");

function initModels(sequelize) {
  var todos = _todos(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  todos.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(todos, { as: "todos", foreignKey: "user_id"});

  return {
    todos,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
