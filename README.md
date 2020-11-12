# Quick README Generator

## Links
Repository: [https://github.com/jdmarty/READMEGenerator](https://github.com/jdmarty/READMEGenerator)

![README Generator screenshot](https://github.com/jdmarty/quickReadmeGenerator/blob/main/assets/terminal.PNG)

## Description

This command line application uses the inquirer npm library to create a series of prompts. The responses to these prompts will be used to generate a basic README file with a professional format.

## Installation

1. Clone or fork the github repository for this project [https://github.com/jdmarty/READMEGenerator](https://github.com/jdmarty/READMEGenerator)
2. Open a command line terminal in the cloned repository
3. Run "npm install" in the terminal to install the required dependencies
4. Run "node index.js" in the terminal to initiate the app

## How to Use

[Instructional Video](https://drive.google.com/file/d/1ltOuZ-gZ3VnmQ2ujN-x7bdnFIMLbShLT/view?usp=sharing)

When this app is initialized, you will be greeted with a series of prompts. The answers you give to these prompts will be used to generate a markdown file with basic headers. Answer the prompts in the following manner:

1. Enter a title for your app.
2. Select a license from the provided list
3. Enter a description for your app
4. Enter a number describing the number of steps required in your apps installation process
5. Enter a number describing the number of steps you would like in your usage section
6. Enter test instructions for your app
7. Enter contributing guidelines for your app
8. Enter the name of the GitHub profile associated with this project
9. Enter your email address
10. Enter the number of contributors that you would like to credit
11. Once you have completed these steps, you will be prompted to fill out the number of sections that you described in steps 4, 5, and 10

Once you answer all the prompts, a new README file will be generated in the root directory of the app. The name of this filed will be "projectname"_README.md

