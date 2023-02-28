const express = require("express");

const router = express.Router();

const useExpenseControler = require("../controllers/expense");
const userauthentication = require("../middleware/auth");

router.post(
  "/expensedetails",
  userauthentication.authenticate,
  useExpenseControler.addExpense
);

router.get(
  "/expensedetails",
  userauthentication.authenticate,
  useExpenseControler.getExpense
);

router.delete("/expensedetails/:id", useExpenseControler.deleteExpense);

module.exports = router;
