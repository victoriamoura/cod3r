var numero = 1

{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)

function teste() {
    var numero = 3
    console.log('funcao dentro = ', numero)
}
teste()

var numero = 4
console.log('funcao fora = ', numero)


// escopos: global, função