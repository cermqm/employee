const inquirer = require("inquirer");
const Intern = require("./lib/Intern");

console.log("in interninput.js")

function internInput() {

    inquirer
        .prompt([{
                type: "input",
                message: "Enter name of Intern",
                name: "iName"
            },
            {
                type: "input",
                message: "Enter the Intern's ID #",
                name: "iID"
            },
            {
                type: "input",
                message: "Enter the Intern's email address",
                name: "iEmail"
            },
            {
                type: "input",
                message: "Enter the Intern's School",
                name: "iSchool"
            }
        ])
        .then(async(response) => {

            console.log("response.iName = " + response.iName);
            console.log("response.iID = " + response.iID);
            console.log("response.iEmail = " + response.iEmail);
            console.log("response.iSchool = " + response.iSchool);

            let i = new Intern(response.iName, response.iID, response.iEmail, response.iSchool);

            console.log("i.name = " + i.name);
            console.log("i.id = " + i.id);
            console.log("i.email = " + i.email);
            console.log("i.github = " + i.school);

        });

}

module.exports = internInput;