class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  equals(otroContacto) {
    return this.nombre === otroContacto.nombre;
  }
}

class Agenda {
  constructor(tamano = 10) {
    this.contactos = [];
    this.tamano = tamano;
  }

  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      console.log("La agenda está llena, no se puede añadir más contactos.");
    } else if (this.existeContacto(contacto)) {
      console.log("El contacto ya existe en la agenda.");
    } else {
      this.contactos.push(contacto);
      console.log("Contacto añadido correctamente.");
    }
  }

  existeContacto(contacto) {
    return this.contactos.some((c) => c.equals(contacto));
  }

  listarContactos() {
    console.log("Lista de contactos:");
    this.contactos.forEach((contacto) => {
      console.log(`${contacto.nombre}: ${contacto.telefono}`);
    });
  }

  buscarContacto(nombre) {
    const contactoEncontrado = this.contactos.find(
      (contacto) => contacto.nombre === nombre
    );
    if (contactoEncontrado) {
      console.log(`Teléfono de ${nombre}: ${contactoEncontrado.telefono}`);
    } else {
      console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
    }
  }

  eliminarContacto(contacto) {
    const index = this.contactos.findIndex((c) => c.equals(contacto));
    if (index !== -1) {
      this.contactos.splice(index, 1);
      console.log("Contacto eliminado correctamente.");
    } else {
      console.log("El contacto no existe en la agenda.");
    }
  }

  agendaLlena() {
    return this.contactos.length >= this.tamano;
  }

  huecosLibres() {
    const huecos = this.tamano - this.contactos.length;
    console.log(`Hay ${huecos} huecos libres en la agenda.`);
  }
}

function mostrarMenu() {
  const agenda = new Agenda();

  while (true) {
    const opcion = prompt(`Menú:
        1. Añadir contacto
        2. Buscar contacto
        3. Eliminar contacto
        4. Listar contactos
        5. Verificar si la agenda está llena
        6. Verificar cuántos huecos libres hay
        7. Salir
        Ingrese el número de la opción deseada:`);

    switch (opcion) {
      case "1":
        const nombre = prompt("Ingrese el nombre del contacto:");
        const telefono = prompt("Ingrese el teléfono del contacto:");
        const nuevoContacto = new Contacto(nombre, telefono);
        agenda.aniadirContacto(nuevoContacto);
        break;
      case "2":
        const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
        agenda.buscarContacto(nombreBuscar);
        break;
      case "3":
        const nombreEliminar = prompt(
          "Ingrese el nombre del contacto a eliminar:"
        );
        const contactoEliminar = new Contacto(nombreEliminar, "");
        agenda.eliminarContacto(contactoEliminar);
        break;
      case "4":
        agenda.listarContactos();
        break;
      case "5":
        console.log(
          `La agenda ${agenda.agendaLlena() ? "está llena" : "no está llena"}.`
        );
        break;
      case "6":
        agenda.huecosLibres();
        break;
      case "7":
        console.log("Saliendo del programa...");
        return;
      default:
        console.log("Opción inválida, por favor seleccione una opción válida.");
    }
  }
}

mostrarMenu();
