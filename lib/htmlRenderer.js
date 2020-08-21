const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");
const outputDir = path.resolve(__dirname, "../output");

const render = employees => {
    const html1 = [];
    const html2 = [];

    html1.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );
    html2.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );
    html2.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );

    async function init() {
        console.log("in init function");
        await writemain1(html1);
        console.log("in init - just before writemain");
        await writemain(html2);
    }

    function writemain1(html1) {
        return new Promise(function(resolve, reject) {
            const managerrend = renderMain1(html1.join(""));
            console.log("managerrend = ", managerrend);
            const os = require('os');
            const fs = require('fs-extra');
            // const util = require('util');
            // const fs_writeFile = util.promisify(fs.writeFile);
            const file = './output/main1.html';
            fs.unlinkSync(file);
            const options = { flag: 'w' };
            console.log("in writemain1 just before output file...");
            fs.writeFileSync(file, `${managerrend}${os.EOL}${os.EOL}`, options);
            console.log("in writemain1 just after output file...")
            resolve();
        })
    }

    function writemain(html2) {
        return new Promise(function(resolve, reject) {
            const employeerend = renderMain2(html2.join(""));
            console.log("employeerend = ", employeerend);
            const os = require('os');
            const fs = require('fs-extra');
            const file = './output/main.html';
            fs.unlinkSync(file); //hopefully deletes file before writing
            const options = { flag: 'w' };
            console.log("in writemain just before output file...");
            fs.outputFile(file, `${employeerend}${os.EOL}${os.EOL}`, options);
            console.log("in writemain just after output file...")
            resolve();
        })
    }

    init();

};

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders1(template, "name", manager.getName());
    template = replacePlaceholders1(template, "role", manager.getRole());
    template = replacePlaceholders1(template, "email", manager.getEmail());
    template = replacePlaceholders1(template, "id", manager.getId());
    template = replacePlaceholders1(template, "officeNumber", manager.getOfficeNumber());
    return template;
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replacePlaceholders2(template, "name", engineer.getName());
    template = replacePlaceholders2(template, "role", engineer.getRole());
    template = replacePlaceholders2(template, "email", engineer.getEmail());
    template = replacePlaceholders2(template, "id", engineer.getId());
    template = replacePlaceholders2(template, "github", engineer.getGithub());
    return template;
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = replacePlaceholders2(template, "name", intern.getName());
    template = replacePlaceholders2(template, "role", intern.getRole());
    template = replacePlaceholders2(template, "email", intern.getEmail());
    template = replacePlaceholders2(template, "id", intern.getId());
    template = replacePlaceholders2(template, "school", intern.getSchool());
    return template;
};

const renderMain1 = html1 => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return replacePlaceholders1(template, "manager", html1);
};

const replacePlaceholders1 = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

const renderMain2 = html2 => {
    const template = fs.readFileSync(path.resolve(outputDir, "main1.html"), "utf8");
    console.log("template ", template);
    console.log("html2 = ", html2);
    return replacePlaceholders2(template, "team", html2);
};

const replacePlaceholders2 = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

module.exports = render;