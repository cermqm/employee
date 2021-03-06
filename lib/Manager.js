// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.role = "Manager";
        this.officeNumber = office;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;

// let e = new Intern("Mike", 0923, "mmink@michaelamink.com", "University of Kansas");

// console.log("e.role = " + e.role);
// console.log("e.name = " + e.name);
// console.log("e.id = " + e.id);
// console.log("e.email = " + e.email);
// console.log("e.office = " + e.office);

// console.log("getoffice function = " + e.getOffice());
// console.log("getRole function = " + e.getRole());