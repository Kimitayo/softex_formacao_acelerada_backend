function bemVindo(){
    console.log("Bem-vindo(a) a calculadora!");
}

bemVindo();


// 2. uma função tradicional com parâmetros e um retorno de valor; 
function divisao(a,b){
    return a/b;
}

let resultadoDivisao = divisao(10,5);
console.log(`Resultado da divisão: ${resultadoDivisao}`);


// 3. uma arrow function com parâmetros e que retorne um valor. 
const multiplicacao = (a,b) => a*b;

let resultadoMultiplicacao = multiplicacao(2,6);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);
