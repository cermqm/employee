// This javascript file is used to gather the engineer employee data and will prompt to add additional.

const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const internInput = require("./interninput");
inquirer.registerPrompt('recursive', require('inquirer-recursive'));


// console.log("in engineerinput.js")

// This gathers user input for engineer.

function engineerInput(e) {

    inquirer.prompt([{
        type: 'recursive',
        message: 'Add a new Engineer?',
        name: 'engineers',
        prompts: [{
            type: "input",
            name: "eName",
            message: "Enter name of Engineer",
            validate: function(value) {
                if ((/.+/).test(value)) { return true; }
                return 'Engineer name is required!';
            }
        }, {
            type: "input",
            name: "eID",
            message: "Enter the Engineer's ID #",
            validate: function(value) {
                var digitsOnly = /\d+/;
                if (digitsOnly.test(value)) { return true; }
                return 'ID must be a number...';
            }
        }, {
            type: "input",
            name: "eEmail",
            message: "Enter the Engineer's email address",
            validate: function(value) {
                if ((/.+/).test(value)) { return true; }
                return 'Engineer email address is required!';
            }
        }, {
            type: "input",
            name: "eGitHubID",
            message: "Enter the Engineer's GitHub ID",
            validate: function(value) {
                if ((/.+/).test(value)) { return true; }
                return 'Engineer GitHub ID is required!';
            }
        }]
    }]).then(async(response) => {

        // This loops through and adds the engineers to the e Array.

        for (let i = 0; i < response.engineers.length; i++) {
            e[i + 1] = new Engineer(response.engineers[i].eName, response.engineers[i].eID, response.engineers[i].eEmail, response.engineers[i].eGitHubID);

        }
        // Calls internInput and passes array e.

        internInput(e);

        // console.log("e = ", e);

    });

}

module.exports = engineerInput;