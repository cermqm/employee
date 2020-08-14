const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const internInput = require("./interninput");
inquirer.registerPrompt('recursive', require('inquirer-recursive'));


console.log("in engineerinput.js")

function engineerInput() {

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

        console.log("response.engineers = ", response.engineers)

        // console.log("response.eName = " + response.eName);
        // console.log("response.eID = " + response.eID);
        // console.log("response.eEmail = " + response.eEmail);
        // console.log("response.eGitHubID = " + response.eGitHubID);

        // let e = new Engineer(response.eName, response.eID, response.eEmail, response.eGitHubID);

        // console.log("e.name = " + e.name);
        // console.log("e.id = " + e.id);
        // console.log("e.email = " + e.email);
        // console.log("e.github = " + e.github);
        // internInput();

    });

}

module.exports = engineerInput;