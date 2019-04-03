// referencia em espaço de memoria

let valor
console.log(valor)
//console.log(valor2) // nao definida

// ausencia de valor
valor = null
//imprime
console.log(valor)

// imprime erro - não le valor nulo
//console.log(valor.toString())

const produto = {}

console.log(produto.preco)

produto.preco = 3.5
console.log(produto)


produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)


produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)