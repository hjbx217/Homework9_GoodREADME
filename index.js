const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const markdown = require('./utils/generateMarkdown.js');


//const readFileAsync = util.promisify(fs.readFile);
//const writeFileAsync = util.promisify(fs.writeFile);

/*inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your Project Title?"
    },
    {
        type: "input",
        name: "Description",
        message: "What is your Project Description?"
    },
])
const questions = [
];*/


function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
   });
   // util.promisify(fs.writeFile(fileName, data))
}


function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your Project Title?"
        },
        {
            type: "input",
            name: "Description",
            message: "What is your Project Description?"
        },
        {
            type: "input",
            name: "Installation",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
        },

        {
            type: "input",
            name: "Usage",
            message: "Provide instructions and examples for use."
        },
        {
            type: "checkbox",
            name: "License",
            message: "Please select a license",
            choices: ["GitHub","CPAN","NPM"]
            
            //choices: [ "GitHub", new inquirer.Separator(), "CPAN", new inquirer.Separator(), "NPM" ];

        },

        {
            type: "input",
            name: "Contributing",
            message: "If you would like contribution from other developers, please add guidelines on what they will need to follow or how to do so."
        },
        {
            type: "input",
            name: "Tests",
            message: "Write tests for your application:"
        }   
    ])
    .then(function(answers){
        const makeMarkdown = markdown(answers);
        return writeToFile("generateMarkdown.md", makeMarkdown);
    })
    .then(function() {
        console.log("Markdown Success");
    })
    .catch(function(err){
        console.log(err);
    });
}

init();

//table of contents in markdown file, will link to the different sections, create links for the different headers in the markdown file, so when you click on the links in TOC, it will go to that section. 
//require api.js & generatemarkdown.js files & import them into this file, use them as if they're above the index.js code 

