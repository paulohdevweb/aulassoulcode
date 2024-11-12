// 1. Crie um programa que receba um vetor de números e mostre a soma de todos os elementos. Utilize um loop while para percorrer o vetor e somar cada elemento.

// Vetor de números predefinido
const lista = [12, 34, 56, 123, 98, 96];

// Inicializa a soma e o índice
let soma = 0;
let i = 0;

// Loop while para somar cada elemento
while (i < lista.length) {
    soma += lista[i];
    i++;
}

// mostra o resultado
console.log("A soma de todos os elementos é:", soma);

// 2. Escreva um programa que recebe um vetor de números e mostre a quantidade de números pares no vetor. Use um loop while para verificar cada elemento e um contador para contar os números pares.

// Vetor de números predefinido
const conjunto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Inicializa o contador de números pares e o índice
let nPares = 0;
i = 0;

// Loop while para verificar cada elemento do vetor
while (i < conjunto.length) {
    // Verifica se o número é par
    if (conjunto[i] % 2 === 0) {
        nPares++;
    }
    i++;
}

// Exibe o resultado
console.log("Quantidade de números pares:", nPares);


// 3. Crie um programa que receba um vetor de strings e imprima cada item com uma mensagem personalizada, por exemplo: "Item: maçã", "Item: banana", etc. Utilize o loop for...of para percorrer o vetor e exibir cada item.


// Vetor de strings predefinido
const nomes = ["Carlos", "Ines", "João", "Marcos", "Zizzo"];

// Loop for...of para exibir mensagem personalizada
for (const nome of nomes) {   //  uso do for each aprendido na aula 
    console.log("Olá, sejam muito bem vindos ao campeonato de basquete universitário!!!:", nome);
}


// 4. Desenvolva um programa que receba um vetor de números e um valor multiplicador. 
//O programa deve mostrar um novo vetor com cada elemento multiplicado pelo valor fornecido.


// Vetor de números e valor multiplicador

const numeros = [3,6,9,12,15,18,22];

const mult = 3;


// Inicializa o novo vetor para armazenar os resultados

const listaNovosNum= [];

// Loop for para multiplicar cada elemento pelo multiplicador

for (let i = 0; i < numeros.length; i++) {
    listaNovosNum.push(numeros[i] * mult);
}

// Exibe o novo vetor
console.log("Primeira Lista:", numeros);
console.log("Lista Novos Numeros :", listaNovosNum);


// 5. Escreva um programa que receba um vetor de números e mostre o maior valor contido nele.
// Utilize um loop for para comparar cada valor e encontrar o maior.


// Vetor de números predefinido
const nuns = [2,5,45,67,12,234,12345,12345,8976,324];

// Inicializa a variável maior com o primeiro valor do vetor

let maior = numeros[0];

// Loop for para encontrar o maior valor

for (let i = 1; i < nuns.length; i++) {
    if (nuns[i] > maior) {   // aqui pega o maior dos numeros e coloca na var maior
        maior = nuns[i];
    }
}

// Exibe o maior valor

console.log("O maior valor é:", maior);
