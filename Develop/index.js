// Dependencies necessary for application
const fs = require("fs");
const inquirer = require("inquirer");
// Importing classes
const teamGenerated = require("./src/teamGenerated.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
// Empty array to capture inputs
const TEAM = [];
// Questions for each employee type
const engineerQs = [];
const InternQs = [];
const managerQs = [];
// TODO: Initialize app and export to html file via fs.writeFile
