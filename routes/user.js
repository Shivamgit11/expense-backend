const express = require('express');

const router = express.Router();


const userController = require('../controllers/user');

router.post("/adduser", userController.addUser);

router.get("/getusers", userController.getUser);

router.delete("/deleteuser/:id", userController.DeleteUser);

module.exports = router;
