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
const User = require("./models/user");
var cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.post("/user/adduser", async (req, res, next) => {
  try {
    console.log("1234");
    if (!req.body.phonenumber) {
      throw new Error("Phone number is mandatory");
    }
    const name = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.number;

    const data = await User.create({
      name: name,
      email: email,
      phonenumber: phonenumber,
    });
    res.status(201).json({ newUserDetail: data });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

app.use(errorController.get404);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
