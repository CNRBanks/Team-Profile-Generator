// import employee class
const Employee = require("./Employee.js");
// write/define Engineer class that extends from employee
class Engineer extends Employee {
  constructor(github, correo, id, nombre) {
    super(correo, id, nombre);
    this.github = github;
  }
  getGitHub() {
    this.github;
  }
  getRole() {
    "Engineer";
  }
}
// export Engineer class
module.exports = Engineer;
