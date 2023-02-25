const Auth = require("../models/Auth");

const addAuth = async (req, res, next) => {
    try {
      const name = req.body.name;
      const phone = req.body.phone;
      const password = req.body.password;
      const data = await Auth.create({
        name: name,
        phone: phone,
        password: password,
      });
      res.status(201).json({ newAuthdetails: data });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  };

  module.exports = {
    addAuth,
  }