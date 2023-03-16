const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");

const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

const expeneRoutes = require("./routes/expense");
const authRoutes = require("./routes/auth");
const purchaseroutes = require("./routes/purchase");
const leaderrouter = require("./routes/premiumFeature");

var cors = require("cors");
const Expense = require("./models/Expense");
const Auth = require("./models/Auth");

const dotenv = require("dotenv");
const Order = require("./models/order");

// get config vars
dotenv.config();

app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

//expense
app.use("/expense", expeneRoutes);

app.use("/auth", authRoutes);

app.use("/purchase", purchaseroutes);

app.use("/premium", leaderrouter);

//working for expense backend

///everty thing for expense will be done inside it
Auth.hasMany(Expense);
Expense.belongsTo(Auth);

Auth.hasMany(Order);
Order.belongsTo(Auth);

sequelize
  .sync({ alter: true})
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
