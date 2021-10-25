// Reference source: https://stackoverflow.com/questions/62597209/trying-to-generate-a-readme-using-nodejs

// TODO: Include packages needed for this application
const generateMarkdown = require(".util/generatemarkdown.js");
const { fstat } = require("fs");
const inquire = require("inquire");
const axios =require("axios");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"What's the title of your project?",
        Name: "title"
        
    },
    {
        type: "Input",
        Message: "Give a detailed description about your project",
        Name: "Description"
    },
    {
    type: "Input",
    Message: "What's the purpose of this project?",
    Name: "Purpose"
    },
    
    
    {
        type: "input",
        Message: "What did you need to install or do to run this project?",
        Name: "Installation or Tools"
        
    }
    ,
    {
        type: "input",
        Message: "What kind of license?",
        Name: "License"

    },
    {
        type: "input",
        Message: "who contributed to this project?",
        Name: "Contributions"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(filename, date, err => {
if (err) {
    return console.log(err);
}
console.log('Your file has been created')
});
    }

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions)
    .then((inquireResponse, data) => {
        console.log("Make README");
        fs.writeFileSync("README.md", inquireResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
