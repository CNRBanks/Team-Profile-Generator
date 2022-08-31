// Dependencies necessary for application
const fs = require("fs");
const inquirer = require("inquirer");
// Importing classes
const teamGenerated = require("./Develop/src/teamGenerated.js");
const Engineer = require("./Develop/lib/Engineer.js");
const Intern = require("./Develop/lib/Intern.js");
const Manager = require("./Develop/lib/Manager.js");
const Employee = require("./Develop/lib/Employee.js");
// Empty array to capture inputs
const TEAM = [];
// Questions for each employee type
const engineerQs = [
  {
    type: "input",
    name: "engineerNombre",
    message: "Engineer's Name: ",
  },
  {
    type: "input",
    name: "engineerIdentificacion",
    message: "Engineer's ID: ",
  },
  {
    type: "input",
    name: "engineerCorreo",
    message: "Engineer's Email Address: ",
  },
  {
    type: "input",
    name: "engineerGit",
    message: "Engineer's GitHub Account: ",
  },
];
const InternQs = [
  {
    type: "input",
    name: "internNombre",
    message: "Intern's Name: ",
  },
  {
    type: "input",
    name: "internIdentificacion",
    message: "Intern's ID: ",
  },
  {
    type: "input",
    name: "internCorreo",
    message: "Intern's Email Address: ",
  },
  {
    type: "input",
    name: "internEscuela",
    message: "Intern's School: ",
  },
];
const managerQs = [
  {
    type: "input",
    name: "managerNombre",
    message: "Manager's Name: ",
  },
  {
    type: "input",
    name: "managerIdentificacion",
    message: "Manager's ID: ",
  },
  {
    type: "input",
    name: "managerCorreo",
    message: "Manager's Email Address: ",
  },
  {
    type: "input",
    name: "managerOficina",
    message: "Manager's Office Number: ",
  },
];
// TODO: Initialize app and export to html file via fs.writeFile
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return console.log(err);
      } else {
        console.log("The Team member has been created succesfully!");
      }
    });
  }
function init() {
  inquirer.prompt(engineerQs).then((data) => {
    writeToFile("teamGenerated.js", MarkDown(data));
    // console.log(data);
  });
}


init();
