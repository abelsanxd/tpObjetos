function aprobarReprobar(nombres, promedios) {
  const aprobados = [];
  const reprobados = [];

  for (let i = 0; i < nombres.length; i++) {
    if (promedios[i] >= 6) {
      aprobados.push(nombres[i]);
    } else {
      reprobados.push(nombres[i]);
    }
  }

  return {
    aprobados: aprobados,
    reprobados: reprobados,
  };
}

const nombres = ["Augusto", "Santiago", "Jony", "Abel", "Elias"];
const promedios = [7, 5, 8, 4, 6];

const resultados = aprobarReprobar(nombres, promedios);

const mostrarArray = (titulo, mostrarLista) => {
  document.write(`<h2>${titulo} </h2>`);
  document.write(`<ul>`);
  mostrarLista.map((aprobados) => document.write(`<li>${aprobados}</li>`));
  document.write(`</ul>`);
};

mostrarArray("Estudiantes", nombres);

mostrarArray("Aprobados", resultados.aprobados);
mostrarArray("Reprobados", resultados.reprobados);
