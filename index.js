const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const baseQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this README?'
    },
        {
        type: 'list',
        name: 'license',
        message: 'which license are you using for this project?',
        choices: [
            'ISC',
            'MIT',
            'Mozilla',
            'Apache',
            'Boost',
            'BSD 3-Clause',
            'BSD 2-Clause',
            'CC0',
            'Eclipse',
            'GNU GPL v3',
            'GNU AGPL v3',
            'GNU LGPL v3',
            'GNU FDL v1.3',
            'IBM',
            'Open Data BY',
            'Open Data ODbL',
            'Open Data PDDL',
            'Perl',
            'Perl AL 2.0',
            'SIL',
            'UnLicense',
            'WTFPL',
            'ZLib'
        ]
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project'
    },
    {
        type: 'number',
        name: 'installSteps',
        message: 'How many steps are required to install your project?',
        default: 1
    },
    {
        type: 'number',
        name: 'usageSteps',
        message: 'How many steps would you like to include in your usage section?',
        default: 1
    },
        {
        type: 'input',
        name: 'includeTests',
        message: 'What are the test instructions for this application?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contributing guidelines for this application?'
    },
    {
        type: 'input',
        name: 'questionsGithub',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'What is your email address?'
    },
];

//function to create prompts for install and usage steps
function createSteps(num, type) {
    let promptsArray = []
    for (let i = 1; i <= num; i++) {
        promptsArray.push({
            type: 'input',
            name: `${type}_${i}`,
            message: `Enter ${type} instructions step ${i}`
        })
    }
    return promptsArray
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err
    })
}

// function to initialize program
async function init() {
    const base = await inquirer
        .prompt(baseQuestions)
    const install = await inquirer
        .prompt(createSteps(base.installSteps, 'install'))
    const usage = await inquirer
        .prompt(createSteps(base.usageSteps, 'usage'))
        .then(res => console.log(res))
    const data = generateMarkdown(base, install, usage)
    const fileName = `${base.title.trim().split(' ').join('')}_README.md`
    writeToFile(fileName, data)
}

// function call to initialize program
init();
