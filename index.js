// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your favorite color?",
      name: "color",
      choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
    }
  ])
  .then((response) =>
    console.log(colors[response.color](`Your favorite color is ${response.color}!`))
  );
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
