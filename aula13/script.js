const linguagem= "Javascript";
console.log(linguagem[0]);

for (let letra of linguagem){
    console.log(letra);
}

console.log(linguagem);
console.log(linguagem.toLowerCase());  //minusculo
console.log(linguagem.toLocaleUpperCase()); //maiusculo
console.log(linguagem.endsWith("script")); //true
console.log(linguagem.startsWith("Java")); //false
console.log(linguagem.includes("type")); //true
console.log(linguagem.indexOf("a")); //1
console.log(linguagem.lastIndexOf("a")); //3
console.log(linguagem.lastIndexOf("java","type")); //false
console.log(linguagem.replace(2,7)); //false


const nome ="Gabriel Braga";
const curso="full stack";
console.log("bem vindo", nome , "ao curso", curso);
console.log(`BEM VINDO ${nome} ao curso${curso}`);


// const objeto ={
//     propriedade1: valor1,          assim que se monta um objeto
//     propriedade2: valor2,
//     metodo: function(){
        
//     }
// };

// const pessoa = {
//     nome:"joão",
//     idade: 30
// };

// console.log (pessoa.nome);
// pessoa.idade =31;

// console.log(pessoa["idade"]);

// pessoa.salario= 5500;
// pessoa["salario"] += 50;

// console.log(pessoa.idade);
// console.log(pessoa.salario);

//metodos em js

const pessoa ={
    nome: "joão",
    idade: 30,

    cumprimentar: function() {
        console.log("olá !!");
    }
};

pessoa.cumprimentar();

const individuo={
    nome:"Gabriel", 
    dataNascimento:"00/00/00",
    cpf:"000.000.000-00",
    altura: 1.78,
    corCabelo:"Castanho escuro"
};

console.log(individuo);
console.log(individuo.corCabelo);

console.log(individuo["corCabelo"]);
console.log(individuo.curso);
individuo.email = "phnmefe@email.com";
console.log(individuo);
individuo.curso= null;
individuo.nome="Gabriel Braga";
console.log(individuo);


delete individuo.email;  // apaga a informação do objeto
console.log(individuo);


let a1={ nome: "joão" };
let a2 = a1;

a2.nome ="Maria";

console.log(a1 , a2);