let nombresProyectos = [];

let estadosProyectos = [];

function agregarProyecto(nombreProyecto, estadoInicial) {
  nombresProyectos.push(nombreProyecto);
  estadosProyectos.push(estadoInicial);
  document.write(
    `Nuevo proyecto agregado: ${nombreProyecto} - ${estadoInicial} <br>`
  );
}

function cambiarEstadoProyecto(nombreProyecto, nuevoEstado) {
  const index = nombresProyectos.indexOf(nombreProyecto);
  if (index !== -1) {
    estadosProyectos[index] = nuevoEstado;
    document.write(
      `Estado del proyecto '${nombreProyecto}' cambiado a '${nuevoEstado}'.<br>`
    );
  } else {
    document.write(`El proyecto '${nombreProyecto}' no existe.<br>`);
  }
}

function asignarResponsable(nombreProyecto, responsable) {
  document.write(
    `Responsable '${responsable}' asignado al proyecto '${nombreProyecto}'.<br>`
  );
}

function generarResumenProyectos() {
  document.write("<br>Resumen de proyectos en curso:<br>");
  for (let i = 0; i < nombresProyectos.length; i++) {
    document.write(`${nombresProyectos[i]} - ${estadosProyectos[i]}<br>`);
  }
}

agregarProyecto("Proyecto A", "En progreso");
agregarProyecto("Proyecto B", "Pendiente");
agregarProyecto("Proyecto C", "Completado");

generarResumenProyectos();

cambiarEstadoProyecto("Proyecto B", "En progreso");
asignarResponsable("Proyecto B", "Juan Perez");

generarResumenProyectos();
