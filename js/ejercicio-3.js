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

const mostrarLibros = (titulo, listaLibros) => {
  document.write(`<h2>${titulo}</h2>`);
  document.write(`<ul>`);
  listaLibros.map((libro) => document.write(`<li>${libro}</li>`));
  document.write(`</ul>`);
};

function buscarLibro(titulo) {
  const tituloLowerCase = titulo.toLowerCase();
  const libroEncontrado = libros.find(
    (libro) => libro.toLowerCase() === tituloLowerCase
  );
  if (libroEncontrado) {
    return `El libro "${libroEncontrado}" está disponible en la biblioteca`;
  } else {
    return `El libro "${titulo}" no está disponible en la biblioteca`;
  }
}

function verificarDisponibilidad(titulo) {
  const tituloLowerCase = titulo.toLowerCase();
  const libroEncontrado = libros.find(
    (libro) => libro.toLowerCase() === tituloLowerCase
  );
  if (libroEncontrado) {
    return `El libro "${libroEncontrado}" está disponible para préstamo`;
  } else {
    return `El libro "${titulo}" no está en la biblioteca`;
  }
}

const ingresarLibro = prompt("Ingrese un libro para saber si está disponible");

document.write(`<h3>Disponibilidad</h3>`);
document.write(`<p>${verificarDisponibilidad(ingresarLibro)}</p>`);

mostrarLibros("Lista de libros", libros);
