// VAR visivel em qualquer bloco de código (sera)
{
    {
        {
            {
                var sera = "sera?"
            }
        }
    }
}

console.log(sera)

// VAR não visivel quando dentro de uma função (local)
function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)