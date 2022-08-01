// requiring the HTML generation file 
const generateHTML = require('./src/generateHTML');

// requiring the team profile files 
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// requiring node modules 
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// setting up file paths once HTML is written 
const distFolder = path.resolve(__dirname, "dist");
const htmlPath = path.join(distFolder, "index.html");


// empty array to arrange the team profiles 
teamArray = []; 

// function to complete the assembly of the selected team profiles 
function startPrompts () {
    
    // function to choose which team members to add to the HTML page from the command line
    function addTeamMembers () {
        inquirer.prompt([{
            type: "list",
            message: "Which employee type would you like added to your team?",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern", "No further team members necessary"] 
        }]).then(function (userInput) {
            switch(userInput.addEmployee) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                // will generate HTML page if enough employees have been added 
                default: 
                    htmlGeneration();
            }
        })
    };

    // function to add Managers based on information from the command line prompts
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please enter the Manager's name:"
            },
            {
                type: "input",
                name: "managerID",
                message: "Please enter the Manager's employee ID number:"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter the Manager's email address:"
            },
            {
                type: "input",
                name: "managerOfficeNum",
                message: "Please enter the Manager's office number:"
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum);
            teamArray.push(manager);
            addTeamMembers();
        });
    }

    // function to add Engineers to the team from the command line prompts
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Please enter the Engineer's name:"
            },
            {
                type: "input",
                name: "engineerID",
                message: "Please enter the Engineer's employee ID number:"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Please enter the Engineer's email address:"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Please enter the Engineer's GitHub username:"
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            addTeamMembers();
        });
    }

    // function to add Interns to the team from the command line prompts
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Please enter the Intern's name:"
            },
            {
                type: "input",
                name: "internID",
                message: "Please enter the Intern's employee ID number:"
            },
            {
                type: "input",
                name: "internEmail",
                message: "Please enter the Intern's email address:"
            },
            {
                type: "input",
                name: "internSchool",
                message: "Please enter the school the Intern attended:"
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            addTeamMembers();
        });
    }

    // function to add arrays created from inquirer prompts to html page and output all information 

    function htmlGeneration() {
        console.log("Your team has been created! They can be viewed here:")

        fs.writeFileSync(htmlPath, generateHTML(teamArray), "utf-8")
    }

    addTeamMembers();
}

// run prompts to assemble team 
startPrompts();
