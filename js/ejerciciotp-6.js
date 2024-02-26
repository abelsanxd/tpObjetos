class Libro {
  constructor(ISBN, titulo, autor, numPaginas) {
    this._ISBN = ISBN;
    this._titulo = titulo;
    this._autor = autor;
    this._numPaginas = numPaginas;
  }

  get ISBN() {
    return this._ISBN;
  }
  set ISBN(valor) {
    this._ISBN = valor;
  }

  get titulo() {
    return this._titulo;
  }
  set titulo(valor) {
    this._titulo = valor;
  }

  get autor() {
    return this._autor;
  }
  set autor(valor) {
    this._autor = valor;
  }

  get numPaginas() {
    return this._numPaginas;
  }
  set numPaginas(valor) {
    this._numPaginas = valor;
  }

  mostrarLibro() {
    document.write(
      `El libro "${this.titulo}" con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.<br>`
    );
  }
}

let libro1 = new Libro("978-0061120084", "El Alquimista", "Paulo Coelho", 208);
let libro2 = new Libro(
  "978-1982100436",
  "Cien años de soledad",
  "Gabriel García Márquez",
  432
);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.numPaginas > libro2.numPaginas) {
  document.write(
    `El libro "${libro1.titulo}" tiene más páginas que el libro "${libro2.titulo}"<br>`
  );
} else if (libro1.numPaginas < libro2.numPaginas) {
  document.write(
    `El libro "${libro2.titulo}" tiene más páginas que el libro "${libro1.titulo}"<br>`
  );
} else {
  document.write("Ambos libros tienen el mismo número de páginas<br>");
}
