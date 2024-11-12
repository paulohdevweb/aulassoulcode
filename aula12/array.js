let numero =5;
let numeros = [1,2,3,4,5,6,7,8];
console.log(numeros);
console.log(numeros[2]);

numeros [2]= 14;
console.log(numeros);

numeros.push(4);  //coloca no array esse numero;
console.log(numeros);

console.log("posição", numeros);


const nomes=["loenardo", "wesley", "paulo", "lais", "igor"];
const tam = nomes.length;

for (let i=0; i < tam; i++){
    console.log ("bem vindo (a)", nomes[i]);
}
// for (let nome of nomes) {      *** for it bem mais facil de usar pois não precisa percorrer array
//     console.log("bem vindo(a)", nome);
// }


let numeros=[12,90,22,17,56,49,46,34,10];
let i=0;
let soma=0;

while ( i < numeros.length){
    soma += numeros[i];
    i++;
}


/// aula de hj 07/11
console.log("*******************************************")