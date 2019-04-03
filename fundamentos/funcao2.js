// armazenando uma função em variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//  armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 4))

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(12, 4))

const imprimir = a => console.log(a)
imprimir(2)