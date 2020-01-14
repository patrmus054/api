const { crudControllers } = require("./crud");
const Food = require("./food.model");

module.exports = crudControllers(Food);
