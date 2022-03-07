function renderIcon(role) {
  const icon = {
    Manager: '<i class="fa fa-coffee" aria-hidden="true"></i>',
    Engineer: '<i class="fa fa-cog" aria-hidden="true"></i>',
    Intern: '<i class="fa fa-graduation-cap" aria-hidden="true"></i>'
  }

  return icon[role];
}

function renderUnique(employee) {
  
  const unique = {
    Manager: `Office Number: ${employee.getOfficeNumber()}`,
    Engineer: `GitHub: <a href="https://www.github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`,
    Intern: `School: ${employee.getSchool()}`
  }

  return `${unique[employee.getRole()]}`
}

function cardTemplate(employee) {
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

function templateData(team) {

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
      ${team
      .map(({ employee }) => {
        return cardTemplate(employee)
      })}
    </main>
  </body>
  </html>
  `
}

module.exports = templateData 