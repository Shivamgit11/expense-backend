const User = require("../models/User");

const addUser = async (req, res, next) => {
  try {
    console.log("1234");
    // if (!req.body.phonenumber) {
    //   throw new Error("Phone number is mandatory");
    // }
    console.log("3456");
    const name = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.phone;
    console.log("3456", name, email, phonenumber);

    const data = await User.create({
      name: name,
      email: email,
      phonenumber: phonenumber,
    });
    console.log("3456");
    res.status(201).json({ newUserDetail: data });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ allUsers: users });
  } catch (err) {
    console.log("Get User is failin ", JSON.stringify(err));
    res.status(500).json({
      error: err,
    });
  }
};

const DeleteUser = async (req, res) => {
  try {
    if (req.params.id == "undefined") {
      console.log("id is missing");
      return res.status(400).json({ err: "ID is missing" });
    }
    const uId = req.params.id;
    await User.destroy({ where: { id: uId } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  addUser,
  getUser,
  DeleteUser,
};
