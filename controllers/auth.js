const Auth = require("../models/Auth");

function isstringinvalid(string) {
  if (string === undefined || string.length === 0) {
    return true;
  } else {
    return false;
  }
}
const addAuth = async (req, res, next) => {
  console.log(req);
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (
      isstringinvalid(name) ||
      isstringinvalid(email) ||
      isstringinvalid(password)
    ) {
      return res
        .status(400)
        .json({ err: "Bad parameters, something is missing" });
    }

    await Auth.create({
      name: name,
      email: email,
      password: password,
    });
    res.status(201).json({ message: "Successfully created new user" });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  addAuth,
};
