// This javascript file is used to gather the intern employee data and will prompt to add additional.


const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Render = require("./lib/htmlRenderer");

// console.log("in interninput.js")

function internInput(e) {
    let el = e.length

    // This gathers the user input for intern.

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

        // This loops through and adds interns to the e Array.

        for (let i = 0; i < response.intern.length; i++) {
            e[i + el + 1] = new Intern(response.intern[i].iName, response.intern[i].iID, response.intern[i].iEmail, response.intern[i].iSchool);

        }

        // console.log("e = ", e);

        // This calls render and passes it the array e.

        let outputhtml = Render(e);

    });



}

module.exports = internInput;