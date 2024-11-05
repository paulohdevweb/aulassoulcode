let idade=15;
let autorizaoPai = true;


if (idade >= 18 || autorizaoPai ){
    console.log("pode viajar.");
}else{
    console.log("vai pra casa");
}

let clima = "nublado";
if(clima == "ensolarado"){
    console.log("hoje vou pescar!!");
}else if(clima == "nublado"){
    console.log("hoje vou as compras");
} else if (clima == "ameno"){
    console.log("hoje vou caminhar")
}
else{
    console.log("hoje vou durmir.");
}

let num= -55;
console.log((num % 2 == 0) ? "par": "impar" ) ;
console.log((num < 0) ? "negativo" : "positivo");

let dia =10; 
switch(dia) {
    case 1 :
        console.log("domingo");
        break;
    case 2:
        console.log("segunda-feira");
        break;
    case 3:
        console.log("terça-feira");
        break;
    case 4:
        console.log("quarta-feira");
        break;
    case 5:
        console.log("quinta-feira");
        break;
    case 6:
        console.log("sexta -feira");
        break;
    case 7:
        console.log("sabado");
        break;
    default:
        console.log("esse dia não exite");
}

let a = 32, b = 90, c = 17;
let maior, menor, intermediario;

if (a > b && a > c) {
    maior = a;
    if (b > c) {
        intermediario = b;
        menor = c;
    } else {
        intermediario = c;
        menor = b;
    }
} else if (b > a && b > c) {
    maior = b;
    if (a > c) {
        intermediario = a;
        menor = c;
    } else {
        intermediario = c;
        menor = a;
    }
} else {
    maior = c;
    if (a > b) {
        intermediario = a;
        menor = b;
    } else {
        intermediario = b;
        menor = a;
    }
}

console.log("Maior:", maior);
console.log("Intermediário:", intermediario);
console.log("Menor:", menor);
