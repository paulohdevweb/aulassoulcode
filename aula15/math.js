// 2. Crie um arquivo (math.js) com duas
// funções: uma chamada subtrai que 
//retorna a diferença entre dois
// números e uma função padrão 
//(export default) chamada divide que
// retorna a divisão de dois números. 
//Importe ambas as funções em outro 
//arquivo e teste-as.

function subtrai(a, B){
    return a-B;
}

function divide(a, b){
    return a / b;
}

export{ subtrai};
export default divide;
