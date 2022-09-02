// TODO - create employee class
class Employee {
  constructor(correo, id, nombre) {
    this.correo = correo;
    this.id = id;
    this.nombre = nombre;
  }
  getCorreo() {
    this.correo;
  }
  getId() {
    this.id;
  }
  getNombre() {
    this.nombre;
  }
  getEmpleo() {
    "Employee";
  }
}
// export employee class to allow other classes to extend from it
module.exports = Employee;
console.log(Employee)