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
            let e = [];

            // console.log("response.emName = " + response.emName);
            // console.log("response.emID = " + response.emID);
            // console.log("response.emEmail = " + response.emEmail);
            // console.log("response.emofficeNumber = " + response.emofficeNumber);

            e[0] = new Manager(response.emName, response.emID, response.emEmail, response.emofficeNumber);

            // console.log("e[0].name = " + e[0].name);
            // console.log("e[0].id = " + e[0].id);
            // console.log("e[0].email = " + e[0].email);
            // console.log("e[0].emofficeNumber = " + e[0].emofficeNumber);
            engineerInput(e);
        });

}

module.exports = managerInput;