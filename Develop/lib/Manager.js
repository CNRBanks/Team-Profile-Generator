
// import employee class
const Employee = require("./Employee.js");
// write/define Manager class that extends from employee
class Manager extends Employee {
  constructor(officeNumber, email, id, name) {
    super(email, id, name);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    this.officeNumber;
  }
  getRole() {
    "Manager";
  }
}
// export Manager class
module.exports = Manager;

console.log(Manager);
