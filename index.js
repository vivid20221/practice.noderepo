const inquirer = require('inquirer');
const fs = require('fs');
const  title = require('process');
const choices = require('inquirer/lib/objects/choices');

const generateREADME = ({ title, skills, Description, Installation, Usage, Credits, Badges, Features, Contribute, test, }) =>
  ` ${skills}
  # ${title}

  ## ${Description}
  
  

  
  ## ${Installation}
  
 
  
  ## ${Usage}
  
 
  
      
  
  ## ${Credits}
  
  
  
  ---
  
 
  ## ${Badges}
  
  
  
  ## ${Features}
  
  
  
  ##${Contribute}
  
 
  
  ## ${test} `;
  
  

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: ' <Your-Project-Title>',
    },
    {
      type: 'checkbox',
      name: 'skills',
      message: 'What coding language did you use?',
      choices: [ 
         'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white', 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white','	https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white','https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E','https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white', 'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge','ttps://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white',
      ],
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Provide a short description explaining the what, why, and how of your project.',
    },
   
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Provide instructions and examples for use. Ex: screenshots or video',
    },
    {
      type: 'input',
      name: 'Credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
      type: 'input',
      name: 'Badges',
      message:'What badges do you want to include?'
    },
    {
      type: 'input',
      name: 'Features',
      message: 'What features do you want to include?'
    },
    {
      type: 'confirm',
      name: 'test',
      message: 'Do you want to run tests?',
      default: [false],

    },
    {
      type: 'input',
      name: 'Links',
      message: 'Provide a link to your project on GitHub',
    }
  ])
  .then((answers) => {
    const readmePageContent = generateREADME(answers, answers.skills);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
