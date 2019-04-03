const escola = "Cod3r";

// informa valor da casa 4 da string
console.log(escola.charAt(4));

// informa valor da casa 5 da string - inexistente
console.log(escola.charAt(5));

// retorna valor unicode da casa 3
console.log(escola.charCodeAt(3));

// 
console.log(escola.indexOf('3'));

// imprime a partir da casa 1
console.log(escola.substring(1));

// imprime do 0 ao 2
console.log(escola.substring(0, 3));

// concatenação
console.log("Escola ".concat(escola).concat("!"));

// substitui posição 3 pela letra 3
console.log(escola.replace(3, 'e'));

// substitui todos os digitos pela letra 3
console.log(escola.replace(/\d/, 'e')); 

// substituio todos numeros e letras pela letra e
console.log(escola.replace(/\w/g, 'e'));

// cria um array onde os separadores são virgula
console.log("Ana, Maria, Pedro".split(","));