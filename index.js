// Dependencies necessary for application
const fs = require("fs");
const inquirer = require("inquirer");
// Importing classes
const teamGenerated = require("./src/createTeam.js");
const Engineer = require("./Develop/lib/Engineer.js");
const Intern = require("./Develop/lib/Intern.js");
const Manager = require("./Develop/lib/Manager.js");
// const Employee = require("./Develop/lib/Employee.js");
const teamCuerpo = require("./src/createTeam");
// Empty array to store profile inputs
const perfiles = [];
// Main Menu options
const menuList = [
  {
    type: "list",
    name: "menuOpciones",
    message: "Would you like to -",
    choices: ["Engineer", "Intern", "Complete Team - Exit App"],
  },
];
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
const internQs = [
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

//start application and prompt user to enter manager name, employee ID, email address, and office number
function init() {
  inquirer.prompt(managerQs).then((respuestas) => {
    // create a manager
    const jefe = new Manager(
      respuestas.managerOficina,
      respuestas.managerCorreo,
      respuestas.managerIdentificacion,
      respuestas.managerNombre
    );
    perfiles.push(jefe);
    // return to main menu
    mainMenu();
  });
}

// then display menu with the option to add an engineer or an intern or to finish
function mainMenu() {
  inquirer.prompt(menuList).then((respuestas) => {
    console.log(respuestas);
    if (respuestas.menuOpciones === "Engineer") {
      createEngineer();
    } else if (respuestas.menuOpciones === "Intern") {
      createIntern();
    } else completeTeam();
    console.log(completeTeam)
  });
}
console.log(perfiles)
// if engineer, enter engineer’s name, ID, email, and GitHub username
function createEngineer() {
  inquirer.prompt(engineerQs).then((respuestas) => {
    const ingeniero = new Engineer(
      respuestas.engineerGit,
      respuestas.engineerCorreo,
      respuestas.engineerIdentificacion,
      respuestas.engineerNombre
    );
    perfiles.push(ingeniero);
    // return to the menu
    mainMenu();
  });
  console.log("engineer");
}
// if intern, enter intern’s name, ID, email, and school
function createIntern() {
  inquirer.prompt(internQs).then((respuestas) => {
    const interno = new Intern(
      respuestas.internEscuela,
      respuestas.internCorreo,
      respuestas.internIdentificacion,
      respuestas.internNombre
    );
    perfiles.push(interno);
    // return to menu
    mainMenu();
  });
  console.log("intern");
}
// if finish then exit application and generate HTML to teamGenerated.js
function completeTeam() {
  console.log("Team Complete!");
  console.log(perfiles)
  // console.log(perfiles);
  fs.writeFile("teamProfiles.html", teamCuerpo(perfiles), (err) => {
    if (err) throw new Error(err);
    console.log("Go checkout your team!");
    // console.log(team);
  });
}

init();
