#! /usr/bin/env node

import inquirer from "inquirer";
 // Printing a welcome message
 console.log("n\tWelcome to \ 'galaxy-junction\'- CLI Simple Calculator\n")
 
 //Asking questions from users through inquirer

const answer = await inquirer.prompt([
  { mesage: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform opertion",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//Conditional statement
if(answer.operator === "Addition"){
console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction"){
console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication"){
console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please select valid operator")
}