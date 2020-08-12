// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
function Intern(name, id, email, office) {
    this.role = "Manager";
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
    this.getSchool = (value) => {
        return this.school;
    }
    this.getRole = (value) => {
        return this.role;
    }
}

let e = new Intern("Mike", 0923, "mmink@michaelamink.com", "University of Kansas");

console.log("e.role = " + e.role);
console.log("e.name = " + e.name);
console.log("e.id = " + e.id);
console.log("e.email = " + e.email);
console.log("e.office = " + e.office);

console.log("getoffice function = " + e.getOffice());
console.log("getRole function = " + e.getRole());