const inquirer = require('inquirer');
const fs = require('fs');

console.log(`HELLO THERE, LET'S GET STARTED WITH YOUR NEW PROJECT'S README FILE`);

const questions = [
        {
            type: `input`,
            name: `title`,
            message: `What is the TITLE for this project?`,
            default: `Work in Progress`
        },
        {
            type: `input`,
            name: `description`,
            message: `Please type a clear description of this project's goal. Keep it short but useful:`
        },
        {
            type: `input`,
            name: `installation`,
            message: `What are the steps required to get your project's development environment running?`
        },
        {
            type: `input`,
            name: `usage`,
            message: `Provide instructions and examples for the project's use.`   
        },
        {
            type: `list`,
            name: `license`,
            message: `Select the type of license applicable for this project:`,
            choices: [
                {name: `Academic Free License v3.0`},
                {name: `Apache License 2.0`},
                {name: `Artistic License 2.0`},
                {name: `MIT License`},
                {name: `Open Software License 3.0`}
            ],
        },
        {
            type: `list`,
            name: `tests`,
            message: `Are any tests being written for your application?`,
            choices: [
                {name: `Test(s) in development`},
                {name: `None planned at the moment`},
                {name: `Test(s) welcome and appreciated, feel free to send any`}
            ],
        },
        {
            type: `input`,
            name: `account`,
            message: 'What GitHub account should be listed for questions?'
        },
        {
            type: `input`,
            name: `email`,
            message: `What email address can receive messages about this project?`
        }
    ];

inquirer.prompt(questions).then(answers => {
    // let {title, description, installation, usage, license, tests, account, email, output} = answers;
    console.log(answers);
        var title = answers.title;
        var description = answers.description;
        var installation = answers.installation;
        var usage = answers.usage;
        var license = answers.license;
        var tests = answers.tests;
        var account = answers.account;
        var email = answers.email;
        var output = `
[![License](https://img.shields.io/badge/License-OpenSource-yellow.svg)](https://opensource.org/licenses/)

# ${title}  

## Description   
    ${description }

## Table of Contents 
    *[Installation](#installation) 
    *[Usage](#usage)
    *[License](#license) 
    *[Contributing Guidelines](#contributing) 
    *[Tests](#tests) 
    *[Questions](#questions)


## Installation  
${installation }

## Usage  
${usage}

Check a video of the application walkthrough here: https://drive.google.com/file/d/1SG2Glr5Fx_iS49lccHiWTD1TQ1r6WolC/preview.

## License  
${license} 
[![License](https://img.shields.io/badge/License-OpenSource-yellow.svg)](https://opensource.org/licenses/)

## Contributing 

The Contributor Covenant Code of Conduct 
https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md is applicable. 

## Tests  
${tests} 

## Questions 
Email: ${email}  
GitHub: http://github.com/${account};

`                     


        fs.writeFile('README.md', output, (error) =>
        error ? console.error(error) : console.log("File is saved! Check your project folder."));
    }); 