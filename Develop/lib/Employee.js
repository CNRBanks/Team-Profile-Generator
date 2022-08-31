// TODO - create employee object
class Employee {
  constructor(correo, identificacion, nombre) {
    this.correo = correo;
    this.identificacion = identificacion;
    this.nombre = nombre;
  }
  getCorreo() {
    this.correo;
  }
  getIdentificacion() {
    this.identificacion;
  }
  getNombre() {
    this.nombre;
  }
  getRole() {
    "Employee";
  }
}

module.exports = Employee;
