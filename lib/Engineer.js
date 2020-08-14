// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.role = "Engineer";
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;


// let e = new Engineer("Mike", 0923, "mmink@michaelamink.com", "cermqm");

// console.log("e.role = " + e.role);
// console.log("e.name = " + e.name);
// console.log("e.id = " + e.id);
// console.log("e.email = " + e.email);
// console.log("e.github = " + e.github);

// console.log("getGitHub function = " + e.getGitHub());
// console.log("getRole function = " + e.getRole());