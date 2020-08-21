const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

// -----------------------------------------------------------------------

// async function writeToFile(text) {
//     return new Promise(function(resolve, reject) {
//         console.log("options in function = ", options);
//         console.log("text in function = " + text);
//         await fs.outputFile(file, `${text}${os.EOL}${os.EOL}`, options);
//     })
// };

// await writeToFile(managerrender);

// -----------------------------------------------------------------------

const render = employees => {

    function rendermanager(employees) {

        console.log("in rendermanager");

        return new Promise(function(resolve, reject) {

            const html1 = [];

            html1.push(employees
                .filter(employee => employee.getRole() === "Manager")
                .map(manager => renderManager(manager))
            );

            let managerrender = renderMain1(html1.join(""));
            console.log("managerrender = ", managerrender);

            const file = '../output/main1.html';
            const options = { flag: 'a' };

            fs.outputFile(file, `${managerrender}${os.EOL}${os.EOL}`, options);

            const renderManager = manager => {
                let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
                template = replacePlaceholders1(template, "name", manager.getName());
                template = replacePlaceholders1(template, "role", manager.getRole());
                template = replacePlaceholders1(template, "email", manager.getEmail());
                template = replacePlaceholders1(template, "id", manager.getId());
                template = replacePlaceholders1(template, "officeNumber", manager.getOfficeNumber());
                return template;
            };

            const renderMain1 = html1 => {
                const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
                // console.log("template = ", template);
                return replacePlaceholders1(template, "manager", html1);
            };

            const replacePlaceholders1 = (template, placeholder, value) => {
                const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
                // console.log("pattern = ", pattern);
                return template.replace(pattern, value);
            };
            resolve();
        });
    }


    async function renderemployee(employees) {

        console.log("in renderemployee");

        await rendermanager(employees);

        const html2 = [];

        console.log("html2 = ", html2);
        console.log("running renderMain2");

        html2.push(employees
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => renderEngineer(engineer))
        );
        html2.push(employees
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => renderIntern(intern))
        );



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

        const renderMain2 = html2 => {
            const template = fs.readFileSync(path.resolve(templatesDir, "./output/main1.html"), "utf8");
            // console.log("template = ", template);
            return replacePlaceholders2(template, "team", html2);
        };

        const replacePlaceholders2 = (template, placeholder, value) => {
            const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
            // console.log("pattern = ", pattern);
            return template.replace(pattern, value);
        };
    };

    renderemployee(employees);

    let employeerender = renderMain2(html2.join(""));

    const file = '../output/main.html';
    const options = { flag: 'a' };

    fs.outputFile(file, `${employeerender}${os.EOL}${os.EOL}`, options);

}


module.exports = render;