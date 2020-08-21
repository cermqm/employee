const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Render = require("./lib/htmlRenderer");

console.log("in interninput.js")

function internInput(e) {
    let el = e.length

    inquirer.prompt([{
        type: 'recursive',
        message: 'Add a new Intern?',
        name: 'intern',
        prompts: [{
            type: "input",
            message: "Enter name of Intern",
            name: "iName"
        }, {
            type: "input",
            message: "Enter the Intern's ID #",
            name: "iID"
        }, {
            type: "input",
            message: "Enter the Intern's email address",
            name: "iEmail"
        }, {
            type: "input",
            message: "Enter the Intern's School",
            name: "iSchool"
        }]
    }]).then(async(response) => {

        console.log("response.intern", response.intern);
        console.log("response.intern.length = ", response.intern.length)

        for (let i = 0; i < response.intern.length; i++) {
            e[i + el + 1] = new Intern(response.intern[i].iName, response.intern[i].iID, response.intern[i].iEmail, response.intern[i].iSchool);

            console.log("e[i + el + 1].name = " + e[i + el + 1].name);
            console.log("e[i + el + 1].id = " + e[i + el + 1].id);
            console.log("e[i + el + 1].email = " + e[i + el + 1].email);
            console.log("e[i + el + 1].github = " + e[i + el + 1].School);
            console.log("e[i + el + 1].role = " + e[i + el + 1].role);

        }

        console.log("e = ", e);
        let outputhtml = Render(e);
        // console.log("outputhtml = ", outputhtml);

    });



}

module.exports = internInput;