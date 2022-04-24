// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'list',
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
        message: 'Give a brief description of this project: ',
    },
    {
        name: 'install',
        message: 'Please provide a link that can be cloned for a repository pull: ',
    },
    {
        name: 'usage',
        message: 'Describe how to use this project: '
    },
    {
        name: 'contribution',
        message: 'How do you want people to contribute to this project?',
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
        name: 'tests',
        message: 'Provide steps to test this project: ',
    },
    {
        name: 'userName',
        message: 'Please enter in your user name for GitHub: ',
    },
    {
        name: 'userEmail',
        message: 'Please enter in your email address: ',
    },
    {
        name: 'linkedin',
        message: 'Please enter your linkedin user name: '
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
        console.log(err);
        console.log('Had an error writing the README file')
    } else {
        console.log('.....')
        console.log('README File Has Been Created!')
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