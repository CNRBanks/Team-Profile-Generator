
// import employee class
const Employee = require("./Employee.js");
// write/define Manager class that extends from employee
class Manager extends Employee {
  constructor(oficina, correo, id, nombre) {
    super(correo, id, nombre);
    this.oficina = oficina;
  }
  getOficina() {
    this.oficina;
  }
  getRole() {
    "Manager";
  }
}
// export Manager class
module.exports = Manager;

console.log(Manager);
