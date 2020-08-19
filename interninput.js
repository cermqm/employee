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

        for (let i = 0; i < response.intern.length; i++) {
            e[i + el] = new Intern(response.intern[i].iName, response.intern[i].iID, response.intern[i].iEmail, response.intern[i].iSchool);

        }

        // console.log("e = ", e);

        Render(e);
    });

}

module.exports = internInput;