const produto1 = {};
produto1.nome = "Celular";
produto1.preco = 599.90;
produto1['Desconto legal'] = 0.40;

console.log(produto1);

const produto2 = {
    nome: "Camisa polo",
    valor: 49.90,
    entrega: {
        gratis: 0,
        paga: {
            sedex: 20.0,
            transportadora: 40.0
        }
    }
}

console.log(produto2);