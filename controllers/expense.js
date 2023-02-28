const Expense = require("../models/Expense");

const addExpense = async (req, res, next) => {
  
    const amount = req.body.amount;
    const description = req.body.desc;
    const category = req.body.category;

    if (amount == undefined || amount.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Parameter mission" });
    }
    console.log(req.user)

    Expense.create({
      amount: amount,
      description: description,
      categoru: category,
      authId: req.user.id,
    })
      .then((expense) => {
        return res.status(400).json({ expense, success: true });
      })
      .catch((err) => {
        return res.status(500).json({ success: false, error: err });
      });
  //   const data = await Expense.create({
  //     amount: amount,
  //     description: description,
  //     categoru: category,
  //   });
  //   res.status(201).json({ newExpenseDetails: data });
  // } catch (err) {
  //   res.status(500).json({
  //     error: err,
  //   });
  // }
};

const getExpense = async (req, res) => {
  Expense.findAll({ where: { authId: req.user.id } })
    .then((expenses) => {
      return res.status(200).json({ expenses, success: true });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: err, success: false });
    });
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
