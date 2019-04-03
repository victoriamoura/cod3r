const valores = [7.7, 8.9, 6.3, 9.2];
//imprime valor das casas 0 e 3
console.log(valores[0], valores[3]);

//imprime valor na casa 4
console.log(valores[4]);

// adiciona valor na casa 4
valores[4] = 10;

// adiciona valor na casa 10
valores[10] = 8.1;

// imprime
console.log(valores);

// informa tamanho do array
console.log(valores.length);

// insere mais dados no array
valores.push({
    id: 3
}, false, null, 'teste');

//imprime
console.log(valores);

// pega o ultimo elemento
console.log(valores.pop());

// deleta primeiro elemento
delete valores[0];

// imprime
console.log(valores);

// informa tipo do array
console.log(typeof valores);