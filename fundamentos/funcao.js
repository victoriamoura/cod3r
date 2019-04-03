// função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 4, 5, 6, 7, 8);
imprimirSoma(); // NaN not a number

function soma(a, b = 0) {
  // valor de b inicial é 0
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma()); // NaN not a number
