// import Employee class
const Employee = require('./Employee.js');
// write/define Intern class
class Intern extends Employee {
    constructor(escuela, correo, id, nombre) {
        super(correo, id, nombre)
        this.escuela = escuela
    }
    getEscuela() {
     return this.escuela;
    }
    getEmpleo() {
      return "Intern";
    }
}
// export Intern class
module.exports = Intern;
// console.log(getEmpleo())