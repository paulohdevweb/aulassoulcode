let usuario = "Paulo";
let curso = "full stack";

function saudacao(nome, curso) {
    console.log(`olá , ${nome}. bem-vindo(a) ao curso ${curso}`);
}
saudacao(usuario, curso);



function soma(a, b) {

    console.log(`${a} + ${b} = ${a + b}`);
}
soma(5, 8);


function calcularMedia(a, b, c) {
    const media = (a + b + c) / 3;
    console.log(`a media é: ${media} `)
    return media;
}

const returno = calcularMedia(5, 8, 7);
console.log(returno)

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

const mediaAluno = calcularMedia(5, 8, 7);
console.log(`a meia do aluno é ${mediaAluno}`);

if (mediaAluno < 7) {
    console.log("reprovado")

} else {
    console.log("aprovado");
}

function obterDiasemana(dia) {
    switch (dia) {
        case 1:
            return "domingo";
        case 2:
            return "segunda feira";
        case 3:
            return "Terça";
        case 4:
            return "quarta";
        case 5:
            return "quinta";
        case 6:
            return "sexta";
        case 7:
            return "sabado";
    }
};

console.log(obterDiasemana(5));

// funções com paramentros

// funçoes sem paramentros

// funções com retorno 

// funções sem retorno

function calcularIMC(peso, altura){
    return peso/(altura**2);
}

const imc= calcularIMC(70, 1.88);
console.log(imc);

function despedir(nome = "Amigo(a)"){
    console.log(`ate logo ${nome}`);
}

despedir();
despedir("Gabriel");

function calcularAreaCirculo (raio){
    return 3.14 * (raio ** 2);
}

// console.log(calcularAreaCirculo(raio));{
//     if (raio == undefined){
//         throw new Error("Raio do circulo Não foi definido.");
//     }
//     return 3.14 * (raio**2);
// }

// função anonima == função sem nome

function subtrair(n1, n2){
    return n1 - n2;

}
const somar = function(n1, n2){
    return n1 + n2;
}

console.log(subtrair(10,5));
console.log(somar(10, 5));


console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")

// callback -> Uma função passada como entrada de outra função

function calcular(operecao, n1, n2){
    return operecao(n1, n2);
}

calcular(function(n1,n2){ return n1 + n2 ;}, 12,8);



function potencia (base , expo){
    return base ** expo;
}

const potenciaArrow = (base ,expo) => base**expo;

console.log(potencia(3,4));
console.log(potenciaArrow(3,4));