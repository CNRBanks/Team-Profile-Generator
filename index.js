// Dependencies necessary for application
const fs = require("fs");
const inquirer = require("inquirer");
// Importing classes
const teamGenerated = require("./Develop/src/teamGenerated.js");
const Engineer = require("./Develop/lib/Engineer.js");
const Intern = require("./Develop/lib/Intern.js");
const Manager = require("./Develop/lib/Manager.js");
const Employee = require("./Develop/lib/Employee.js");
// Empty array to store profile inputs
const theTeam = [];
// Main Menu options
const menuList = [ {
  type: "list",
  name: "menuOpciones",
  message: "Would you like to -",
  choices: [
    "Create Engineer Profile",
    "Create Intern Profile",
    "Complete Team - Exit App"
  ]
}
]
// Questions for each employee profile
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


// start application and prompt user to enter manager name, employee ID, email address, and office number
function init()
  inquirer.prompt(managerQs).then((answers) => {
    // create a manager
    const manager = Manager (

    )
  })
// then display menu with the option to add an engineer or an intern or to finish
function mainMenu() {
  inquirer.prompt(menuQuestions).then((answers) => {

  })
}
// if engineer, enter engineer’s name, ID, email, and GitHub username
// return to the menu
// if intern, enter intern’s name, ID, email, and school
// return to menu
// if finish then exit application and generate HTML to teamGenerated.js
function completeTeam() {
  console.log('Team Complete!');
  console.log(teamGenerated)
    writeToFile("team.html", generateTeam(teamGenerated), (err) => {
      if (err) throw new Error(err);
      console.log("Go checkout your team!");
      // console.log(team);
  });
}







// TODO: Initialize app and export to html file via fs.writeFile
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//       if (err) {
//         return console.log(err);
//       } else {
//         console.log("The Team member has been created succesfully!");
//       }
//     });
//   }
function completeTeam() {
  console.log('Team Complete!');
  console.log(teamGenerated)
    writeToFile("team.html", generateTeam(teamGenerated), (err) => {
      if (err) throw new Error(err);
      console.log("Go checkout your team!");
    // console.log(data);
  });
}


// init();
