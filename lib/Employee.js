// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.role = "Employee";
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;

// let e = new Employee("Mike", 0923, "mmink@michaelamink.com");

// console.log("e.name = " + e.name);
// console.log("e.id = " + e.id);
// console.log("e.email = " + e.email);

// console.log("getName function = " + e.getName());
// console.log("getId function = " + e.getId());
// console.log("getEmail function = " + e.getEmail());
// console.log("getRole function = " + e.getRole());