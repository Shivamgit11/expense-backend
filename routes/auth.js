const express = require('express');

const router = express.Router();

const useAuthcontroller = require('../controllers/auth');

router.post("/authdetails", useAuthcontroller.addAuth);


module.exports = router;