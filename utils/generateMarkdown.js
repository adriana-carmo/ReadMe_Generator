// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  #Table of Contents:
  -[Description](#description)
  -[Contribution](#contribution)
  -[Installation](#installation)
  
  ##Description
  ${data.description}

  ##Contribution 
  ${data.contribution}

  ##Installation 
  ${data.installation}

  ##License
  For more information about the license, click on the link below:
  - [License](https://opensource.org/licenses/${data.license}) 

  ##Question
  For more questions about Generator you can go to my Github page at the follow link: 

  - [GitHub Profile]("https://github.com/"${data.title})

  For additional questions please reach out to my e-mail at : ${data.title}

`;
}

