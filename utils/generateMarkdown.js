// function to generate markdown for README

// * Title
//   * Description
//   * Table of Contents
//   * Installation
//  * Usage
//  * License
//  * Contributing
//  * Tests
//  * Questions

function generateMarkdown(data) {
   return `# ${data.title}


  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.username}/${data.repo}?style=flat&logo=appveyor) 
  ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).

  #Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contribution)
  - [Test](#test)
  - [Question](#question) 
  
  
  ## Description <a name="description"></a>
    ${data.description}

  ## Installation <a name="installation"></a>
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
  For more information about the license, click on the link below:
  - [License](https://opensource.org/licenses/${data.license}) 

  ## Contributing
    ${data.contribution}

  ## Test
    ${data.test}

  ##  Question <a name="question"></a>
  For more questions about Generator you can go to my Github page at the follow link: 

  - [GitHub Profile](https://github.com/${data.username})
  - [GitHub Repo](https://github.com/${data.username}/${data.repo})

  For additional questions please reach out to my e-mail at : ${data.email}

`;
}

module.exports = generateMarkdown;

