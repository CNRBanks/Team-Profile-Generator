// functions for gathering team profiles
function teamPersonas(perfiles) {
  const personas = [];
  // compiles manager profile
  function elJefe(jefe) {
    return `
    <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
        <h1 class"card-title"> Manager </h1>
          <h5 class="card-text">${jefe.nombre}</h5>
          <p class="card-text">${jefe.oficina}</p>
          <p class="card-text">${jefe.identificacion}</a>
          <p class="card-text">${jefe.correo}</a>
        </div>
      </div>
    </div>
  </div>`;
  }
  // compiles engineer profile
  function elIngeniero(ingeniero) {
    let profileIngeniero = `
    <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
        <h1 class"card-title"> Engineer </h1>
          <h5 class="card-texte">${ingeniero.nombre}</h5>
          <p class="card-text">${ingeniero.github}</p>
          <p class="card-text">${ingeniero.identificacion}</a>
          <p class="card-text">${ingeniero.correo}</a>
        </div>
      </div>
    </div>
  </div>`;
    personas.push(profileIngeniero);
  }
  // compiles manager profile
  function elInterno(interno) {
    let profileInterno = `
    <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
        <h1 class"card-title"> Intern </h1>
          <h5 class="card-text">${interno.nombre}</h5>
          <p class="card-text">${interno.escuela}</p>
          <p class="card-text">${interno.identificacion}</a>
          <p class="card-text">${interno.correo}</a>
        </div>
      </div>
    </div>
  </div>`;
    personas.push(profileInterno);
  }
  // for (let i = 0; i < perfiles.length; i++) {
  //   if (perfiles[i].getEmpleo() == "Manager") {
  //     elJefe(perfiles[i]);
  //   }
  //   if (perfiles[i].getEmpleo() == "Engineer") {
  //     elIngeniero(perfiles[i]);
  //   }
  //   if (perfiles[i].getEmpleo() == "Intern") {
  //     elInterno(perfiles[i]);
  //   }
  // }
  // personas.join("");
  personas.push(
    perfiles
      .filter((employee) => employee.getEmpleo() === "Manager")
      .map((jefe) => elJefe(jefe))
  );
  personas.push(
    perfiles
      .filter((employee) => employee.getEmpleo() === "Engineer")
      .map((ingeniero) => elIngeniero(ingeniero))
  );
  personas.push(
    perfiles
      .filter((employee) => employee.getEmpleo() === "Intern")
      .map((interno) => elInterno(interno))
  );
  console.log(personas);
  return personas.join("");
  // const todosPerfiles = teamPersonas.filter((persona) => {
  //   return persona.getEmpleo == "Manager";
  // }, todosPerfiles.join(""));
  // console.log(todosPerfiles);
}
// console.log(todosPerfiles);

function teamCuerpo(perfiles) {
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  
      <title>Team Profile Generator</title>
    </head>
    <body>
      <h1>Team Profile Generator</h1>
      ${teamPersonas(perfiles)}
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
  </html>`;
  // console.log(perfiles);
}

module.exports = teamCuerpo;
// console.log(teamCuerpo);
