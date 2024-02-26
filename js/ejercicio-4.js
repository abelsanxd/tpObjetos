// Array para almacenar los nombres de los proyectos
let nombresProyectos = [];

// Array para almacenar los estados de los proyectos
let estadosProyectos = [];

// Función para agregar un nuevo proyecto
function agregarProyecto(nombreProyecto, estadoInicial) {
  nombresProyectos.push(nombreProyecto);
  estadosProyectos.push(estadoInicial);
  document.write(
    `Nuevo proyecto agregado: ${nombreProyecto} - ${estadoInicial} <br>`
  );
}

// Función para cambiar el estado de un proyecto
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

// Función para asignar un responsable a un proyecto
function asignarResponsable(nombreProyecto, responsable) {
  // Aquí podrías implementar la lógica para asignar un responsable a un proyecto
  document.write(
    `Responsable '${responsable}' asignado al proyecto '${nombreProyecto}'.<br>`
  );
}

// Función para generar un resumen de proyectos en curso
function generarResumenProyectos() {
  document.write("<br>Resumen de proyectos en curso:<br>");
  for (let i = 0; i < nombresProyectos.length; i++) {
    document.write(`${nombresProyectos[i]} - ${estadosProyectos[i]}<br>`);
  }
}

// Ejemplo de uso
agregarProyecto("Proyecto A", "En progreso");
agregarProyecto("Proyecto B", "Pendiente");
agregarProyecto("Proyecto C", "Completado");

generarResumenProyectos();

cambiarEstadoProyecto("Proyecto B", "En progreso");
asignarResponsable("Proyecto B", "Juan Perez");

generarResumenProyectos();
