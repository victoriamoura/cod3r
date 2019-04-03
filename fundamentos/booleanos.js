let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);


console.log("Os verdadeiros...");

console.log(!!3); // número inteiro
console.log(!!-1); // número negativo
console.log(!!' '); // string
console.log(!![]); // array
console.log(!!{}); // objeto literal
console.log(!!Infinity); // infinito
console.log(!!(isAtivo = true)); // infinito
console.log(!!(isAtivo = Infinity)); // 
console.log(!!(isAtivo = 33)); // 


console.log("Os falsos...");

console.log(!!0); // zero
console.log(!!''); // string
console.log(!!null); // vazio
console.log(!!NaN); // 
console.log(!!undefined); // indefinido
console.log(!!(isAtivo = false)); // 
console.log(!!(isAtivo = 0)); // zero


console.log("Pra finalizar...");
console.log(!!('' || null || 0 || ' ')); // 

let nome = "Lucas";
console.log(nome || 'Desconhecido');