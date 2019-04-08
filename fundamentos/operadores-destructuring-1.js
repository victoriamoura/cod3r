// ES 2015
// Forma de extrair de dentro dos objetos seus atributos
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000,
    }
}

//destructuring
// tirar atributo nome e idade do objeto pessoa
const {
    nome,
    idade
} = pessoa
console.log(nome, idade)

// tirar atributo nome e idade do objeto pessoa inserindo em uma nova variável
const {
    nome: n,
    idade: i
} = pessoa
console.log(n, i)

// tirar atributos não declarados
const {
    sobrenome,
    humor = true
} = pessoa
console.log(sobrenome, humor)

const {
    endereco: {
        logradouro,
        numero,
        cep
    }
} = pessoa
console.log(logradouro, numero, cep)

// Ter certeza do caminho e da existência do dado na hora de desestrutura-lo

// Extrair elementos de um array 