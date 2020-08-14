const inquirer = require("inquirer");
const Engineer = require("./lib/Manager");
const Manager = require("./lib/Manager");
const engineerInput = require("./engineerinput");

console.log("in managerinput.js")

function managerInput() {

    inquirer
        .prompt([{
                type: "input",
                message: "Enter name of Engineering Manager",
                name: "emName"
            },
            {
                type: "input",
                message: "Enter the Engineering Manager's ID #",
                name: "emID"
            },
            {
                type: "input",
                message: "Enter the Engineering Manager's email address",
                name: "emEmail"
            },
            {
                type: "input",
                message: "Enter the Engineering Manager's office #",
                name: "emofficeNumber"
            }
        ])
        .then(async(response) => {

            console.log("response.emName = " + response.emName);
            console.log("response.emID = " + response.emID);
            console.log("response.emEmail = " + response.emEmail);
            console.log("response.emofficeNumber = " + response.emofficeNumber);

            let em = new Manager(response.emName, response.emID, response.emEmail, response.emofficeNumber);

            console.log("em.name = " + em.name);
            console.log("em.id = " + em.id);
            console.log("em.email = " + em.email);
            console.log("em.emofficeNumber = " + em.emofficeNumber);
            engineerInput();
        });

}

module.exports = managerInput;