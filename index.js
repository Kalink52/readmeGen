// TODO: Include packages needed for this application
const inquirer = require("inquirer");

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
    message: "Write a short discription of your project:",
    name: "discription"},
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
    name: "titleDisc5"} 
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
  .then((response) =>
    console.log(response)
  );

}

// Function call to initialize app
init();
