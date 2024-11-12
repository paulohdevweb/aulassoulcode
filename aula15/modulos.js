import { 
    multiplicar,
    dividir,
    somar,
    subtrair
} from "./calculadora.js";

import calculadora from "./calculadora.js";

// bibliotecas / modulos

// Math.tan , sin, cos

console.log(Math.sqrt(25)); //square root

console.log(Math.ceil(4.4)); // arredonda pra cima

console.log(Math.floor(4.4)); // arredonda pra baixo

console.log(Math.round(4.4)); // mais proximo

console.log(Math.random());

const rand = Math.random();
console.log("aleatorio:", Math.floor(rand * 100) + 1);

console.log(Math.max(1, 6, 4, 9, 3));
console.log(Math.min(2, 1, 4, 5, 6, 7, 3));

console.log(multiplicar(4, 5));
console.log(dividir(12, 3));
console.log(subtrair(10, 4));

console.log(somar(120, 145));


// funções recursivas
// fatorial 5! = 5 * 4 * 3 * 2 *1;

function fatorial(numero){
    if(numero == 1){
        return 1;
    }else{
        return numero * fatorial(numero - 1);
    }
}

console.log(fatorial(5));