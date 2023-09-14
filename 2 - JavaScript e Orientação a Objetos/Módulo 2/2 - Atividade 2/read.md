# **Instrução do Projeto**
Com os conceitos aprendidos, crie um programa de calculadora que:

- receba dois valores, que devem ser salvos em variáveis; 
- o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
- com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
- se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma.  


# **Resposta**

### Código em JavaScript

```javascript
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
```
