// import Employee class
const Employee = require('./Employee.js');
// write/define Intern class
class Intern extends Employee {
    constructor(school, email, id, name) {
        super(email, id, name)
        this.school = school
    }
    getSchool() {
     this.school;
    }
    getRole() {
     "Intern";
    }
}
// export Intern class
module.exports = Intern;