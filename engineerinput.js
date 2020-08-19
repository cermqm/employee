const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const internInput = require("./interninput");
inquirer.registerPrompt('recursive', require('inquirer-recursive'));


console.log("in engineerinput.js")

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
        // let e = [];
        console.log("response.engineers = ", response.engineers);

        // console.log("response.engineers[0].eName = " + response.engineers[0].eName);
        // console.log("response.engineers[0].eId = " + response.engineers[0].eId);
        // console.log("response.engineers[0].eEmail = " + response.engineers[0].eEmail);
        // console.log("response.engineers[0].eGitHubID = " + response.engineers[0].eGitHubID);

        for (let i = 0; i < response.engineers.length; i++) {
            e[i + 1] = new Engineer(response.engineers[i].eName, response.engineers[i].eID, response.engineers[i].eEmail, response.engineers[i].eGitHubID);
            // console.log("e[i].name = " + e[i + 1].name);
            // console.log("e[i].id = " + e[i + 1].id);
            // console.log("e[i].email = " + e[i + 1].email);
            // console.log("e[i].github = " + e[i + 1].github);
            // console.log("e[i].role = " + e[i + 1].role);
            internInput(e);
        }

        // console.log("e = ", e);

    });

}

module.exports = engineerInput;