class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificarDimensiones(nuevoAlto, nuevoAncho) {
    this.alto = nuevoAlto;
    this.ancho = nuevoAncho;
    document.write(
      `Se han modificado las dimensiones del rectángulo: Alto = ${this.alto}, Ancho = ${this.ancho}<br>`
    );
  }

  mostrarPropiedades() {
    document.write(
      `Propiedades del rectángulo: Alto = ${this.alto}, Ancho = ${this.ancho}<br>`
    );
  }

  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}

let miRectangulo = new Rectangulo(5, 8);

document.write("Propiedades iniciales del rectángulo:<br>");
miRectangulo.mostrarPropiedades();

miRectangulo.modificarDimensiones(6, 10);

document.write(
  "<br>Propiedades del rectángulo después de la modificación:<br>"
);
miRectangulo.mostrarPropiedades();

document.write(
  `<br>El perímetro del rectángulo es: ${miRectangulo.calcularPerimetro()}<br>`
);

document.write(`El área del rectángulo es: ${miRectangulo.calcularArea()}<br>`);
