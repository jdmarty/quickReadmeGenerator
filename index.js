//required modules
const inquirer = require('inquirer');
const fs = require('fs');

//required local utilities
const baseQuestions = require('./utils/baseQuestions');
const generateMarkdown = require("./utils/generateMarkdown");

//function to create prompts for install and usage steps
function createPrompts(num, type) {
    let promptsArray = []
    //until the required number of steps has been generated...
    for (let i = 1; i <= num; i++) {
        //push a new object for the prompt method
        promptsArray.push({
            type: 'input',
            name: `${type}_${i}`,
            message: `Enter ${type} ${i}`
        })
    }
    return promptsArray
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err
        console.log('README Generated!')
    })
}

// function to initialize program
async function init() {
    console.log("\x1b[36m",'Welcome to Quick Readme Generator!\n Answer each question to generate a professionally formatted README.md\n')
    //wait for the base object to generate
    const base = await inquirer
        .prompt(baseQuestions)
    //use base object to generate install steps
    const install = await inquirer
        .prompt(createPrompts(base.installSteps, 'install step'))
    //use base object to generate usage steps
    const usage = await inquirer
        .prompt(createPrompts(base.usageSteps, 'usage step'))
    //use base object to generate credits
    const credits = await inquirer
        .prompt(createPrompts(base.credits, 'contributor'))
    //generate a data string and title to write to a new readme
    const data = generateMarkdown(base, install, usage, credits)
    const fileName = `${base.title.trim().split(' ').join('')}_README.md`
    //write the readme
    writeToFile(fileName, data)
}

// function call to initialize program
init();
