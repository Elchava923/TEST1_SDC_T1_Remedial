//Impuestos

function calcularPrecioTotalConImpuesto(precioBasico) {
  let impuesto;

  if (precioBasico <= 20) {
    impuesto = 0;
  } else if (precioBasico <= 40) {
    impuesto = precioBasico * 0.3;
  } else if (precioBasico <= 500) {
    impuesto = 20 * 0.3 + (precioBasico - 40) * 0.4;
  } else {
    impuesto = 20 * 0.3 + 460 * 0.4 + (precioBasico - 500) * 0.5;
  }

  const precioTotal = precioBasico + impuesto;
  return Math.round(precioTotal * 100) / 100;
}

const precioBasico = 100;
const resultado = calcularPrecioTotalConImpuesto(precioBasico);
