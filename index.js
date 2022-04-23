// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license would you like to choose?',
        choices: [
            'Apache', 'Boost Software', 'BSD-3 Clause', 'BSD-2 Clause'
            ]
        },
    
    {
        name: 'title',
        message: 'What do you want this project to be called?',
    },
    {
        name: 'description',
        message: 'Give a brief description of this project',
    },
    {
        name: 'install',
        message: 'How do you install this project?',
    },
    {
        name: 'purposeOfProject',
        message: 'What was the motive to building this project?'
    },
    {
        name: 'problems',
        message: 'What problems did you come across with this project?',
    },
    {
        name: 'learning',
        message: 'What did you learn from this project?',
    },
    {
        name: 'standout',
        message: 'How does this project stand out from others?',
    },
    {
        name: 'userName',
        message: 'Please enter in your user name for GitHub',
    },
    {
        name: 'userEmail',
        message: 'Please enter in your email address',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
        console.log(err);
    } else {
        console.log('This works!')
    }
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            writeToFile('README.md', generateMarkdown(responses))
        })
}

// Function call to initialize app
init();