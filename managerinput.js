// This javascript file gathers the manager data, adds to the e array and calls the next function.

const inquirer = require("inquirer");
const Engineer = require("./lib/Manager");
const Manager = require("./lib/Manager");
const engineerInput = require("./engineerinput");

console.log("in managerinput.js")

// Prompts the user for the manager input.

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
            let e = [];

            // Adds manager info to the e Array.

            e[0] = new Manager(response.emName, response.emID, response.emEmail, response.emofficeNumber);

            // Calls the engineerInput function and passes the array e.
            engineerInput(e);
        });

}

module.exports = managerInput;