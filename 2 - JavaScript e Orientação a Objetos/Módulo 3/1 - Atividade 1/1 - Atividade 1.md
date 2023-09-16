# **Instrução do Projeto**
Escolha algum código executável em JavaScript feito em atividades passadas e o coloque no Node.js. Para isso, você deve ter o Node.js instalado. Após fazer essa migração, coloque seu código no arquivo "index.js", teste e tire um print.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.


# **Resposta**

### Print do CMD
![Captura CMD](https://github.com/Kimitayo/softex_formacao_acelerada_backend/assets/84105466/3f140077-5a95-4b6b-b6e9-d5df982a7e9e)

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
