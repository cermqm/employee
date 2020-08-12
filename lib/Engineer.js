// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
function Engineer(name, id, email, github) {
    this.role = "Engineer";
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.getGitHub = (value) => {
        return this.name;
    }
    this.getRole = (value) => {
        return this.role;
    }
}

let e = new Engineer("Mike", 0923, "mmink@michaelamink.com", "cermqm");

console.log("e.role = " + e.role);
console.log("e.name = " + e.name);
console.log("e.id = " + e.id);
console.log("e.email = " + e.email);
console.log("e.github = " + e.github);

console.log("getGitHub function = " + e.getGitHub());
console.log("getRole function = " + e.getRole());