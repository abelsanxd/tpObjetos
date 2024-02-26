class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    document.write(
      `Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio} <br>`
    );
  }
}

let producto1 = new Producto("001", "Camiseta", 20);
let producto2 = new Producto("002", "Pantalón", 30);
let producto3 = new Producto("003", "Zapatos", 50);

let productos = [producto1, producto2, producto3];

document.write("Datos de los productos: <br>");
productos.forEach((producto) => {
  producto.imprimeDatos();
});
