const inquirer = require('inquirer');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generatePage = require('./src/page-template');
const { writeFile } = require('./src/generate-site');

const team = [];

const managerQuestions = [
  {
    // question: manager name (text input)
    type: "input",
    name: "managerName",
    message: "What is the Manager's name?(required)",
    validate: managerName => {
      if (managerName) {
        return true;
      } else {
        console.log("Please enter the Manager's name!");
        return false;
      };
    }
  },
  {
    // question: manager id (number)
    type: "input",
    name: "managerId",
    message: "What is the Manager's employee ID number?(required)",
    validate: managerId => {
      if (managerId) {
        return true;
      } else {
        console.log("Please enter the Manager's ID number!");
        return false;
      };
    }
  },
  {
    // question: manager email (input)
    type: "input",
    name: "managerEmail",
    message: "What is the Manager's email?(required)",
    validate: managerEmail => {
      if (managerEmail) {
        return true;
      } else {
        console.log("Please enter the Manager's email!");
        return false;
      };
    }
  },
  {
    // question: manager office (number)
    type: "input",
    name: "managerOffice",
    message: "What is the Manager's office number?(required)",
    validate: managerOffice => {
      if (managerOffice) {
        return true;
      } else {
        console.log("Please enter the Manager's office number!");
        return false;
      };
    }
  }
];

const engineerQuestions = [
  {
    // question: employee's name (text input)
    type: "input",
    name: "engineerName",
    message: "What is the Engineer's name?(required)",
    validate: engineerName => {
      if (engineerName) {
        return true;
      } else {
        console.log("Please enter the Engineer's name!");
        return false;
      };
    }
  },
  {
    // question: engineer id (number)
    type: "input",
    name: "engineerId",
    message: "What is the Engineer's employee ID number?(required)",
    validate: engineerId => {
      if (engineerId) {
        return true;
      } else {
        console.log("Please enter the Engineer's ID number!");
        return false;
      };
    }
  },
  {
    // question: engineer email (input)
    type: "input",
    name: "engineerEmail",
    message: "What is the Engineer's email?(required)",
    validate: engineerEmail => {
      if (engineerEmail) {
        return true;
      } else {
        console.log("Please enter the Engineer's email!");
        return false;
      };
    }
  },
  {
    // question: engineer github (input)
    type: "input",
    name: "engineerGithub",
    message: "What is the Engineer's GitHub Username?(required)",
    validate: engineerGithub => {
      if (engineerGithub) {
        return true;
      } else {
        console.log("Please enter the Engineer's GitHub!");
        return false;
      };
    }
  }
];

const internQuestions = [
  {
    // question: employee's name (text input)
    type: "input",
    name: "internName",
    message: "What is the Intern's name?(required)",
    validate: internName => {
      if (internName) {
        return true;
      } else {
        console.log("Please enter the Intern's name!");
        return false;
      };
    }
  },
  {
    // question: intern id (number)
    type: "input",
    name: "internId",
    message: "What is the Intern's employee ID number?(required)",
    validate: internId => {
      if (internId) {
        return true;
      } else {
        console.log("Please enter the Intern's ID number!");
        return false;
      };
    }
  },
  {
    // question: intern email (input)
    type: "input",
    name: "internEmail",
    message: "What is the Intern's email?(required)",
    validate: internEmail => {
      if (internEmail) {
        return true;
      } else {
        console.log("Please enter the Intern's email!");
        return false;
      };
    }
  },
  {
    // question: intern School (input)
    type: "input",
    name: "internSchool",
    message: "What is the Intern's School?(required)",
    validate: internSchool => {
      if (internSchool) {
        return true;
      } else {
        console.log("Please enter the Intern's School!");
        return false;
      };
    }
  }
];

const addConfirm = [
  {
    // question: add a team member (list)
    type: "list",
    name: "addMember",
    message: "Would you like to add a Team Member?",
    choices: ["Add an Engineer", "Add an Intern", "Done adding Team Members"]
  }
]

function teamBuilder() {
  return inquirer.prompt(addConfirm)
    .then(response => {
      if (response.addMember === "Add an Engineer") {
        return inquirer.prompt(engineerQuestions)
        .then(engineerInfo => {
          engineer = new Engineer(engineerInfo.engineerName, engineerInfo.engineerId, engineerInfo.engineerEmail, engineerInfo.engineerGithub);
          team.push(engineer);
        })
        .then(() => {
          return teamBuilder();
        })
      } else if (response.addMember === "Add an Intern") {
        return inquirer.prompt(internQuestions)
        .then(internInfo => {
          intern = new Intern(internInfo.internName, internInfo.internId, internInfo.internEmail, internInfo.internSchool);
          team.push(intern);
        })
        .then(() => {
          return teamBuilder();
        })
      } else {
        return team;
      }
    })
}

function init() {
  console.log(`
  ====================
  Harabushi's
  Project Team Builder
  ====================
  `)
  return inquirer.prompt(managerQuestions)
    .then(managerInfo => {
      manager = new Manager(managerInfo.managerName, managerInfo.managerId, managerInfo.managerEmail, managerInfo.managerOffice);
      team.push(manager)
      // console.log(team)
    })
    .then(() => {
      return teamBuilder()
    });
};

init()
  .then(teaminfo => {
    return generatePage(teaminfo)
  })
  .then(response)