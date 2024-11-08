// 1. Escreva uma função anônima que recebe um número e retorna 
//o dobro desse número. Atribua a função a uma variável 
//chamada dobro e teste-a com alguns valores.

// Define a função que retorna o dobro de um número
const dobro = function(n){
    return  n * 2 ;
}
console.log(`o dobro é: ${dobro(4)}`);

// 2. Crie uma arrow function chamada cubo que recebe um número e retorna o cubo dele. Teste a função com diferentes valores para verificar se o resultado está correto.

const cubo = numero => numero * 3;

// Testando a função com alguns valores

console.log(`Cubo : ${cubo(2)}`); 
console.log(cubo(5)); 
console.log(cubo(10)); 



// 3. Desenvolva uma função chamada calculaDesconto que recebe um preço e uma taxa de desconto
// (com valor padrão de 5%).A função deve retornar o preço com o desconto aplicado. 
//Teste a função passando apenas o preço e depois passando o preço e a taxa.

function calculaDesconto(preco, taxaDesconto = 0.05) {
    return preco - (preco * taxaDesconto);
}

console.log(calculaDesconto(100)); 
console.log(calculaDesconto(33.5 , 0.05))


// 4. Crie uma função chamada executaOperacao que recebe dois números e uma função de callback
// como parâmetros. A função deve executar a operação fornecida pelo callback com os dois números.
// Teste a função com operações de adição, subtração e multiplicação, passando funções anônimas como callbacks.


// Função callback

function executaOperacao(num1, num2, callback) {
    return callback(num1, num2);

}

// Adição
console.log(executaOperacao(5, 3, function(a, b) {
    return a + b;
})); 


// Subtração
console.log(executaOperacao(5, 3, function(a, b) {
    return a - b;
})); // Saída: 2


// Multiplicação
console.log(executaOperacao(5, 3, function(a, b) {
    return a * b;
})); // Saída: 15


// 5. Dado um vetor de números [1, 2, 3, 4, 5], utilize o método forEach e 
// uma função de callback para imprimir cada número multiplicado por 2. 
// Use uma função anônima ou uma arrow function como callback para simplificar o código.


// Vetor de números
const numeros = [3,5,4,6,7,8,9,12];

// Utilizando forEach com uma função anônima para multiplicar e imprimir cada número por 2

numeros.forEach(numero => console.log(numero * 2));


