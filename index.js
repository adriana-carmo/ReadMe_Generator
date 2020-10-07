const inquirer = require("inquirer");
const generatorMarkdown  = require("./utils/generateMarkdown");

const fs = require("fs");

// array of questions for user
const questions = [
    {   type: "input",
        message:"What is the project name?",
        name: "title"
    },
    {   type: "input",
        message:"Please enter a description of your project:",
        name: "description"
    },
    {   type: "input",
        message:"Who contributed on this project?",
        name: "contribution"
    },
    {   type: "input",
        message:"What are the installation instructions for this project? Write NONE if no instructions.",
        name: "installation"
    },
    {   type: "input",
        message:"Provide instructions and examples of your project in use for the Usage section?",
        name: "usage"
    },
    {   type: "input",
        message:"Provide any tests written for your application and provide examples on how to run them?",
        name: "test"
    },
    {   type: "checkbox",
        message:"Please select a license.",
        choices: ["Apache-2.0",
                "MIT",
                "ISC",
                "GPL-LICENSE",
                "LGPL-LICENSE"],
        name: "license"
    },
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "username"
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo'
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "Provide the name of the file that will be generated for your project?",
        name: "file"
    }
 ];

  

// function to create a README file
function writeToFile(data, filename) {
    try{
        fs.writeFileSync(filename + ".md", data )
    }
    catch (err){
        //show the error
        console.log(err);
    }
     
}

// function to initialize program
function init() {
    try{
        inquirer.prompt(questions)
        .then((response) => {
            //console.log(response);
            const createFile = generatorMarkdown(response);
            console.log(response.file);

            // calls the function to generate the file
            writeToFile(createFile, response.file );
           
        })
    }
    catch(err){
        //show the error
        console.log(err);
    }
}

// function call to initialize program
init();
