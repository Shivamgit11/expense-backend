const Auth = require("../models/Auth");

const addAuth = async (req, res, next) => {
  console.log(req);
    try {
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.password;
      const data = await Auth.create({
        name: name,
        email: email,
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