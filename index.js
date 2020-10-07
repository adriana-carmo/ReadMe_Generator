const inquirer = require("inquirer");
const generatorMarkdown  = require("./utils/generateMarkdown")

const fs = require("fs");


// array of questions for user
const questions = [
    {   type: "input",
        message:"What is the project name?",
        name: "title"
    },
    {   type: "input",
        message:"Please enter a description of your project.",
        name: "description"
    },
    {   type: "input",
        message:"Who contributed on this project.",
        name: "contribution"
    },
    {   type: "input",
        message:"What are the installation instructions for this project? Write NONE if no instructions.",
        name: "installation"
    }
    ,
    {   type: "checkbox",
        message:"Please select a license.",
        choices: ["Apache-2.0",
                "MIT",
                "ISC",
                "GPL-LICENSE",
                "LGPL-LICENSE"],
        name: "license"

    }
  


];

// function to write README file
function writeToFile(data) {
    try{
        fs.writeFileSync("README1.md", data )
    }
    catch (err){
        console.log(err);
    }
     
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response);
            const createFile = generatorMarkdown(response);
            console.log(createFile);

            writeToFile(createFile);
            
           
    })
          
}

// function call to initialize program
init();
