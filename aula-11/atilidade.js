// 1. Crie um programa que receba uma nota de um aluno (de 0 a 100) e mostre:
// "Aprovado" se a nota for maior ou igual a 60.
// "Reprovado" se a nota for menor que 60.

let notaAluno=90;
if(notaAluno < 60){
    console.log("aluno reprovado");
}else{
    console.log("aluno aprovado");
}

// Escreva um programa que recebe a idade de uma pessoa e mostre a fase da vida em que ela se encontra:
// "Criança" se a idade for menor que 12.
// "Adolescente" se a idade estiver entre 12 e 17.
// "Adulto" se a idade estiver entre 18 e 64.
// "Idoso" se a idade for 65 ou mais.
// Utilize if, else if e else para resolver a questão.

let idade= 666;

if (idade < 12) {
    console.log("Criança");
} else if (idade >= 12 && idade <= 17) {
    console.log("Adolescente");
} else if (idade >= 18 && idade <= 64) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}


// 3. Crie um programa que recebe um número de 1 a 12 e mostre o nome do mês do ano correspondente
//  (1 para "Janeiro", 2 para "Fevereiro", etc.). 
// Utilize switch para realizar o mapeamento dos números para os meses do ano.


let mes =11; 
switch(mes) {
    case 1 :
        console.log("janeiro");
        break;
    case 2:
        console.log("fevereiro");
        break;
    case 3:
        console.log("março");
        break;
    case 4:
        console.log("abril");
        break;
    case 5:
        console.log("maio");
        break;
    case 6:
        console.log("junho");
        break;
    case 7:
        console.log("julho");
        break;
    case 8:
        console.log("agosto")
        break;
    case 9:
        console.log("setembro")
        break;
    case 10:
        console.log("outubro")
        break;
    case 11:
        console.log("novembro")
        break;
    case 12:
        console.log("desembro")
        break;
    default:
        console.log("esse mês não exite");

}


    
// 4. Crie uma função que recebe um nome de usuário e uma senha como parâmetros e verifica se eles correspondem a valores predefinidos, como:
// usuario = "admin"
// senha = "12345"
// Se o usuário e a senha estiverem corretos, retorne "Login bem-sucedido".
// Caso contrário, retorne "Usuário ou senha incorretos".
// Use if para validar as informações de login.

// let usuario="admin";
// let senha="12345";

//     if (usuario === admin && senha === senha) {
//         return "Login bem-sucedido";
//     } else {
//         return "Usuário ou senha incorretos";
//     }

let usuario = "admin";
let senha = "12345";

let usuarioInformado = "ph100"; 
let senhaInformada = "666999";   

if (usuarioInformado === usuario && senhaInformada === senha) {
    console.log("Login bem-sucedido");
} else {
    console.log("Usuário ou senha incorretos");
}



// 5. Desenvolva um programa que receba a pontuação de um jogo e utilize um operador ternário para retornar:
// "Você venceu!" se a pontuação for maior ou igual a 100.
// "Tente novamente!" se a pontuação for menor que 100.

// ex:
// let num= -55;
// console.log((num % 2 == 0) ? "par": "impar" ) ;
// console.log((num < 0) ? "negativo" : "positivo");

let pontos=88;

console.log ((pontos < 100) ? "tente novamente" : "Você venceu!!!");



