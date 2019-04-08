const funcoes = []

for (let i = 2; i < 12; i++) {
    funcoes.push(function () {
        console.log(i)
    })
}

funcoes[2]()
funcoes[8]()