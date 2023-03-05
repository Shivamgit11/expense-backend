const Auth = require("../models/Auth");

const Expense = require("../models/Expense");

const sequelize = require("../util/database");

const getUserLeaderBoard = async (req, res) => {
  try {
    const users = await Auth.findAll();
    const expenses = await Expense.findAll();

    const userAggreatedExpenses = [];
    console.log(expenses);

    expenses.forEach((expense) => {
      if (userAggreatedExpenses[expense.authId]) {
        userAggreatedExpenses[expense.authId] =
          userAggreatedExpenses[expense.authId] + expense.amount;
      } else {
        userAggreatedExpenses[expense.authId] = expense.amount;
      }
    });

    var userLeaderBoardDetails = [];
    users.forEach((user) => {
      userLeaderBoardDetails.push({
        name: user.name,
        total_cost: userAggreatedExpenses[user.id] || 0,
      });
    });
    console.log(userLeaderBoardDetails);
    userLeaderBoardDetails.sort((a,b) => {
        a.total_cost - b.total_cost
    })
    res.status(200).json(userLeaderBoardDetails);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getUserLeaderBoard,
};
