// COM VAR - ocorre içamento
console.log('a =', a)
var a = 2
console.log('a =', a)


// o que acontece realmente
var a
console.log('a =', a)
a = 2
console.log('a =', a)

// em uma função

function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}
teste()
console.log('a =', a)

// COM LET - não ocorre o içamento 
console.log('a =', a)
let a = 2
console.log('a =', a)