// //programação assincrona -> funções paralelas

// console.log ("antes");

// setTimeout( ()=> {
//     console.log("atrasado");
// }, 5000);

// console.log("depois");

let a = 2;
a++;
setTimeout( () => ++a, 1000);

console.log(a); //3

// asynce e await

const resposta = axios.get("https://api.github.com/users/paulohdevweb").then(resposta => {
    console.log(resposta);
});


async function buscarDadosGithub(){
    const resposta = await axios.get("http://api.github.com/users/gabriel-soulcode");
    console.log(resposta);
}

buscarDadosGithub();

console.log("depois da requisição")