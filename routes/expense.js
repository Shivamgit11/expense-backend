const express = require('express');

const router = express.Router();

const useExpenseControler = require('../controllers/expense');

router.post("/expensedetails", useExpenseControler.addExpense);

router.get("/expensedetails", useExpenseControler.getExpense);

router.delete("/expensedetails/:id", useExpenseControler.deleteExpense);

module.exports = router;