const express = require("express");

const purchaseController = require("../controllers/purchase");

const authenticatemiddleware = require("../middleware/auth");

const router = express.Router();

router.get(
  "/premiummembership",
  authenticatemiddleware.authenticate,
  purchaseController.purchasepremium
);

module.exports = router;
