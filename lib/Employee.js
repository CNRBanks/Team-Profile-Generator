// TODO - create employee class
class Employee {
  constructor(correo, id, nombre) {
    this.correo = correo;
    this.id = id;
    this.nombre = nombre;
  }
  getCorreo() {
    return this.correo;
  }
  getId() {
    return this.id;
  }
  getNombre() {
   return this.nombre;
  }
  getEmpleo() {
    return "Employee";
  }
}
// export employee class to allow other classes to extend from it
module.exports = Employee;
console.log(Employee)