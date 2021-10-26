// Reference source: https://stackoverflow.com/questions/62597209/trying-to-generate-a-readme-using-nodejs

// TODO: Include packages needed for this application
const generateMarkdown = require("./util/generatemarkdown");
const { fstat } = require("fs");
// const inquire = require("inquirer");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"What's the title of your project?",
        Name: "title",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please input title');
                return false;
            }
        }
        
    },
    {
        type: "Input",
        Message: "Give a detailed description about your project",
        Name: "Description",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true; 
            } else{
                console.log('Please write description');
                return false;
            }

        }
    },
    {
    type: "Input",
    Message: "What's the purpose of this project?",
    Name: "Purpose",
    validate: purposeInput => {
        if (purposeInput) {
            return true;
        } else {
            console.log('Please input purpose of the project')
            return false;
        }
    }

    }
    ,
    
    
    {
        type: "input",
        Message: "What did you need to install or do to run this project?",
        Name: "Installation or Tools",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please insert installation process of none, N/A')
                return false;
            }
        }
    }
    ,
    {
        type: "input",
        Message: "What kind of license?",
        Name: "License",
        validate: licenseInput => {
            if (licenseInput)  {
                return true;
            } else {
                console.log('Please enter type of license')
                return false;
            }
        }

    },
    {
        type: "input",
        Message: "who contributed to this project?",
        Name: "Contributions",
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('Please input contributors on the project if not, N/A')
                return false;
            }
        }
    },
    {
        type: "input",
        Message: "What is your GitHub username?",
        Name: 'Github username',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your github username')
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(filename, data, (err) => {
if (err) 
        throw err;
    console.log('Successfully store into your README file')
    })
}    
// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions)
    .then(function (userInput) {
        console.log(userInput);
        writeToFile("README.md", generateMarkdown(userInput));
    })
//     .catch((err) => {
//         console.log(err);
//     })
}

// const init = async () => {
//     try {
//         await inquirer.prompt('Welcome to the README Generator');
//         const data = await inquirer.prompt(questions);
//         writeToFile('README.md', generateMarkdown(data));
//     } catch (err) {
//         console.log(err);
//     }
// }

// Function call to initialize app
init();
