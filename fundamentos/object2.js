console.log(typeof Object)

// instanciar a partir de 'new'
console.log(typeof new Object) // ou
console.log(typeof new Object())

// insntanciar a partir das minhas funções
const Cliente = function () {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

// insntanciar a partir de classes
class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())