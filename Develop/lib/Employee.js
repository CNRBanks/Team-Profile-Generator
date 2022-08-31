// TODO - create employee class
class Employee {
  constructor(email, id, name) {
    this.email = email;
    this.id = id;
    this.name = name;
  }
  getEmail() {
    this.email;
  }
  getId() {
    this.id;
  }
  getName() {
    this.name;
  }
  getRole() {
    "Employee";
  }
}
// export employee class to allow other classes to extend from it
module.exports = Employee;
console.log(Employee)