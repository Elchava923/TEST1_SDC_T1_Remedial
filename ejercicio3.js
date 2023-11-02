//Area del triangulo


function calcularAreaTriangulo(lados) {
  const [L1, L2, L3] = lados;
  const semiperimetro = (L1 + L2 + L3) / 2;
  const area = Math.sqrt(
    semiperimetro *
      (semiperimetro - L1) *
      (semiperimetro - L2) *
      (semiperimetro - L3)
  );
  return Math.round(area * 100) / 100;
}

const ladosTriangulo = [5, 6, 7];
const resultado = calcularAreaTriangulo(ladosTriangulo);
