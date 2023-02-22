const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");

const errorController = require("./controllers/error");

const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const userRoutes = require("./routes/user");
const expeneRoutes = require("./routes/expense");
const User = require("./models/User");
var cors = require("cors");
const Expense = require("./models/Expense");

app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use("/user", userRoutes);
app.use("/expense", expeneRoutes);

//working for expense backend



///everty thing for expense will be done inside it

app.use(errorController.get404);

sequelize
  .sync({ alter: true })
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
