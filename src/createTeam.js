
// functions for gathering team profiles
function teamPersonas(perfiles) {
  const personas = [];
  // compiles manager profile
  function elJefe(jefe) {
    let profileJefe = `
    <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${jefe.nombre}</h5>
          <p class="card-text">${jefe.oficina}</p>
          <p class="card-text">${jefe.identificacion}</a>
          <p class="card-text">${jefe.correo}</a>
        </div>
      </div>
    </div>
  </div>`;
    personas.push(profileJefe);
  }
  // compiles engineer profile
  function elIngeniero(ingeniero) {
    let profileIngeniero = `
    <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${ingeniero.nombre}</h5>
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
          <h5 class="card-title">${interno.nombre}</h5>
          <p class="card-text">${interno.escuela}</p>
          <p class="card-text">${interno.identificacion}</a>
          <p class="card-text">${interno.correo}</a>
        </div>
      </div>
    </div>
  </div>`;
    personas.push(profileInterno);
  }
  for (let i = 0; i < perfiles.length; i++) {
    if (perfiles[i].getEmpleo() == "Manager") {
      elJefe(perfiles[i]);
    }
    if (perfiles[i].getEmpleo() == "Engineer") {
      elIngeniero(perfiles[i]);
    }
    if (perfiles[i].getEmpleo() == "Intern") {
      elInterno(perfiles[i]);
    }
  }
  personas.join("");
}

function teamCuerpo(perfiles) {
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${teamPersonas(perfiles)}
</body>
</html>`;
  console.log(perfiles);
}

module.exports = teamCuerpo;
console.log(teamCuerpo);
