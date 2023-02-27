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

const loginAuth = async (req, res) => {
  try {
    console.log(req);
    const email = req.body.email;
    const password = req.body.password;

    console.log(email, password);

    if (isstringinvalid(email) || isstringinvalid(password)) {
      res
        .status(400)
        .json({ message: "email or password is missing", success: false });
    }

    const user = await Auth.findAll({ where: { email } });

    if (user.length > 0) {
      if (user[0].password === password) {
        res
          .status(200)
          .json({ success: true, message: "User LOgged in successfully" });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Password is incorrect" });
      }
    } else {
      return res
        .status(404)
        .json({ success: false, message: "User Doenst exits" });
    }
  } catch {
    (err) => {
      res.status(500).json({ message: err, success: false });
    };
  }
};

module.exports = {
  addAuth,
  loginAuth,
};
