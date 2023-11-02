//Sueldo de trabajador

function aplicarAumentoSueldo(sueldo) {
    let nuevoSueldo;
    if (sueldo < 1000) {
      nuevoSueldo = sueldo * 1.15;
    } else {
      nuevoSueldo = sueldo * 1.12;
    }
    return Math.round(nuevoSueldo * 100) / 100;
  }
  
  const sueldo = 950;
  const resultado = aplicarAumentoSueldo(sueldo);
  