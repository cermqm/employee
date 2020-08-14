// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.role = "Intern";
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Intern;

// let e = new Intern("Mike", 0923, "mmink@michaelamink.com", "University of Kansas");

// console.log("e.role = " + e.role);
// console.log("e.name = " + e.name);
// console.log("e.id = " + e.id);
// console.log("e.email = " + e.email);
// console.log("e.school = " + e.school);

// console.log("getSchool function = " + e.getSchool());
// console.log("getRole function = " + e.getRole());