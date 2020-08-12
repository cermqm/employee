// TODO: Write code to define and export the Employee class
function Employee(name, id, email) {
    this.role = "Employee";
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = (value) => {
        return this.name;
    }
    this.getId = (value) => {
        return this.id;
    }
    this.getEmail = (value) => {
        return this.email;
    }
    this.getRole = (value) => {
        return this.role;
    }
}

let e = new Employee("Mike", 0923, "mmink@michaelamink.com");

console.log("e.name = " + e.name);
console.log("e.id = " + e.id);
console.log("e.email = " + e.email);

console.log("getName function = " + e.getName());
console.log("getId function = " + e.getId());
console.log("getEmail function = " + e.getEmail());
console.log("getRole function = " + e.getRole());