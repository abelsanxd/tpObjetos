const inputLibro = document.getElementById("titulo");
const boton = document.getElementById("botonLibro");
const librosFiltrados = document.getElementById("librosFiltrados");
const listaLibrosDisponibles = document.getElementById("listaLibros");

boton.classList.add("btn-danger", "btn");

boton.addEventListener("click", (event) => {
  event.preventDefault();
  verificarDisponibilidad(inputLibro.value);

  console.log(inputLibro.value);
});

const libros = [
  "Harry Potter y la piedra filosofal",
  "Cien años de soledad",
  "El señor de los anillos: La comunidad del anillo",
  "Orgullo y prejuicio",
  "Juego de tronos",
  "Eclipse",
  "El señor de los anillos: El retorno del rey",
  "Tormenta de espadas",
  "Luna nueva",
  "Harry Potter y el prisionero de Azkaban",
  "Amanecer",
  "Festín de cuervos",
  "Harry Potter y la cámara secreta",
  "Choque de reyes",
  "Danza de dragones",
  "El señor de los anillos: Las dos torres",
  "Harry Potter y el misterio del príncipe",
  "Harry Potter y las reliquias de la muerte",
  "Crepúsculo",
  "El diario de Ana Frank",
  "El libro de la selva",
];

const mostrarLibros = (listaLibros) => {
  listaLibrosDisponibles.innerHTML = `
<ul>
    ${listaLibros.map((libro) => `<li>${libro}</li>`).join("")}
</ul>
`;
};

function mostrarLibrosFiltrados(arrayLibrosFiltrados) {
  librosFiltrados.innerHTML = `
  <ul>
    ${arrayLibrosFiltrados.map((libro) => `<li>${libro}</li>`).join("")}
  </ul>
  `;
}

function verificarDisponibilidad(titulo) {
  const tituloLowerCase = titulo.toLowerCase();
  const libroEncontrado = libros.filter((libro) =>
    libro.toLowerCase().includes(tituloLowerCase)
  );

  if (libroEncontrado.length === 0) {
    return alert(`El libro "${titulo}" no está disponible para préstamo`);
  }

  mostrarLibrosFiltrados(libroEncontrado);
}

// const ingresarLibro = prompt("Ingrese un libro para saber si está disponible");

mostrarLibros(libros);
