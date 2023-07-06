const express = require("express");
const cookieParser = require("cookie-parser");
const db = require("./models");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 8080;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: true }).then(() => {
  console.log("db has been re sync");
});

//routes for the user API
app.use("/api/users", userRoutes);

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
