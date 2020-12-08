const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


console.log(`Hello there, let's get started with creating your team member directory:`);

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

let teamArray = [];

const questions = [

    // HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

    {
        type: `list`,
        name: `role`,
        message: `Which role's information are we updating?`,
        choices: ['Engineer', 'Intern', 'Manager']
    },
    {
        type:`input`,
        name:`name`,
        message:`What is the team member's name?`
    },
    {
        type: `input`,
        name: `id`,
        message: `What's this employee's ID number?`
    },
    {
        type: `input`,
        name: `email`,
        message: `What is their email address?`
    },
    {
        when: (response) => response.role === 'Engineer',
        type: `input`,
        name: `github`,
        message: `What's the engineer's GitHub account link to be listed?`
    },
    {
        when: (response) => response.role === 'Intern',
        type: `input`,
        name: `school`,
        message: `What school is this intern coming from?`
    },
    {
        when: (response) => response.role === 'Manager',
        type: `input`,
        name: `officeNumber`,
        message: `What this employee's office extension number/office number?`
    },
    {
        type: `confirm`,
        name: `addTeamMember`,
        message: `Shall we add another member to this team?`
    }
];

inquirer.prompt(questions).then((response) => {
    if(response.role === 'Engineer') {
        const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
        teamArray.push(newEngineer)
    } else if (response.role === 'Intern') {
        const newIntern = new Intern(response.name, response.id, response.email, response.school);
        teamArray.push(newIntern)
    } else if (response.role === 'Manager') {
        const newManager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamArray.push(newManager)
    }
    if(response.addTeamMember){
        inquirer.prompt(questions)
    } else {

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

        fs.writeFile(outputPath, render(teamArray), (error) =>
        error ? console.error(error) : console.log(`Team member list created! Check out the team.html file created`)
        );
    }
})




// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
