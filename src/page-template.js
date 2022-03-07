function renderIcon(role) {
  const icon = {
    Manager: '<i class="fa fa-coffee" aria-hidden="true"></i>',
    Engineer: '<i class="fa fa-cog" aria-hidden="true"></i>',
    Intern: '<i class="fa fa-graduation-cap" aria-hidden="true"></i>'
  }
  return icon[role];
}

function renderUnique(employee) {
  // check and format each role's unique information. not the way I wanted to do it but couldn't get that to work
  if (employee.getRole() === "Manager") {
    // console.log("Manager Card Added")
    return `Office Number: ${employee.getOfficeNumber()}`
  } else if (employee.getRole() === "Engineer") {
    // console.log("Engineer Card Added")
    return `GitHub: <a href="https://www.github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`
  } else if (employee.getRole() === "Intern") {
    // console.log("Intern Card Added")
    return `School: ${employee.getSchool()}`
  }
}

function cardTemplate(employee) {
  //console.log(employee.getRole())
  // templates for each employee card

  return `
  <div class="card">
    <div class="card-header">
      <h4><b>${employee.getName()}</b></h4>
      <p>${renderIcon(employee.getRole())} ${employee.getRole()}</p>
    </div>
    <div class="card-body">
      <div class="table">
        <div class="row row-top">ID: ${employee.getId()}</div>
        <div class="row row-middle">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></div>
        <div class="row row-bottom">${renderUnique(employee)}</div>
      </div>
    </div>
  </div>
  `
}

function templateData(teamData) {
  // console.log(teamData)
  // console.log(teamData[0].getName())
  // full HTML template

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
      ${teamData
        .map((employee) => {
          return cardTemplate(employee)
      })}
    </main>
  </body>
  </html>
  `
}

module.exports = templateData 