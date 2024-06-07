// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
    message: "what is your github username?",
    name: "userName"}, //todo
    {type: "input",
    message: "What is your email address?",
    name: "userEmail"}, //todo
    {type: "input",
    message: "What is your project's name?",
    name: "title"},
    {type: "input",
    message: "Write a short description of your project:",
    name: "description"},
    {type: "list",
    message: "What type of license should you project have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"]},
    {type: "input",
    message: "What command should I run to run the dependencies?",
    name: "command"},
    {type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage"},
    {type: "input",
    message: "What does the user need to know about contributing the repo?",
    name: "contributing"} 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => err 
    ? console.error(err) 
    : console.log('Success!')
      );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((response) => {
    let markdown = generateMarkdown(response)
    console.log(markdown)
    writeToFile('test.md', markdown)
  }
)
}

// Function call to initialize app
init();
