const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");

const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

const userRoutes = require("./routes/user");
const expeneRoutes = require("./routes/expense");
const authRoutes = require("./routes/auth");
const User = require("./models/User");
var cors = require("cors");
const Expense = require("./models/Expense");
const Auth = require("./models/Auth");

const dotenv = require("dotenv");

// get config vars
dotenv.config();

app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRoutes);

//expense
app.use("/expense", expeneRoutes);

app.use("/auth", authRoutes);

//working for expense backend

///everty thing for expense will be done inside it
Auth.hasMany(Expense);
Expense.belongsTo(Auth);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
