const managerInput = require("./managerinput");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { TestWatcher } = require("jest");
const engineerInput = require("./engineerinput");

managerInput();
// engineerInput();