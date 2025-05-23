const Sequelize = require("sequelize");

const sequelize = new Sequelize("shop_app", "root", "m.K.0852431", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
