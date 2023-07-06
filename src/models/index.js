const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("blogging-app", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

//checking connection
sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected to discover`);
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./userModel")(sequelize, DataTypes);

module.exports = db;
