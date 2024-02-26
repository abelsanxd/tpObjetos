let cuenta = {
  titular: "Jony",
  saldo: 0,
  ingresar: function (cantidad) {
    this.saldo += cantidad;
    document.write(`Se han ingresado ${cantidad} euros a la cuenta<br>`);
  },
  extraer: function (cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
      document.write(`Se han extraído ${cantidad} euros de la cuenta<br>`);
    } else {
      document.write(
        "No hay suficiente saldo en la cuenta para realizar esta operación<br>"
      );
    }
  },
  informar: function () {
    document.write(`Titular: ${this.titular}<br>`);
    document.write(`Saldo actual: ${this.saldo} euros<br>`);
  },
};

document.write("Descripción inicial de la cuenta:<br>");
cuenta.informar();

cuenta.ingresar(100);

cuenta.extraer(50);

document.write("<br>Descripción actualizada de la cuenta:<br>");
cuenta.informar();
