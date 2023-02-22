const Expense = require("../models/Expense");

const addExpense = async (req, res, next) => {
  try {
    const amount = req.body.amount;
    const description = req.body.desc;
    const category = req.body.category;
    const data = await Expense.create({
      amount: amount,
      description: description,
      categoru: category,
    });
    res.status(201).json({ newExpenseDetails: data });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

const getExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findAll();
    res.status(200).json({ allExpense: expense });
  } catch (error) {
    console.log("get expense is falling", JSON.stringify(error));
    res.status(500).json({ error: error });
  }
};

const deleteExpense = async (req, res) => {
  try {
    if (req.params.id === "undefined") {
      console.log("Id is missing");
      return res.status(400).json({ err: "ID is missing" });
    }
    const uId = req.params.id;
    await Expense.destroy({ where: { id: uId } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  addExpense,
  getExpense,
  deleteExpense,
};
