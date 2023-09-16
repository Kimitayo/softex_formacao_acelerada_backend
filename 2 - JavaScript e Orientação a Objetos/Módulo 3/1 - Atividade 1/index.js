let a, b;

console.log("Soma -> +\nSubtração -> -\nMultiplicação -> *\nDivisão -> /\n");

let operador = prompt("Digite o operador: ");

a = Number(prompt("Digite o valor de a: "));
b = Number(prompt("Digite o valor de b: "));


if (operador == "+"){
    let soma = a+b;
    console.log(`Soma: ${soma}`);
} else if (operador == "-"){
    let subtracao = a-b;
    console.log(`Subtração: ${subtracao}`);
} else if (operador == "*"){
    let multiplicacao = a*b;
    console.log(`Multiplicação: ${multiplicacao}`);
} else if(operador == "/"){
    let divisao = a/b;
    let resto = a%b;
    console.log(`Divisão: ${divisao}\nResto: ${resto}`);
}
