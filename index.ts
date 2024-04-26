#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1, //Base currency
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};

let user_ansewer = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    message: "Enter From Currency",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    type: "list",
    message: "Enter To Currency",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    type: "number",
    message: "Enter your Amount",
  },
]);

let fromAmount = currency[user_ansewer.from];
let toAmount = currency[user_ansewer.to];
let amount = user_ansewer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(Math.round(convertedAmount));