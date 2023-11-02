//Radio y altura de un cilindro

function RadioVolumenCilindro(radio, altura) {
    const area = 2 * Math.PI * radio * (radio + altura);
    const volumen = Math.PI * Math.pow(radio, 2) * altura;
    return [Math.round(area * 100) / 100, Math.round(volumen * 100) / 100];
  }
  
  const radio = 5;
  const altura = 10;
  const resultado = RadioVolumenCilindro(radio, altura);

  