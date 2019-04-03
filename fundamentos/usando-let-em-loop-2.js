const funcoes = []

for (let i = 0; i < 10; i++) {
    funcoes.push(function () {
        console.log(i)
    })
}

funcoes[2]()
funcoes[8]()