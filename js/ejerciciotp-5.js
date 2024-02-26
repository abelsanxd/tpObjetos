class Persona {
  constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
    this.DNI = this.generaDNI();
  }

  mostrarGeneracion() {
    let generacion = "";
    switch (true) {
      case this.anioNacimiento >= 1900 && this.anioNacimiento < 1920:
        generacion = "Generación G.I. (Generación Perdida)";
        break;
      case this.anioNacimiento >= 1920 && this.anioNacimiento < 1940:
        generacion = "Generación Silenciosa";
        break;
      case this.anioNacimiento >= 1940 && this.anioNacimiento < 1960:
        generacion = "Baby Boomers";
        break;
      case this.anioNacimiento >= 1960 && this.anioNacimiento < 1980:
        generacion = "Generación X";
        break;
      case this.anioNacimiento >= 1980 && this.anioNacimiento < 2000:
        generacion = "Millennials";
        break;
      case this.anioNacimiento >= 2000 && this.anioNacimiento < 2020:
        generacion = "Generación Z";
        break;
      default:
        generacion = "Generación Futura";
    }
    document.write(`La persona pertenece a la ${generacion}<br>`);
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write(`${this.nombre} es mayor de edad<br>`);
    } else {
      document.write(`${this.nombre} no es mayor de edad<br>`);
    }
  }

  mostrarDatos() {
    document.write(`Nombre: ${this.nombre}<br>`);
    document.write(`Edad: ${this.edad}<br>`);
    document.write(`Sexo: ${this.sexo}<br>`);
    document.write(`Peso: ${this.peso} kg<br>`);
    document.write(`Altura: ${this.altura} cm<br>`);
    document.write(`Año de Nacimiento: ${this.anioNacimiento}<br>`);
    document.write(`DNI: ${this.DNI}<br>`);
  }

  generaDNI() {
    return Math.floor(Math.random() * 100000000);
  }
}

let persona1 = new Persona("Juan", 25, "H", 70, 175, 1996);

persona1.mostrarGeneracion();

persona1.esMayorDeEdad();

persona1.mostrarDatos();
