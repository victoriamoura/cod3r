// chave nome/valor
const saudacao = "olá" // contexto lexico 1

function exec() {
    const saudacao = "e aí" // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Victoria',
    idade: 25,
    peso: 90,
    endereco: {
        logradouro: 'Av Vitória',
        numero: 522,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)