const peso1 = 1.0;
const peso2 = Number('2.0');

// imprime valores das variáveis
console.log(peso1, peso2);

// checa se valor inteiro
// Number é uma função de checagem
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

// declara variáveis
const avaliacao1 = 9.3123;
const avaliacao2 = 8.453;

// calcula total e media
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

// retorna resultado com apenas 2 casas decimais
console.log(media.toFixed(2));

// retorna valor como string
console.log(media.toString());
// em valor binario
console.log(media.toString(2));

// imprime tipo de variavel
console.log(typeof media);

//----------------------//
// CUIDADOS COM NUMEROS //
//----------------------//

// retorna valor infinito "infinity"
console.log(7 / 0);

// string em numero dividido por numero
// JS identifica se string é numero
console.log("5" / 2);

// concatenação
console.log("5" + 2);

// string em texto dividido por numero
// retorna NaN
console.log("Show!" / 2);

// operação com imprecisão 
console.log(0.1 + 0.2);

// erro
//console.log(10. toString());

// retorna apenas 2 casas
console.log((10.65465).toFixed(2));