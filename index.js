// Dependencies necessary for application
const fs = require("fs");
const inquirer = require("inquirer");
// Importing classes
const teamGenerated = require("./Develop/src/teamGenerated.js");
const Engineer = require("./Develop/lib/Engineer.js");
const Intern = require("./Develop/lib/Intern.js");
const Manager = require("./Develop/lib/Manager.js");
// Empty array to capture inputs
const TEAM = [];
// Questions for each employee type
const engineerQs = [];
const InternQs = [];
const managerQs = [];
// TODO: Initialize app and export to html file via fs.writeFile
